<?php
/*
Plugin Name: s2Member Buttons
Plugin URI: http://www.spiderwebpress.com
Description: Some simple buttons to help with use of the fantastic s2Member plugin
Version: 1.0
Author: Kezz Bracey
Author URI: http://www.spiderwebpress.com
*/

/*add insert list of member sites shortcode*/
function insertmembersites() {
	global $current_user;

	$blogs = get_blogs_of_user( $current_user->id );
     if($blogs) {
		$sitelist = '<ul>';
		 
		foreach($blogs as $blog) :
		$sitelist .= '<li><a href="http://' . $blog->domain . $blog->path .'">' .  $blog->blogname . '</a></li>';
		endforeach;
		 
		$sitelist .= '</ul>';
        return $sitelist;
     }
}

add_shortcode('membersites', 'insertmembersites');
/*end insert list of member sites shortcode*/

/*add insert EOT shortcode*/
function inserteot() {
	$auto_eot_time = get_user_option ("s2member_auto_eot_time", $uid);
	$auto_eot_time = ($auto_eot_time) ? date ("l F jS, Y @ g:ia e", $auto_eot_time) : "";
	return $auto_eot_time;
}

add_shortcode('eot', 'inserteot');
/*end insert EOT  shortcode*/

/*
Editor buttons
*/

add_action('init', 'loggedin_button');

function loggedin_button() {
   if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') ) {
     return;
   }
 
   if ( get_user_option('rich_editing') == 'true' ) {
     add_filter( 'mce_external_plugins', 'add_s2toolsplugin' );
     add_filter( 'mce_buttons', 'register_s2toolsbuttons' );
   }
 
}

function register_s2toolsbuttons( $buttons ) {
 array_push( $buttons, "|", "membersites", "|", "eot", "|", "loggedin", "|", "notloggedin", "|", "oneplus", "|", "notoneplus", "|", "one", "|", "two", "|", "three", "|", "four", "|", "zero", "|", "public" );
 return $buttons;
}

/* Register TinyMCE Plugin */
function add_s2toolsplugin( $plugin_array ) {
   $plugin_array['membersites'] = plugin_dir_url(__FILE__) . 'buttons.js';
   return $plugin_array;
}

?>