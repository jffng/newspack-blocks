<?php
/**
 * Server-side rendering of the `newspack-blocks/carousel` block.
 *
 * @package WordPress
 */

/**
 * Renders the `newspack-blocks/carousel` block on server.
 *
 * @param array $attributes The block attributes.
 *
 * @return string Returns the post content with latest posts added.
 */
function newspack_blocks_render_block_carousel( $attributes ) {
	if ( ! wp_script_is( 'amp-runtime', 'registered' ) ) {
		// phpcs:ignore WordPress.WP.EnqueuedResourceParameters.MissingVersion
		wp_register_script(
			'amp-runtime',
			'https://cdn.ampproject.org/v0.js',
			null,
			null,
			true
		);
	}
	if ( ! wp_script_is( 'amp-carousel', 'registered' ) ) {
		// phpcs:ignore WordPress.WP.EnqueuedResourceParameters.MissingVersion
		wp_register_script(
			'amp-carousel',
			'https://cdn.ampproject.org/v0/amp-carousel-latest.js',
			array( 'amp-runtime' ),
			null,
			true
		);
	}
	if ( ! wp_script_is( 'amp-selector', 'registered' ) ) {
		// phpcs:ignore WordPress.WP.EnqueuedResourceParameters.MissingVersion
		wp_register_script(
			'amp-selector',
			'https://cdn.ampproject.org/v0/amp-selector-latest.js',
			array( 'amp-runtime' ),
			null,
			true
		);
	}

	wp_enqueue_script( 'amp-carousel' );
	wp_enqueue_script( 'amp-selector' );
	static $newspack_blocks_carousel_id = 0;
	$newspack_blocks_carousel_id++;
	$autoplay      = isset( $attributes['autoplay'] ) ? $attributes['autoplay'] : false;
	$delay         = isset( $attributes['delay'] ) ? absint( $attributes['delay'] ) : 3;
	$posts_to_show = intval( $attributes['postsToShow'] );
	$authors       = isset( $attributes['authors'] ) ? $attributes['authors'] : array();
	$categories    = isset( $attributes['categories'] ) ? $attributes['categories'] : array();
	$tags          = isset( $attributes['tags'] ) ? $attributes['tags'] : array();

	$other = array();
	if ( $autoplay ) {
		$other[] = 'wp-block-newspack-blocks-carousel__autoplay-playing';
	}
	$classes = Newspack_Blocks::block_classes( 'carousel', $attributes, $other );

	$args          = array(
		'posts_per_page'      => $posts_to_show,
		'post_status'         => 'publish',
		'suppress_filters'    => false,
		'ignore_sticky_posts' => true,
		'meta_key'            => '_thumbnail_id', // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_key
		'meta_value_num'      => 0,
		'meta_compare'        => '>',
	);

	if ( $authors ) {
		$args['author__in'] = $authors;
	}
	if ( $categories ) {
		$args['category__in'] = $categories;
	}
	if ( $tags ) {
		$args['tag__in'] = $tags;
	}

	$article_query = new WP_Query( $args );
	$counter       = 0;
	ob_start();
	if ( $article_query->have_posts() ) :
		while ( $article_query->have_posts() ) :
			$article_query->the_post();
			if ( ! has_post_thumbnail() ) {
				continue;
			}
			$counter++;
			?>

			<article class="post-has-image">
				<figure class="post-thumbnail">
					<a href="<?php echo esc_url( get_permalink() ); ?>" rel="bookmark">
						<?php
							the_post_thumbnail(
								'large',
								array(
									'object-fit' => 'cover',
									'layout'     => 'fill',
								)
							);
						?>
					</a>
				</figure>
				<div class="entry-wrapper">

					<?php
					$category = false;

					// Use Yoast primary category if set.
					if ( class_exists( 'WPSEO_Primary_Term' ) ) {
						$primary_term = new WPSEO_Primary_Term( 'category', get_the_ID() );
						$category_id  = $primary_term->get_primary_term();
						if ( $category_id ) {
							$category = get_term( $category_id );
						}
					}

					if ( ! $category ) {
						$categories_list = get_the_category();
						if ( ! empty( $categories_list ) ) {
							$category = $categories_list[0];
						}
					}

					if ( $attributes['showCategory'] && $category ) :
						?>
						<div class="cat-links">
							<a href="<?php echo esc_url( get_category_link( $category->term_id ) ); ?>">
								<?php echo esc_html( $category->name ); ?>
							</a>
						</div>
						<?php
					endif;
					?>

					<?php
						the_title( '<h3 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h3>' );
					?>

					<div class="entry-meta">
						<?php if ( $attributes['showAuthor'] ) : ?>
							<?php
							if ( $attributes['showAvatar'] ) {
								echo get_avatar( get_the_author_meta( 'ID' ) );
							}
							?>
							<span class="byline">
								<?php
								printf(
									/* translators: %s: post author. */
									esc_html_x( 'by %s', 'post author', 'newspack-blocks' ),
									'<span class="author vcard"><a class="url fn n" href="' . esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ) . '">' . esc_html( get_the_author() ) . '</a></span>'
								);
								?>
							</span><!-- .author-name -->
							<?php
							endif;

							if ( $attributes['showDate'] ) {
								$time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';
								if ( get_the_time( 'U' ) !== get_the_modified_time( 'U' ) ) {
									$time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time><time class="updated" datetime="%3$s">%4$s</time>';
								}
								$time_string = sprintf(
									$time_string,
									esc_attr( get_the_date( DATE_W3C ) ),
									esc_html( get_the_date() ),
									esc_attr( get_the_modified_date( DATE_W3C ) ),
									esc_html( get_the_modified_date() )
								);
								echo $time_string; // WPCS: XSS OK.
							}
							?>
					</div><!-- .entry-meta -->
				</div><!-- .entry-wrapper -->
			</article>
			<?php
		endwhile;
		endif;
		wp_reset_postdata();
	$slides  = ob_get_clean();
	$buttons = array();
	for ( $x = 0; $x < $counter; $x++ ) {
		$aria_label = sprintf(
			/* translators: %d: Slide number. */
			__( 'Go to slide %d', 'newspack-blocks' ),
			absint( $x + 1 )
		);
		$buttons[] = sprintf(
			'<button option="%d" class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="%s" %s></button>',
			absint( $x ),
			esc_attr( $aria_label ),
			0 === $x ? 'selected' : ''
		);
	}
	$selector = sprintf(
		'<amp-selector id="wp-block-newspack-carousel__amp-pagination__%1$d" class="swiper-pagination-bullets amp-pagination" on="select:wp-block-newspack-carousel__amp-carousel__%1$d.goToSlide(index=event.targetOption)" layout="container">%2$s</amp-selector>',
		absint( $newspack_blocks_carousel_id ),
		implode( '', $buttons )
	);
	$carousel = sprintf(
		'<amp-carousel width="4" height="3" layout="responsive" type="slides" data-next-button-aria-label="%1$s" data-prev-button-aria-label="%2$s" controls loop %3$s id="wp-block-newspack-carousel__amp-carousel__%4$s" on="slideChange:wp-block-newspack-carousel__amp-pagination__%4$s.toggle(index=event.index, value=true)">%5$s</amp-carousel>',
		esc_attr__( 'Next Slide', 'newspack-blocks' ),
		esc_attr__( 'Previous Slide', 'newspack-blocks' ),
		$autoplay ? 'autoplay delay=' . esc_attr( $delay * 1000 ) : '',
		absint( $newspack_blocks_carousel_id ),
		$slides
	);
	Newspack_Blocks::enqueue_view_assets( 'carousel' );
	return sprintf(
		'<div class="%1$s" id="wp-block-newspack-carousel__%2$d">%3$s%4$s%5$s</div>',
		esc_attr( $classes ),
		absint( $newspack_blocks_carousel_id ),
		$carousel,
		$autoplay ? newspack_blocks_carousel_block_autoplay_ui( $newspack_blocks_carousel_id ) : '',
		$selector
	);
}

/**
 * Generate autoplay play/pause UI.
 *
 * @param int $block_ordinal The ordinal number of the block, used in unique ID.
 *
 * @return string Autoplay UI markup.
 */
function newspack_blocks_carousel_block_autoplay_ui( $block_ordinal = 0 ) {
	$block_id        = sprintf(
		'wp-block-newspack-carousel__%d',
		absint( $block_ordinal )
	);
	$amp_carousel_id = sprintf(
		'wp-block-newspack-carousel__amp-carousel__%d',
		absint( $block_ordinal )
	);
	$autoplay_pause  = sprintf(
		'<a aria-label="%s" class="amp-carousel-button-pause amp-carousel-button" role="button" on="tap:%s.toggleAutoplay(toggleOn=false),%s.toggleClass(class=wp-block-newspack-blocks-carousel__autoplay-playing,force=false)"></a>',
		esc_attr__( 'Pause Slideshow', 'newspack-blocks' ),
		esc_attr( $amp_carousel_id ),
		esc_attr( $block_id )
	);
	$autoplay_play   = sprintf(
		'<a aria-label="%s" class="amp-carousel-button-play amp-carousel-button" role="button" on="tap:%s.toggleAutoplay(toggleOn=true),%s.toggleClass(class=wp-block-newspack-blocks-carousel__autoplay-playing,force=true)"></a>',
		esc_attr__( 'Play Slideshow', 'newspack-blocks' ),
		esc_attr( $amp_carousel_id ),
		esc_attr( $block_id )
	);
	return $autoplay_pause . $autoplay_play;
}

/**
 * Registers the `newspack-blocks/carousel` block on server.
 */
function newspack_blocks_register_carousel() {
	register_block_type(
		'newspack-blocks/carousel',
		array(
			'attributes'      => array(
				'className'    => array(
					'type' => 'string',
				),
				'postsToShow'  => array(
					'type'    => 'integer',
					'default' => 3,
				),
				'authors'      => array(
					'type'    => 'array',
					'default' => array(),
					'items'   => array(
						'type' => 'integer',
					),
				),
				'categories'   => array(
					'type'    => 'array',
					'default' => array(),
					'items'   => array(
						'type' => 'integer',
					),
				),
				'tags'         => array(
					'type'    => 'array',
					'default' => array(),
					'items'   => array(
						'type' => 'integer',
					),
				),
				'autoplay'     => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'delay'        => array(
					'type'    => 'integer',
					'default' => 5,
				),
				'showAuthor'   => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'showAvatar'   => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'showCategory' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'showDate'     => array(
					'type'    => 'boolean',
					'default' => true,
				),
			),
			'render_callback' => 'newspack_blocks_render_block_carousel',
		)
	);
}
add_action( 'init', 'newspack_blocks_register_carousel' );
