/******************************************************************************\
|                                                                              |
|                                  welcome-view.js                             |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This defines the initial welcome view of the application.             |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com        |
\******************************************************************************/

import ImageFile from '../../models/storage/media/image-file.js';
import Directory from '../../models/storage/directories/directory.js';
import BaseView from '../../views/base-view.js';
import SplashView from '../../views/welcome/splash-view.js';
import SplashTwoColumnView from '../../views/welcome/splash-two-column-view.js';
import CrawlerView from '../../views/welcome/crawler-view.js';
import ScrollerView from '../../views/welcome/scroller-view.js';
import DomUtils from '../../utilities/web/dom-utils.js';
import Browser from '../../utilities/web/browser.js';

export default BaseView.extend({

	//
	// attributes
	//

	template: template(`
		<div class="masthead">
			<% if (branding.welcome.ribbons) { %>

			<% for (let i = 0; i < branding.welcome.ribbons.length; i++) { %>
			<% let ribbon = branding.welcome.ribbons[i]; %>
			<% if (ribbon.url) { %><a href="<%= ribbon.url %>"><% } %>
			<div class="ribbon">
				<%= ribbon.text %>
			</div>
			<% if (ribbon.url) { %></a><% } %><% } %><% } %>

			<div class="full-size overlay"></div>

			<div class="carousel">
				<div class="carousel-cell">
					<div class="background"></div>
					<div class="full-size overlay"></div>
					<div class="contents">
						<div class="splash"></div>
					</div>
				</div>

				<div class="carousel-cells"></div>
			</div>

			<div class="desktop-only options buttons">
				<% if (show_animation) { %>
				<button id="animate" class="btn btn-sm" data-toggle="tooltip" title="<%= animate_tooltip %>">
					<%= animate_icon %>
				</button>
				<% } %>
				<button id="theme" class="btn btn-sm" data-toggle="tooltip" title="<%= theme.toTitleCase() %> Theme">
					<%= theme_icon %>
				</button>
			</div>
		</div>

		<div class="details"></div>
	`),

	regions: {
		background: '.background',
		masthead: {
			el: '.masthead > .overlay',
			replaceElement: true
		},
		carousel: {
			el: '.carousel .overlay',
			replaceElement: true
		},
		splash: {
			el: '.splash',
			replaceElement: true
		},
		cells: {
			el: '.carousel-cells',
			replaceElement: true
		},
		details: {
			el: '.details',
			replaceElement: true
		}
	},

	events: {
		'click #animate': 'onClickAnimate',
		'click #theme': 'onClickTheme'
	},

	//
	// constructor
	//

	initialize: function() {

		// load required fonts
		//
		if (config.branding.links) {
			for (let i = 0; i < config.branding.links.length; i++) {
				if (config.branding.links[i].font) {
					application.loadFont(config.branding.links[i].font);
				}
			}
		}
	},

	//
	// querying methods
	//

	isAnimating: function() {
		return localStorage.getItem('animate') != null? localStorage.getItem('animate') != 'false': config.branding.header.buttons.animating;
	},

	//
	// getting methods
	//

	getImageUrls: function(paths) {
		let urls = [];
		for (let i = 0; i < paths.length; i++) {
			urls.push(new ImageFile({
				path: paths[i]
			}).getUrl());
		}
		return urls;
	},

	getAnimateIcon: function(animate) {
		if (!animate) {
			return '<i class="fa fa-play"></i>';
		} else {
			return '<i class="fa fa-stop"></i>';
		}
	},

	getNextTheme: function(theme) {
		switch (theme || 'auto') {
			case 'light':
				return 'dark';
			case 'dark':
				return 'auto';
			default:
				return 'light';
		}
	},

	getThemeIcon: function(theme) {
		switch (theme) {
			case 'light':
				return '<i class="fa fa-sun"></i>';
			case 'dark':
				return '<i class="fa fa-moon"></i>';
			default:
				return '<i class="fa fa-circle-half-stroke"></i>';
		}
	},

	//
	// setting methods
	//

	setRibbonStyles(element, attributes) {

		// set ribbon styles
		//
		DomUtils.setTextStyles(element, attributes);
		DomUtils.setBlockStyles(element, attributes);
		DomUtils.setBorderStyles(element, attributes);
		DomUtils.setBackgroundStyles(element, attributes);

		if (attributes.corner) {
			$(element).addClass(attributes.corner);
		}

		if (attributes.offset != undefined) {
			switch (attributes.corner) {
				case 'top left':
					$(element).css('transform', 'translateX(-100%) rotate(-45deg) translate(50%, ' + attributes.offset + 'px)');
					break;
				case 'top right':
					$(element).css('transform', 'rotate(45deg) translate(50%, ' + attributes.offset + 'px)');
					break;
				case 'bottom left':
					$(element).css('transform', 'translate(-100%, 0px) rotate(45deg) translate(50%, ' + (-attributes.offset) + 'px)');
					break;
				case 'bottom right':
					$(element).css('transform', 'rotate(-45deg) translate(50%, ' + (-attributes.offset) + 'px)');
			}
		}
	},

	setRibbonsStyles: function(elements, attributes) {
		for (let i = 0; i < elements.length; i++) {
			this.setRibbonStyles(elements[i], attributes[i]);
		}
	},

	setWelcomeStyles: function(element, attributes) {

		// set ribbon styles
		//
		if (attributes.ribbons) {
			this.setRibbonsStyles($(element).find('.ribbon'), attributes.ribbons);
		}

		// set background styles
		//
		if (config.branding.welcome) {
			DomUtils.setBackgroundStyles($(element).find('.masthead'), attributes);
		}
		if (config.branding.welcome.masthead) {
			DomUtils.setBackgroundStyles($(element).find('.carousel-cell')[0], attributes.masthead);
		}
		if (config.branding.welcome.overlay) {
			DomUtils.setBackgroundStyles($(element).find('.masthead > .overlay'), attributes.overlay);
		}
	},

	setAnimate: function(animate) {
		if (animate) {
			this.playAnimation();
		} else {
			this.pauseAnimation();
		}

		localStorage.setItem('animate', animate);
	},

	//
	// animating methods
	//

	playAnimation: function() {
		$('body').removeClass('paused');
	},

	pauseAnimation: function() {
		$('body').addClass('paused');
	},

	//
	// rendering methods
	//

	templateContext: function() {
		let hasCarousel = config.branding.welcome.carousel != undefined;
		let hasCarouselScroller = hasCarousel && config.branding.welcome.carousel.scroller != undefined;
		let hasOverlay = config.branding.welcome.overlay != undefined;
		let hasOverlayScroller = hasOverlay && config.branding.welcome.overlay.scroller != undefined;
		let isAnimated = (hasCarouselScroller && config.branding.welcome.carousel.scroller.speed != 0) ||
			(hasOverlayScroller && config.branding.welcome.overlay.scroller.speed != 0);
		let theme = application.getTheme();

		return {
			defaults: config.settings.defaults,
			branding: config.branding,

			// animation button
			//
			show_animation: isAnimated && !Browser.isMobile(),
			animate_icon: this.getAnimateIcon(this.isAnimating()),
			animate_tooltip: isAnimated? 'Play' : 'Stop',

			// theme button
			//
			show_theme: config.branding.header.buttons.show_theme,
			theme: theme,
			theme_icon: this.getThemeIcon(theme)
		};
	},

	onRender: function() {

		// show dialogs
		//
		if (this.options.signIn) {
			application.signIn();
		} else if (this.options.signUp) {
			application.signUp();
		}

		// show child views
		//
		if (config.branding.welcome) {

			// show splash
			//
			if (config.branding.welcome.splash) {
				if (config.branding.welcome.splash.columns == 2) {
					this.showChildView('splash', new SplashTwoColumnView());
				} else {
					this.showChildView('splash', new SplashView());
				}
			}

			// apply styling
			//
			this.setWelcomeStyles(this.$el, config.branding.welcome);

			// show details
			//
			if (config.branding.welcome.template) {
				this.showDetails('templates/' + config.branding.welcome.template, () => {
					this.onLoad();
				});
			} else {
				this.onLoad();
			}

			// show splash carousel
			//
			if (config.branding.welcome) {
				window.setTimeout(() => {
					this.showMastheadCarousel();
				}, 500);
			}
		}

		// add tooltip triggers
		//
		this.addTooltips();
	},

	onAttach: function() {
		if (config.branding.welcome) {
			this.showWelcome(config.branding.welcome);
		}

		// set initial animation state
		//
		if (this.isAnimating()) {
			this.playAnimation();
		} else {
			this.pauseAnimation();
		}
	},

	showWelcome: function(welcome) {
		if (!welcome.template) {
			this.$el.parent().addClass('full-size');
		}
		if (welcome.crawler) {
			this.showCrawler(welcome.crawler);
		}
		if (welcome.overlay && welcome.overlay.scroller && Browser.device != 'phone') {
			this.showOverlayScroller(welcome.overlay.scroller);
		}
		if (welcome.carousel && welcome.carousel.scroller && Browser.device != 'phone') {
			this.showCarouselScroller(welcome.carousel.scroller);
		}
		if (welcome.overlay) {
			this.showOverlay(this.$el.find('.masthead > .overlay'), welcome.overlay);
		}
	},

	showMastheadCarousel: function(done) {

		// show top masthead carousel
		//
		if (config.branding.welcome.carousel && Browser.device == 'desktop') {

			// temporarily remove scrollbars
			//
			this.$el.css('overflow', 'hidden');

			this.showCarouselCells(config.branding.welcome.carousel, () => {

				// restore scrollbars
				//
				this.$el.css('overflow', '');

				if (done) {
					done();
				}
			});
		} else {
			if (done) {
				done();
			}
		}
	},

	showCarouselCells: function(carousel, done) {
		fetch('templates/' + carousel.template).then((response) => response.text()).then((text) => {

			// apply template
			//
			text = template(text)(config.settings.defaults);

			// show carousel content
			//
			this.$el.find('.carousel-cells').replaceWith($(text));

			// apply carousel
			//
			this.$el.find('.masthead .carousel').flickity({
				wrapAround: true,
				pageDots: true,
				prevNextButtons: true,
				pauseAutoPlayOnHover: false
			});

			// set carousel cell styles
			//
			if (carousel.background || carousel.color) {
				let cells = this.$el.find('.masthead .carousel-cell');
				for (let i = 1; i < cells.length; i++) {
					let cell = $(cells[i]);

					// set carousel cell background
					//
					if (carousel.background) {
						cell.css('background', carousel.background);
					}

					// set carousel cell background color
					//
					if (carousel.background_color) {
						cell.css('background-color', carousel.background_color);
					}

					// set carousel text attributes
					//
					DomUtils.setTextBlockStyles(cell, carousel);
				}
			}

			done();
		});
	},

	showCrawler: function(options) {
		if (typeof options.images == 'string') {

			// load list of images
			//
			new Directory({
				path: options.images
			}).load({

				// callbacks
				//
				success: (model) => {
					this.showChildView('background', new CrawlerView(_.extend(options, {
						images: this.getImageUrls(model.getPaths((path) => {
							return path.endsWith('png') || path.endsWith('.jpg');
						}))
					})));
				}
			});
		} else {
			this.showChildView('background', new CrawlerView(options));
		}
	},

	showOverlayScroller: function(options) {
		this.showChildView('masthead', new ScrollerView(options));
	},

	showCarouselScroller: function(options) {
		this.showChildView('carousel', new ScrollerView(options));
	},

	showOverlay: function(element, overlay) {

		// add overlay colors
		//
		if (overlay.far_color && overlay.near_color) {
			$(element).css('background', 'linear-gradient(to bottom, ' + overlay.far_color + ' 0%, ' + overlay.near_color + ' 100%)');
		} else if (overlay.background) {
			$(element).css('background', overlay.background);
		} else if (overlay.background_color) {
			$(element).css('background-color', overlay.background_color);
		} else if (overlay.background_image) {
			$(element).css('background-image', 'url("' + overlay.background_image + '")');
		}

		// set overlay opacity
		//
		if (overlay.opacity) {
			$(element).css('opacity', overlay.opacity);
		}
	},

	showDetails: function(address, done) {
		fetch(address).then((response) => response.text()).then((text) => {

			// display details
			//
			this.showChildView('details', new BaseView({
				className: 'details content',
				template: template(text)
			}));

			// show details carousels
			//
			this.showSectionCarousel(this.$el.find('.details .carousel'));

			done();
		});
	},

	showSectionCarousel: function(element) {
		$(element).flickity({
			autoPlay: $(element).hasClass('animated')? 1000 : false,
			wrapAround: true,
			pageDots: false,
			prevNextButtons: false,
			pauseAutoPlayOnHover: false
		});
	},

	//
	// event handling methods
	//

	onLoad: function() {

		// add lightbox for details
		//
		this.parent.addLightBox();

		// call page onload
		//
		this.parent.onLoad();
	},

	//
	// mouse event handling methods
	//

	onClickAnimate: function() {
		let isAnimating = !this.isAnimating();
		let animateIcon = this.getAnimateIcon(isAnimating);
		let animateTooltip = isAnimating? 'Stop' : 'Play';

		// update icon
		//
		this.$el.find('#animate').empty().html(animateIcon);
		this.$el.find('#animate').attr('data-original-title', animateTooltip);

		// update currently displayed tooltip
		//
		$('.tooltip .tooltip-inner').text(animateTooltip);

		// update view
		//
		this.setAnimate(isAnimating);
	},

	onClickTheme: function() {
		let theme = this.getNextTheme(application.getTheme());
		let themeIcon = this.getThemeIcon(theme);
		let themeTooltip = theme.toTitleCase() + ' Theme';

		// update theme attributes
		//
		this.$el.find('#theme').empty().html(themeIcon);
		this.$el.find('#theme').attr('data-original-title', themeTooltip);

		// update currently displayed tooltip
		//
		$('.tooltip .tooltip-inner').text(themeTooltip);

		// save value for later
		//
		localStorage.setItem('theme', theme);

		// update view
		//
		application.setTheme(theme);
	},

	//
	// keyboard event handling methods
	//

	onKeyDown: function(event) {
		if (this.hasChildView('splash')) {
			this.getChildView('splash').onKeyDown(event);
		}
	},

	//
	// window event handling methods
	//

	onResize: function() {

		// unify heights of carousel cells
		//
		let carouselCells = this.$el.find('.carousel-cell');
		let height = $(carouselCells[0]).height();
		for (let i = 1; i < carouselCells.length; i++) {
			$(carouselCells[i]).css('height', height);
		}
	},

	//
	// cleanup methods
	//

	onBeforeDestroy: function() {
		$(window).off("resize", this.onResize);
	}
});