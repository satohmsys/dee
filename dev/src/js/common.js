import $ from 'jquery';
import {TweenMax} from 'gsap';
import {TimelineMax} from 'gsap/TimelineMax';

let $w = $( window ),
	$body = $( 'body' ),
	$flag = true;

/**
* スクロール値を取得する
*/
var getScrollVal = ( callback ) => {
		$w.on( 'scroll load', function() {
			let $scrollVal = $w.scrollTop();
			// return $scrollVal;
			callback( $scrollVal );
		} );
}

// var backToTop = () => {
// 		$('.siteFooter__backToTop').on( 'click', function( e ){
// 			e.preventDefault();
// 			e.stopPropagation();

// 			$( 'body,html' ).animate({
// 				scrollTop: 0
// 			}, '800', 'swing' );
// 		});
// }

// var navToggle = () => {	
// 		/**
// 		* sp button
// 		*/
// 		var $toggle = $( '.navToggle' );

// 		$toggle.on( 'click', function(){
// 			$body.toggleClass( 'navOpen' );
// 		} );
// 		$w.on( 'resize', function(){
// 			if( $flag ){
// 				$flag = false;
// 				setTimeout(function(){
// 					if( 700 < $w.width() ){
// 						$body.removeClass( 'navOpen' );
// 					}
// 					$flag = true;
// 					return $flag;
// 				}, 500 );
// 			}
// 		});
// }

var commonScrollToggle = () => {
	let f = ( $scrollVal ) =>{
		let $jsEffect = $('.js-effect'),
			$scrollBottom = $scrollVal + $w.height();

		/**
		* all fadein targets
		*/
		if( $jsEffect ){
			$.each( $jsEffect, function(){
				let $target = $( this );

				if( $target.offset().top < $scrollBottom - 90 ) {
					$target.addClass( '-on' );
				}

			});				
		}					
	}
	getScrollVal( f );
}

var headExpand = () => {
		let $mvHeight = $('.mainvisual').height();
		let f = ( $scrollVal ) => {
			$mvHeight*2 < $scrollVal ? $body.addClass('-isScrolledMore') : $body.removeClass('-isScrolledMore') 
			350 < $scrollVal ? $body.addClass('-isScrolled') : $body.removeClass('-isScrolled') 
		}

		getScrollVal( f );
}

var isLoaded = () => {

	let $loadingAnim = $( '.loadingAnim' ),
		t = TweenMax;

		t.fromTo('#shape-d', 1, 
			{
				x: 30,
				rotation: '-180deg',
				transformOrigin: 'center center'
			},
			{
				x: 0,
				rotation: 0,
				delay: 2,
			}
		)
		t.fromTo('#shape-e', 1,
			{
				x: -10,
				transformOrigin: 'left center',
			},
			{
				x: 0,
				rotation: 0,
				delay: 2,
			}
		)
		t.fromTo('#shape-ee', 1, {
			x: -30,
			transformOrigin: 'left center',
		}, {
			x: 0,
			rotation: 0,
			delay: 2,
			onComplete: () => {
				let bg = document.getElementsByClassName('loading__bg')[0],
					body = document.body;

				setTimeout(() => {
					document.body.classList.add('-isTweenEnd');
					bg.addEventListener('transitionend', function (e) {
						e.stopPropagation();
						document.body.classList.add('-isAfterAnimEnd');

						t.to( '.loading', 0.5, {
							opacity: 0,
							delay: 1,
							onComplete: ( e ) => {
								document.body.removeChild( document.getElementsByClassName('loading')[0]);

								setTimeout( ()=>{
									document.getElementsByClassName('mv')[0].classList.add( 'js-effect','-on')
								}, 50 )
							}
						})
					})
				}, 500 )
			}
		})

	
	// if( $loadingAnim ){
	// 	$loadingAnim.find('.loadingAnim__text').on( 'transitionend', function(){
	// 		$loadingAnim.remove();
	// 		$body.addClass( 'isRenderered')
	// 	})
	// 	$w.on( 'load', function(){
	// 		$body.addClass( 'isLoaded' );
	// 		// $( '.loadingAnim' ).fadeOut('fast', function(){
	// 		// 	$(this).remove();
	// 		// })
	// 	});	
	// }
}

var smoothScroll = () => {
	$('a[href^="#"]').click(function( e ){
		e.stopPropagation();
		e.preventDefault();

	    var speed = 500,
	    	href= $(this).attr("href"),
	    	target = $(href == "#" || href == "" ? 'html' : href),
	    	position = target.offset().top - $('.siteHeader__logo').height() * 1.5;
	    
	    $("html, body").animate({scrollTop:position}, speed, "swing");
	    return false;
	});
}

export {$};
export {$w};
export {getScrollVal};


commonScrollToggle();
headExpand();
isLoaded();
smoothScroll();