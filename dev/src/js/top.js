import $,{jQeury} from 'jquery';
import { getScrollVal, $w } from './common.js';
import './slick/slick.js';
// import 'slick/slick.scss';

	$( function(){
		
		let $navPanels = $( '.section-navPanel' ).find( '.navPanel__panel' ),
			$mainvisualArea = $('.mainvisual');
		
		let f = function( $scrollVal ){
			const $scrollBottom = $scrollVal + $w.height();
		};

		$( '.solutions' ).slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
  			speed: 400,
			centerMode: true,
			controller: true,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
					}
				}				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			]
		});
		
		getScrollVal( f ) ;		
	});

	const loadEnd = () => {
		setTimeout(() => {
			$('.loadingAnim').fadeOut('fast', function(){
				$('.loadingAnim').remove();
			});
		}, 500);
	}