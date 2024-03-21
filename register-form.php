<?php
/**
 * Plugin Name: Register Form
 * Description: Register more users and improve engagement in WordPress.
 * Version: 1.0.0
 * Author: bPlugins LLC
 * Author URI: http://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: register-form
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Constant
define( 'RGFR_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );
define( 'RGFR_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'RGFR_DIR_PATH', plugin_dir_path( __FILE__ ) );

require_once RGFR_DIR_PATH . 'inc/block.php';