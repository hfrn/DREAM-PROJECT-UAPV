<?php
/**
 * DREAM — functions.php
 * ---------------------------------------------------------------------
 * Fonctions de thème WordPress pour le site DREAM (Digital Romanticism).
 * À placer à la racine du thème actif (wp-content/themes/ton-theme/).
 *
 * Ce fichier ne contient volontairement AUCUN texte de poème : il gère
 * uniquement l'infrastructure (scripts, styles, avis lecteurs). Les
 * poèmes eux-mêmes doivent être ajoutés séparément (custom post type
 * ou simple contenu de page), à partir de sources légitimes.
 * ---------------------------------------------------------------------
 */

if (!defined('ABSPATH')) { exit; } // sécurité : empêche l'accès direct au fichier

/* =====================================================================
   1. Chargement des styles et scripts du thème
   ===================================================================== */
function dream_enqueue_assets() {
    $theme_uri = get_stylesheet_directory_uri();
    $version   = wp_get_theme()->get('Version') ?: '1.0.0';

    wp_enqueue_style('dream-fonts',
        'https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,400;0,500;0,600;1,500&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap',
        [], null
    );
    wp_enqueue_style('dream-styles', $theme_uri . '/styles.css', [], $version);

    wp_enqueue_script('dream-script', $theme_uri . '/script.js', [], $version, true);

    // Transmet l'URL AJAX + un nonce de sécurité au script front-end.
    wp_localize_script('dream-script', 'DREAM_CONFIG', [
        'ajaxUrl' => admin_url('admin-ajax.php'),
        'nonce'   => wp_create_nonce('dream_reviews_nonce'),
    ]);
}
add_action('wp_enqueue_scripts', 'dream_enqueue_assets');

/* =====================================================================
   2. Custom Post Type : avis lecteurs (dream_review)
   ---------------------------------------------------------------------
   Chaque avis est un post de ce type, avec le poète ciblé, la note et
   le commentaire stockés en post meta. Choix volontairement simple
   (pas de table SQL custom) pour rester portable sans migration.
   ===================================================================== */
function dream_register_review_cpt() {
    register_post_type('dream_review', [
        'label'        => 'Avis DREAM',
        'public'       => false,
        'show_ui'      => true,
        'show_in_menu' => true,
        'supports'     => ['title'],
        'menu_icon'    => 'dashicons-star-filled',
    ]);
}
add_action('init', 'dream_register_review_cpt');

/* =====================================================================
   3. AJAX : soumission d'un avis
   ---------------------------------------------------------------------
   Action appelée par script.js via POST vers /wp-admin/admin-ajax.php
   avec action=dream_submit_review. Fonctionne pour un visiteur connecté
   ou non (nopriv).
   ===================================================================== */
function dream_submit_review() {
    $poet_id = isset($_POST['poet_id'])  ? sanitize_key($_POST['poet_id'])       : '';
    $name    = isset($_POST['name'])     ? sanitize_text_field($_POST['name'])  : '';
    $rating  = isset($_POST['rating'])   ? intval($_POST['rating'])             : 0;
    $comment = isset($_POST['comment'])  ? sanitize_textarea_field($_POST['comment']) : '';

    // Validation minimale côté serveur (ne jamais faire confiance au front).
    if (empty($poet_id) || empty($name) || empty($comment) || $rating < 1 || $rating > 5) {
        wp_send_json_error(['message' => 'Champs invalides.'], 400);
    }

    $post_id = wp_insert_post([
        'post_type'   => 'dream_review',
        'post_title'  => sprintf('%s — %s', $poet_id, $name),
        'post_status' => 'publish',
    ]);

    if (is_wp_error($post_id)) {
        wp_send_json_error(['message' => 'Échec de l\'enregistrement.'], 500);
    }

    update_post_meta($post_id, 'poet_id', $poet_id);
    update_post_meta($post_id, 'reviewer_name', $name);
    update_post_meta($post_id, 'rating', $rating);
    update_post_meta($post_id, 'comment', $comment);
    update_post_meta($post_id, 'created_at', current_time('mysql'));

    wp_send_json_success([
        'message' => 'Avis enregistré.',
        'review'  => compact('name', 'rating', 'comment'),
    ]);
}
add_action('wp_ajax_dream_submit_review', 'dream_submit_review');
add_action('wp_ajax_nopriv_dream_submit_review', 'dream_submit_review');

/* =====================================================================
   4. AJAX : récupération des avis d'un poète
   ---------------------------------------------------------------------
   Action dream_get_reviews, appelée avec poet_id en GET/POST.
   Renvoie un tableau JSON [{name, rating, comment}, ...] trié du plus
   récent au plus ancien.
   ===================================================================== */
function dream_get_reviews() {
    $poet_id = isset($_REQUEST['poet_id']) ? sanitize_key($_REQUEST['poet_id']) : '';
    if (empty($poet_id)) {
        wp_send_json_error(['message' => 'poet_id manquant.'], 400);
    }

    $query = new WP_Query([
        'post_type'      => 'dream_review',
        'post_status'    => 'publish',
        'posts_per_page' => 50,
        'orderby'        => 'date',
        'order'          => 'DESC',
        'meta_query'     => [
            ['key' => 'poet_id', 'value' => $poet_id],
        ],
    ]);

    $reviews = [];
    foreach ($query->posts as $post) {
        $reviews[] = [
            'name'    => get_post_meta($post->ID, 'reviewer_name', true),
            'rating'  => (int) get_post_meta($post->ID, 'rating', true),
            'comment' => get_post_meta($post->ID, 'comment', true),
        ];
    }

    wp_send_json_success(['reviews' => $reviews]);
}
add_action('wp_ajax_dream_get_reviews', 'dream_get_reviews');
add_action('wp_ajax_nopriv_dream_get_reviews', 'dream_get_reviews');

/* =====================================================================
   5. Sécurité de base
   ---------------------------------------------------------------------
   Limite simple de fréquence par IP, pour éviter le spam d'avis.
   À affiner selon tes besoins réels (ex. plugin anti-spam dédié).
   ===================================================================== */
function dream_is_rate_limited($action_key, $seconds = 30) {
    $ip  = isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : 'unknown';
    $key = 'dream_rl_' . md5($action_key . $ip);
    if (get_transient($key)) {
        return true;
    }
    set_transient($key, 1, $seconds);
    return false;
}
// Source - https://stackoverflow.com/a/57837759
// Posted by Carl Storm, modified by community. See post 'Timeline' for change history
// Retrieved 2026-09-07, License - CC BY-SA 4.0

    var body = document.getElementsByTagName("BODY")[0];
    var p1 = document.getElementById('page1');
    var p2 = document.getElementById('page2');
    var p3 = document.getElementById('page3');
    var p4 = document.getElementById('page4');
    var p5 = document.getElementById('page5');
    var whatpage = 1;
    var snap = 50;
    var i = 0;

// this part is really just to read what "page" you are on if you update the site. if you add more pages you should remember to add it here too.
window.onload = setcurrentpage;
function setcurrentpage() {
    if (window.pageYOffset == p1.offsetTop) {
        whatpage = 1;
    } else if (window.pageYOffset == p2.offsetTop) {
        whatpage = 2;
    } else if (window.pageYOffset == p3.offsetTop) {
        whatpage = 3;
    } else if (window.pageYOffset == p4.offsetTop) {
        whatpage = 4;
    } else if (window.pageYOffset == p5.offsetTop) {
        whatpage = 5;
    }
}

// this code is designet to automaticly work with any "id" you have aslong as you give it a variable called p"number" fx p10 as seen above.
function smoothscroll() {
    var whatpagenext = whatpage+1;
    var whatpageprev = whatpage-1;
    var currentpage = window['p'+whatpage];
    var nextpage = window['p'+whatpagenext];
    var prevpage = window['p'+whatpageprev];
    console.log(currentpage);
    if (window.pageYOffset > currentpage.offsetTop + snap && window.pageYOffset < nextpage.offsetTop - snap){
        body.style.overflowY = "hidden";
        i++
        window.scrollTo(0, window.pageYOffset+i);
            if (window.pageYOffset <= nextpage.offsetTop + snap && window.pageYOffset >= nextpage.offsetTop - snap) {
                i=0;
                window.scrollTo(0, nextpage.offsetTop);
                whatpage += 1;
                body.style.overflowY = "initial";
            }
    } else if (window.pageYOffset < currentpage.offsetTop - snap && window.pageYOffset > prevpage.offsetTop + snap){
            body.style.overflowY = "hidden";
            i--
            window.scrollTo(0, window.pageYOffset+i);
                if (window.pageYOffset >= prevpage.offsetTop - snap && window.pageYOffset <= prevpage.offsetTop + snap) {
                    i=0;
                    window.scrollTo(0, prevpage.offsetTop);
                    whatpage -= 1;
                    body.style.overflowY = "initial";
                }
        }
}

