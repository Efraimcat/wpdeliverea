<?php

/**
* The admin-specific functionality of the plugin.
*
* @link       https://efraim.cat
* @since      1.0.0
*
* @package    Wpdeliverea
* @subpackage Wpdeliverea/admin
*/

/**
* The admin-specific functionality of the plugin.
*
* Defines the plugin name, version, and two examples hooks for how to
* enqueue the admin-specific stylesheet and JavaScript.
*
* @package    Wpdeliverea
* @subpackage Wpdeliverea/admin
* @author     Efraim Bayarri <efraim@efraim.cat>
*/
class Wpdeliverea_Admin {
	private $plugin_name;
	private $version;

	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;
		add_action('init', array( $this, 'carriers_custom_post_type' ));
		add_action('admin_menu', array( $this, 'addPluginAdminMenu' ), 9);
		add_action('add_meta_boxes_carriers_deli', array( $this, 'setupcarriers_deliMetaboxes' ));
		add_action('save_post_carriers_deli', array( $this, 'savecarriers_deliMetaBoxData' ));
	}

	public function enqueue_styles() {
		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/wpdeliverea-admin.css', array(), $this->version, 'all' );
	}

	public function enqueue_scripts() {
		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/wpdeliverea-admin.js', array( 'jquery' ), $this->version, false );
	}

	public function addPluginAdminMenu() {
		//add_menu_page( $page_title, $menu_title, $capability, $menu_slug, $function, $icon_url, $position );
		add_menu_page( 'Deliverea', 'Deliverea', 'administrator', $this->plugin_name, array( $this, 'display_plugin_admin_dashboard' ), plugin_dir_url(dirname(__FILE__)) . '/wp-content/uploads/2022/08/imagotipo.png', 26 ); //dev.website.deliverea.com/wp-content/uploads/2022/08/imagotipo.png
	}

	public function display_plugin_admin_dashboard(){

		?>
		<div class="wrap">
			<h2><?php esc_html_e( get_admin_page_title() .' '.$this->version); ?></h2>
			<?php settings_errors(); ?>
			<h3><?php esc_html_e( 'Deliverea', 'wpdeliverea' )?></h3>
			<div style="margin-top: 10px;margin-bottom: 10px;"><?php echo date_i18n( 'd F Y H:i:s', current_time( 'timestamp', 0 ) );?></div>
			<hr />
		</div>
		<?php

	}

	public function carriers_custom_post_type(){
		$customPostTypeArgs = array(
			'label' => esc_html__('Carriers', 'wpdeliverea'),
			'labels'=>
			array(
				'name' => esc_html__('Deliverea Carriers', 'wpdeliverea'),
				'singular_name' => esc_html__('Carrier', 'wpdeliverea'),
				'add_new' => esc_html__('Añadir Carrier', 'wpdeliverea'),
				'add_new_item' => esc_html__('Añadir nuevo carrier', 'wpdeliverea'),
				'edit_item' => esc_html__('Editar carrier', 'wpdeliverea'),
				'new_item' => esc_html__('Nuevo carrier', 'wpdeliverea'),
				'view_item' => esc_html__('Ver carrier', 'wpdeliverea'),
				'search_items' => esc_html__('Buscar carrier', 'wpdeliverea'),
				'not_found' => esc_html__('No se encontraron carriers', 'wpdeliverea'),
				'not_found_in_trash' => esc_html__('No se encontraron carriers en la papelera', 'wpdeliverea'),
				'menu_name' => esc_html__('Carriers', 'wpdeliverea'),
				'name_admin_bar' => esc_html__('Carriers', 'wpdeliverea'),
			),
			'public'=>false,
			'description' => esc_html__('Carriers', 'wpdeliverea'),
			'exclude_from_search' => true,
			'show_ui' => true,
			'show_in_menu' => $this->plugin_name,
			'supports'=>array('title', 'custom_fields'),
			'capability_type' => 'post',
			'capabilities' => array('create_posts' => true),
			'map_meta_cap' => true,
			'taxonomies'=>array()
		);
		// Post type, $args - the Post Type string can be MAX 20 characters
		register_post_type( 'carriers_deli', $customPostTypeArgs );
	}

	public function setupcarriers_deliMetaboxes(){
		add_meta_box('carriers_deli_data_meta_box', esc_html__('Información', 'wpdeliverea'), array($this,'carriers_deli_data_meta_box'), 'carriers_deli', 'normal', 'high' );
		remove_meta_box('wpseo_meta', 'carriers_deli', 'normal');
	}

	public function savecarriers_deliMetaBoxData( $post_id ){
		if (! isset($_POST['wpdeliverea_carriers_deli_meta_box_nonce'])) return;
		if (! wp_verify_nonce($_POST['wpdeliverea_carriers_deli_meta_box_nonce'], 'wpdeliverea_carriers_deli_meta_box')) return;
		if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
		if (! current_user_can('manage_options')) return;

		$carrierNombre = sanitize_text_field( $_POST['wpdeliverea_carrierNombre'] );
		$carrierLogo = sanitize_text_field( $_POST['wpdeliverea_carrierLogo'] );

		update_post_meta($post_id, 'wpdeliverea_carrierNombre', $funerariaNombre);
		update_post_meta($post_id, 'wpdeliverea_carrierLogo', $funerariaLogo);


	}

	public function carriers_deli_data_meta_box($post){
		wp_nonce_field( 'wpdeliverea_carriers_deli_meta_box', 'wpdeliverea_carriers_deli_meta_box_nonce' );

		?>
		<div class="carriers_deli_containers">
			<ul class="carriers_deli_data_metabox">
				<li class="carriers_deli_list">
					<table>
						<tr>
							<td><?php esc_html_e('Nombre', 'wpdeliverea');?></td>
							<td><?php $this->wpdeliverea_render_settings_field(array('type' => 'input','subtype' => 'text','id' => 'wpdeliverea_carrierNombre','name' => 'wpdeliverea_carrierNombre','required' => 'required','get_options_list' => '','value_type' => 'normal','wp_data' => 'post_meta','post_id' => $post->ID));?></td>
						</tr>
						<tr>
							<td><?php esc_html_e('Logo', 'wpdeliverea');?></td>
							<td><?php $this->wpdeliverea_render_settings_field(array('type' => 'input','subtype' => 'text','id' => 'wpdeliverea_carrierLogo','name' => 'wpdeliverea_carrierLogo','required' => 'required','get_options_list' => '','value_type' => 'normal','wp_data' => 'post_meta','post_id' => $post->ID));?></td>
						</tr>
					</table>
				</li>
			</ul>
		</div>
		<?php

	}

	public function wpdeliverea_render_settings_field($args)
	{
		if ($args['wp_data'] == 'option') {
			$wp_data_value = get_option($args['name']);
		} elseif ($args['wp_data'] == 'post_meta') {
			$wp_data_value = get_post_meta($args['post_id'], $args['name'], true);
		}

		switch ($args['type']) {
			case 'input':
			$value = ($args['value_type'] == 'serialized') ? serialize($wp_data_value) : $wp_data_value;
			if ($args['subtype'] != 'checkbox') {
				$prependStart = (isset($args['prepend_value'])) ? '<div class="input-prepend"> <span class="add-on">' . $args['prepend_value'] . '</span>' : '';
				$prependEnd = (isset($args['prepend_value'])) ? '</div>' : '';
				if ($args['id'] == $this->plugin_name . '_DisplayListPageId') $prependEnd = ' ' . get_the_title($value) . '</div>';
				$step = (isset($args['step'])) ? 'step="' . $args['step'] . '"' : '';
				$min = (isset($args['min'])) ? 'min="' . $args['min'] . '"' : '';
				$max = (isset($args['max'])) ? 'max="' . $args['max'] . '"' : '';
				$size = (isset($args['size'])) ? 'size="' . $args['size'] . '"' : 'size="40"';
				if (isset($args['disabled'])) {
					// hide the actual input bc if it was just a disabled input the informaiton saved in the database would be wrong - bc it would pass empty values and wipe the actual information
					echo $prependStart . '<input type="' . $args['subtype'] . '" id="' . $args['id'] . '_disabled" ' . $step . ' ' . $max . ' ' . $min . ' name="' . $args['name'] . '_disabled" ' . $size . ' disabled value="' . esc_attr($value) . '" /><input type="hidden" id="' . $args['id'] . '" ' . $step . ' ' . $max . ' ' . $min . ' name="' . $args['name'] . '" size="40" value="' . esc_attr($value) . '" />' . $prependEnd;
				} else {
					echo $prependStart . '<input type="' . $args['subtype'] . '" id="' . $args['id'] . '" "' . $args['required'] . '" ' . $step . ' ' . $max . ' ' . $min . ' name="' . $args['name'] . '" ' . $size . ' value="' . esc_attr($value) . '" />' . $prependEnd;
				}
				/* <input required="required" '.$disabled.' type="number" step="any" id="'.$this->plugin_name.'_cost2" name="'.$this->plugin_name.'_cost2" value="' . esc_attr( $cost ) . '" size="25" /><input type="hidden" id="'.$this->plugin_name.'_cost" step="any" name="'.$this->plugin_name.'_cost" value="' . esc_attr( $cost ) . '" /> */
			} else {
				$checked = ($value) ? 'checked' : '';
				?>
				<input type="<?php esc_html_e( $args['subtype'] ); ?>"
				id="<?php esc_html_e( $args['id'] ); ?>"
				<?php esc_html_e( $args['required'] ); ?>
				name="<?php esc_html_e( $args['name'] ); ?>" size="40" value="1"
				<?php esc_html_e( $checked ); ?> /><?php
			}
			break;
			default:
			break;
		}
	}
}
