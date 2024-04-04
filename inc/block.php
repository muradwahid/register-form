<?php
class RGFRRegisterForm{
	public function __construct(){
		add_action( 'init', [$this, 'onInit'] );
		add_action('wp_ajax_nopriv_rgfr_registration', [$this, 'rgfr_registration']);
		// add_action('wp_ajax_rgfr_registration', [$this, 'rgfr_registration']); // should be delete 
		add_action('wp_ajax_get_admin_roles', [$this, 'get_admin_roles']); // should be delete 
	}
	function onInit() {
		wp_register_style( 'rgfr-hello-style', RGFR_DIR_URL . 'dist/style.css', [ ], RGFR_VERSION ); // Style
		wp_register_style( 'rgfr-hello-editor-style', RGFR_DIR_URL . 'dist/editor.css', [ 'rgfr-hello-style' ], RGFR_VERSION ); // Backend Style

		register_block_type( __DIR__, [
			'editor_style'		=> 'rgfr-hello-editor-style',
			'render_callback'	=> [$this, 'render']
		] ); // Register Form

		wp_set_script_translations( 'rgfr-hello-editor-script', 'register-form', RGFR_DIR_PATH . 'languages' );
	}

	function render( $attributes ){
		extract( $attributes );

		wp_enqueue_style( 'rgfr-hello-style' );
		wp_enqueue_script( 'rgfr-hello-script', RGFR_DIR_URL . 'dist/script.js', [ 'react', 'react-dom', 'wp-util' ], RGFR_VERSION, true );
		wp_set_script_translations( 'rgfr-hello-script', 'register-form', RGFR_DIR_PATH . 'languages' );

		$className = $className ?? '';
		$blockClassName = "wp-block-b-blocks-register-form $className align$align";

		ob_start(); ?>
		<div class='<?php echo esc_attr( $blockClassName ); ?>' data-nonce="<?php echo esc_attr(wp_create_nonce('wp_ajax')) ?>" id='rgfrRegisterBlock-<?php echo esc_attr( $cId ) ?>' data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'></div>

		<?php return ob_get_clean();
	}

	function rgfr_registration(){
		$userEmailSent = false;
		$adminEmailSent = false;
		$errors = [];
		
		$nonce = sanitize_text_field($_POST['nonce']);
		// wp_send_json_error($nonce);
		if(!wp_verify_nonce($nonce, 'wp_ajax')){
			wp_send_json_error('invalid request');
		}

		
		$data = [
			'username' => sanitize_text_field($_POST['username'] ?? null),
			'email' => sanitize_text_field($_POST['email'] ?? null),
			'password' => sanitize_text_field($_POST['password'] ?? null),
			'confirmpassword' => sanitize_text_field($_POST['confirmpassword'] ?? null),
			'firstname' => sanitize_text_field($_POST['firstName'] ?? null),
			'lastname' => sanitize_text_field($_POST['lastName'] ?? null),
			'website' => sanitize_text_field($_POST['website'] ?? null),
			'role' => sanitize_text_field($_POST['role'] ?? null),
		];

		
		
		// $isRequired = $this->sanitize_array($_POST['isRequired']);
		$fields = $this->sanitize_array($_POST['fields']);
		$userEmail = $this->sanitize_array($_POST['userEmail']) ?? null;
		$adminEmail = $this->sanitize_array($_POST['adminEmail']) ?? null;

		// foreach($isRequired as $field => $required){
		// 	if($required && !$data[$field]){
		// 		$errors[$field] = "$field is missing";
		// 	}
		// }

		$adminAccount = null;
		$id = 1;
		do{
			$user = get_user_by('id', $id);
			if($user && in_array('administrator', $user->roles)){
				$adminAccount = $user;
			}
			$id++;
		}while(!$adminAccount && $id < 20);
		
		// wp_send_json_success([$adminAccount->user_email, $id]);



		foreach($fields as $field){
			if($field['required'] === 'true' && !$data[strtolower($field['type'])]){
				$errors[$field['type']] = $field['label']['text']." is missing";
			}
		}

		if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
      $errors['email'] = "invalid email";
    }

		if(count($errors)){
			wp_send_json_error($errors);
		}

		$user_id = wp_create_user($data['username'], $data['password'], $data['email']);

		if(isset($user_id->errors)){
			wp_send_json_error($user_id->errors);
		}
		
		// now we create an account
		
		if($user_id){ // sent mail after create account
			wp_update_user([
				'ID' => $user_id,
				'first_name' => $data['firstName'],
				'last_name' => $data['lastName'],
				'user_url' => $data['website'],
				'role' => $data['role'],
			]);
			
			// $headers[] = 'From: Me Myself <me@example.net>';
		try {
				if($userEmail){
				$headers = [];
				if(isset($userEmail['allowHTML']) && $userEmail['allowHTML'] && $userEmail['allowHTML'] !== 'false'){
					$headers[] =  'Content-Type: text/html; charset=UTF-8';
				}
				$userEmailSent = wp_mail($data['email'], $userEmail['subject'], $userEmail['message'], $headers);
			}

			if($adminEmail && $adminAccount){
				$headers = [];
				if(isset($adminEmail['allowHTML']) && $adminEmail['allowHTML'] && $adminEmail['allowHTML'] !== 'false' ){
					$headers[] =  'Content-Type: text/html; charset=UTF-8';
				}

				$adminEmailSent = wp_mail($adminAccount->user_email, $adminEmail['subject'], $adminEmail['message'], $headers);
			}
		} catch (\Throwable $th) {
			wp_send_json_error($th->getMessage());
		}

		}else {
			wp_send_json_error('something went wrong during registration');
		}

		$user = get_user_by('id', $user_id);

		wp_send_json_success([
			'user' => $user->data,
			'user_id' => $user_id,
			'adminEmailSent' => $adminEmailSent,
			'userEmailSent' => $userEmailSent,
			'roles' => $user->roles
		]);
	}

	function sanitize_array($array){
        if(!is_array($array)){
            return [];
        }

        foreach($array as $key => $value){
            if(strpos($key, 'secret_key') !== false && strlen($value) == 32){
                $value = sanitize_text_field(str_replace('<', '&lt;', $value) ); 
                $value = sanitize_text_field($value);
                $array[$key] = str_replace(['&lt;', '&gt;', '&amp;'], [ '<', '>', '&'], $value);
            }else {
                if(is_array($value)){
                    $array[$key] = $this->sanitize_array($value);
                }else {
                    $array[$key] =$value == 'true' ? true : ($value == 'false' ? false :  sanitize_text_field($value));
                }
            }
        }
        return $array;
  }

	function get_admin_roles(){

		$nonce = sanitize_text_field($_POST['nonce']);
		// wp_send_json_error($nonce);
		if(!wp_verify_nonce($nonce, 'wp_rest')){
			wp_send_json_error('invalid request');
		}

		try {
			wp_send_json_success(array_keys(wp_roles()->roles));
		} catch (\Throwable $th) {
			wp_send_json_error($th->getMessage());
			//throw $th;
		}
	}


	}
new RGFRRegisterForm();
require_once("ExtendMime.php");

