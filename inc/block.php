<?php
class RGFRRegisterForm{
	public function __construct(){
		add_action( 'init', [$this, 'onInit'] );
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
		wp_enqueue_script( 'rgfr-hello-script', RGFR_DIR_URL . 'dist/script.js', [ 'react', 'react-dom' ], RGFR_VERSION, true );
		wp_set_script_translations( 'rgfr-hello-script', 'register-form', RGFR_DIR_PATH . 'languages' );

		$className = $className ?? '';
		$blockClassName = "wp-block-rgfr-hello $className align$align";

		ob_start(); ?>
		<div class='<?php echo esc_attr( $blockClassName ); ?>' data-nonce="<?php echo esc_attr(wp_create_nonce('wp_ajax')) ?>" id='rgfrRegisterBlock-<?php echo esc_attr( $cId ) ?>' data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'></div>

		<?php return ob_get_clean();
	}
}
new RGFRRegisterForm();
require_once("ExtendMime.php");