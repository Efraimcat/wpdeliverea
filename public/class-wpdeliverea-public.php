<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://efraim.cat
 * @since      1.0.0
 *
 * @package    Wpdeliverea
 * @subpackage Wpdeliverea/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Wpdeliverea
 * @subpackage Wpdeliverea/public
 * @author     Efraim Bayarri <efraim@efraim.cat>
 */
class Wpdeliverea_Public {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

		add_action( 'wpd_log', array( $this, 'wpfunosLog' ), 10, 1 );

		add_filter( 'wpd_userIP', array( $this, 'wpdGetUserIP' ),10 , 1 );
		add_filter( 'wpd_is_mobile', array( $this, 'wpdIsMobile' ), 10, 1 );
		add_filter( 'wpd_dumplog', array ( $this, 'dumpPOST'), 10, 1 );
		add_filter( 'wpd_crypt', array( $this, 'wpdCrypt' ), 10, 2 );

	}

	public function enqueue_styles() {
		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/wpdeliverea-public.css', array(), $this->version, 'all' );
	}

	public function enqueue_scripts() {
		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/wpdeliverea-public.js', array( 'jquery' ), $this->version, false );
	}

	/**
	* Utility: Function to get the user IP address: add_filter( 'wpfunos_userIP', array( $this, 'wpfunosgetUserIP' ) )
	* $userIP = apply_filters('wpfunos_userIP','dummy');
	*/
	public function wpdGetUserIP() {
		$ipaddress = '';
		if (isset($_SERVER['HTTP_CLIENT_IP']))
		$ipaddress = $_SERVER['HTTP_CLIENT_IP'];
		else if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))
		$ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
		else if(isset($_SERVER['HTTP_X_FORWARDED']))
		$ipaddress = $_SERVER['HTTP_X_FORWARDED'];
		else if(isset($_SERVER['HTTP_X_CLUSTER_CLIENT_IP']))
		$ipaddress = $_SERVER['HTTP_X_CLUSTER_CLIENT_IP'];
		else if(isset($_SERVER['HTTP_FORWARDED_FOR']))
		$ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
		else if(isset($_SERVER['HTTP_FORWARDED']))
		$ipaddress = $_SERVER['HTTP_FORWARDED'];
		else if(isset($_SERVER['REMOTE_ADDR']))
		$ipaddress = $_SERVER['REMOTE_ADDR'];
		else
		$ipaddress = 'UNKNOWN';
		return $ipaddress;
	}

	/**
	* Utility to check if users como from a movile device
	*/
	public function wpdIsMobile() {
		if ( empty( $_SERVER['HTTP_USER_AGENT'] ) ) {
			$is_mobile = false;
		} elseif ( strpos( $_SERVER['HTTP_USER_AGENT'], 'Mobile' ) !== false
		|| strpos( $_SERVER['HTTP_USER_AGENT'], 'Android' ) !== false
		|| strpos( $_SERVER['HTTP_USER_AGENT'], 'Silk/' ) !== false
		|| strpos( $_SERVER['HTTP_USER_AGENT'], 'Kindle' ) !== false
		|| strpos( $_SERVER['HTTP_USER_AGENT'], 'BlackBerry' ) !== false
		|| strpos( $_SERVER['HTTP_USER_AGENT'], 'Opera Mini' ) !== false
		|| strpos( $_SERVER['HTTP_USER_AGENT'], 'iPad' ) !== false
		|| strpos( $_SERVER['HTTP_USER_AGENT'], 'iPhone' ) !== false
		|| strpos( $_SERVER['HTTP_USER_AGENT'], 'Opera Mobi' ) !== false ) {
			$is_mobile = true;
		} else {
			$is_mobile = false;
		}
		return $is_mobile;
	}

  /**
  * Utility: dump array for logfile.
  */
  public function dumpPOST($data, $indent=0) {
    $retval = '';
    $prefix=\str_repeat(' |  ', $indent);
    if (\is_numeric($data)) $retval.= "Number: $data";
    elseif (\is_string($data)) $retval.= "String: '$data'";
    elseif (\is_null($data)) $retval.= "NULL";
    elseif ($data===true) $retval.= "TRUE";
    elseif ($data===false) $retval.= "FALSE";
    elseif (is_array($data)) {
      $indent++;
      foreach($data AS $key => $value) {
        $retval.= "\r\n$prefix [$key] = ";
        $retval.= $this->dump($value, $indent);
      }
    }
    elseif (is_object($data)) {
      $retval.= "Object (".get_class($data).")";
      $indent++;
      foreach($data AS $key => $value) {
        $retval.= "\r\n$prefix $key -> ";
        $retval.= $this->dump($value, $indent);
      }
    }
    return $retval;
  }

  /**
  * Utility: create entry in the log file.
  */
  public function custom_logs($message){
    $upload_dir = wp_upload_dir();
    if (is_array($message)) {
      $message = json_encode($message);
    }
    if (!file_exists( $upload_dir['basedir'] . '/' . $this->plugin_name . '-logs') ) {
      mkdir( $upload_dir['basedir'] . '/' . $this->plugin_name . '-logs' );
    }
    $time = current_time("d-M-Y H:i:s");
    $ban = "#$time: $message\r\n";
    $file = $upload_dir['basedir'] . '/' . $this->plugin_name . '-logs/' . $this->plugin_name .'-publiclog-' . current_time("Y-m-d") . '.log';
    $open = fopen($file, "a");
    fputs($open, $ban);
    fclose( $open );
  }

  /*
  * Utility: Crypt/Decript HOOK:
  * $decode = partyo_simple_crypt( $code, 'd' );
  * $codigo = partyo_simple_crypt( $link, 'e' );
  */
  private function wpdCrypt( $string, $action = 'e' ) {
    $secret_key = 'WpD_secret_key';
    $secret_iv =  'WpD_secret_iv';

    $output = false;
    $encrypt_method = "AES-256-CBC";
    $key = hash( 'sha256', $secret_key );
    $iv = substr( hash( 'sha256', $secret_iv ), 0, 16 );

    if( $action == 'e' ) {
      $output = base64_encode( openssl_encrypt( $string, $encrypt_method, $key, 0, $iv ) );
    }
    else if( $action == 'd' ){
      $output = openssl_decrypt( base64_decode( $string ), $encrypt_method, $key, 0, $iv );
    }
    return $output;
  }
}
