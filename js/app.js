(function(){
	app = function app() {
		
		app.render = function render() {
			// Generation template for block myway
			this.myway = function() {
				var myway  = {data : [
					{
						date : "2002-13",
						title : "School life",
						desc : "childhood, first steps in working with web-sites"
					},
					{
						date : "2013-17",
						title : "Study in university",
						desc : "growing up in all aspects of the life"
					},
					{
						date : "2014-15",
						title : "Start in front-end",
						desc : "first steps in front-end"
					},
					{
						date : "2015-15",
						title : "Full-stack developer",
						desc : "my first full-time job"
					},
					{
						date : "2016",
						title : "It's future",
						desc : "new year"
					}
				]}
				
				var template = Handlebars.compile( $('#template-lifeway').html() );
					$('.data-way-list').append( template(myway) );
			}
			
			// Generation template for block bxslider
			this.slider = function() {
				var data = { bxslider : [
					{
						image : 'img/preview/1.png',
						title : 'Matrix multiplication',
						descproject : 'MatrixMultiply - it is a web service for multiplication matrix',
						descdetails : 'The small, crossbrowser, adaptive web-app was written with using js, css3 и html5 technologies',
						link :'/demo/matrix/',
						github: 'https://github.com/devsnice/MatrixMultiply',
						tags : ["tag1", "tag2"]
					},
					{
						image : 'img/preview/4.jpg',
						title : 'Dental clinic',
						descproject : 'a small dental clinic in Novosibirsk',
						descdetails : 'Made layout and a template for cms Wordpress',
						link :'http://тари-нск.рф/',
						github: '',
						tags : ["tag1", "tag2"]
					},
					
					{
						image : 'img/preview/2.jpg',
						title : 'Travel tour',
						descproject : 'Site of tour-operator',
						descdetails : 'My duties in this project consisted, firstly, layout and creation a template for cms wordpress, secondly, search out and install travel-modulies on the web-site ',
						link :'http://великолепноепутешествие.рф/',
						github: '',
						tags : ["tag1", "tag2"]
					}
				]}
				
				var template = Handlebars.compile( $('#template').html() );
				$('.bxslider').append( template(data) );
			}
			
			this.slider();
			this.myway();
		}
		
		this.init = function init() {		
			// Pagepiling
			$('#main').pagepiling({
				direction: 'vertical',
				verticalCentered: true,
				sectionsColor: [],
				scrollingSpeed: 500,
				easing: 'swing',
				loopBottom: false,
				loopTop: true,
				css3: true,
				normalScrollElements: null,
				normalScrollElementTouchThreshold: 5,
				touchSensitivity: 5,
				keyboardScrolling: true,
				sectionSelector: '.section',
				animateAnchor: true,
		
				//events
				onLeave: function(index, nextIndex, direction){},
				afterLoad: function(anchorLink, index){},
				afterRender: function(){},
				anchors: ['header', 'skills', 'work', 'contact'],
				menu: '#myMenu'
			});
			
			app.render();
			
			// Bxslider
			$('.bxslider').bxSlider({
				 auto: true,
				 default: 550
			});	
			
			// Navigation
			$("#js-nav-trigger").click(function(){
				if($(this).data("set") == "false") {
					$("#myMenu").addClass("navigation_open-mobile");
					$("#myMenu").find(".navigation-list").fadeIn();
					$(this).data("set", "true");
				}
				else {
					$("#myMenu").removeClass("navigation_open-mobile");
					$("#myMenu").find(".navigation-list").fadeOut();
					$(this).data("set", "false");
				}
			});
		}
		
		return this.init();
	}
	
	var application = new app();
}());