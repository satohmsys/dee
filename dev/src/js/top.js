import $,{jQeury} from 'jquery';
import { getScrollVal, $w } from './common.js';
import './slick/slick.js';
import './jquery.autoKana.js';
// import 'slick/slick.scss';


var effefcts = () => {
	$( function(){
		
		let $navPanels = $( '.section-navPanel' ).find( '.navPanel__panel' ),
			$mainvisualArea = $('.mainvisual');
		
		let f = function( $scrollVal ){
			const $scrollBottom = $scrollVal + $w.height();
		};

		$( '.works' ).slick({
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

		$.fn.autoKana('#name_1', '#read_1', {
			katakana: false
		});
		$.fn.autoKana('#name_2', '#read_2', {
			katakana: false
		});

		getScrollVal( f ) ;		
	});
}

// export default function(){
// 	effefcts();
// }

effefcts();