/* -------------------------------------
		CUSTOM FUNCTION WRITE HERE
-------------------------------------- */
$(document).ready(function() {
	"use strict";
	/* -------------------------------------
			COLLAPSE MENU SMALL DEVICES
	-------------------------------------- */
	function collapseMenu(){
		$('.menu-item-has-children').prepend('<span class="tg-dropdowarrow"><i class="lnr lnr-chevron-right"></i></span>');
		$('.menu-item-has-children span').on('click', function() {
			$(this).next().next().slideToggle(300);
			$(this).parent('.menu-item-has-children').toggleClass('tg-open');
		});
	}
	collapseMenu();
	/* -------------------------------------
			HOME BANNER SLIDER				
	-------------------------------------- */
	var mySlider = jQuery('#tg-homeslidervone').pogoSlider({
		pauseOnHover: false,
		autoplay: true,
		generateNav: false,
		displayProgess: true,
		autoplayTimeout: 6000,
		targetHeight: 445,
		responsive: true,
	}).data('plugin_pogoSlider');
	/* -------------------------------------
			HOME BANNER SLIDER				
	-------------------------------------- */
	var mySlider = jQuery('#tg-homeslidervtwo').pogoSlider({
		pauseOnHover: false,
		autoplay: true,
		generateNav: false,
		displayProgess: false,
		autoplayTimeout: 6000,
	}).data('plugin_pogoSlider');
	/* -------------------------------------
			HOME SLIDER VERSION THREE
	-------------------------------------- */
	jQuery("#tg-servicesslider").owlCarousel({
		slideSpeed : 300,
		singleItem: true,
		pagination: false,
		navigation : false,
		navigationText: [
			"<span class='tg-btnroundprev'><i class='fa fa-angle-left'></i></span>",
			"<span class='tg-btnroundnext'><i class='fa fa-angle-right'></i></span>"
		],
	});
	/* -------------------------------------
			PRODUCT SLIDER
	-------------------------------------- */
	jQuery("#tg-productdetailslider").owlCarousel({
		slideSpeed : 300,
		singleItem: true,
		pagination: false,
		navigation : false,
		navigationText: [
			"<span class='tg-btnroundprev'><i class='fa fa-angle-left'></i></span>",
			"<span class='tg-btnroundnext'><i class='fa fa-angle-right'></i></span>"
		],
	});
	/* -------------------------------------
			PRODUCT SLIDER
	-------------------------------------- */
	jQuery("#tg-relatedproductsslider").owlCarousel({
		slideSpeed : 300,
		items: 3,
		pagination: false,
		navigation : false,
		navigationText: [
			"<span class='tg-btnroundprev'><i class='fa fa-angle-left'></i></span>",
			"<span class='tg-btnroundnext'><i class='fa fa-angle-right'></i></span>"
		],
		itemsCustom : [
						[992, 2],
						[768, 2],
						[481, 2],
						[0, 1],
		],
	});
	/* --------------------------------------
			COUNTER
	-------------------------------------- */
	try {
		jQuery('.tg-counter').appear(function () {
			jQuery('.tg-counter > h2 > span').countTo();
		});
	} catch (err) {}
	/* --------------------------------------
			PLACEHOLDER COLOR
	-------------------------------------- */
	jQuery('[placeholder]').focus(function() {
		var input = jQuery(this);
		if (input.val() == input.attr('placeholder')) {
			input.val('');
			input.removeClass('tg-placeholder');
		}
	}).blur(function() {
		var input = jQuery(this);
		if (input.val() == '' || input.val() == input.attr('placeholder')) {
			input.addClass('tg-placeholder');
			input.val(input.attr('placeholder'));
		}
	}).blur();
	jQuery('[placeholder]').parents('.tg-footer > .tg-formrequestacall').submit(function() {
		jQuery(this).find('[placeholder]').each(function() {
			var input = jQuery(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
			}
		})
	});
	
	/* ---------------------------------------
			FULL PAGE SEARCH
	--------------------------------------- */
	jQuery('a[href="#tg-search"]').on('click', function(event) {
		event.preventDefault();
		jQuery('#tg-search').addClass('open');
		jQuery('#tg-search > form > fieldset > input[type="search"]').focus();
	});
	jQuery('#tg-search, #tg-search button.close').on('click keyup', function(event) {
		if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
			jQuery(this).removeClass('open');
		}
	});
	jQuery('form').submit(function(event) {
		event.preventDefault();
		return false;
	});
	jQuery('.tg-search button.close').on('click', function(){
		jQuery(this).parents('.tg-search').removeClass('open');
	});
	/* --------------------------------------
			REQUEST A CALL FORM
	-------------------------------------- */
	jQuery('#tg-btnrequestacall, .tg-btncloserequestcall').on('click', function(){
		jQuery('.tg-requescallarea').slideToggle();
		jQuery('.tg-btncloserequestcall').slideToggle();
	});
	/* -------------------------------------
			TESTIMONIALS sLIDER
	-------------------------------------- */
	jQuery("#tg-testimonialsslider").owlCarousel({
		slideSpeed : 300,
		singleItem: true,
		pagination: false,
		navigation : true,
		navigationText: [
			"<span class='tg-btnroundprev'><i class='fa fa-angle-left'></i></span>",
			"<span class='tg-btnroundnext'><i class='fa fa-angle-right'></i></span>"
		],
	});
	/* --------------------------------------
			SEARCH FORM
	-------------------------------------- */
	jQuery('.tg-btnsearch').on('click', function(){
		jQuery('.tg-searchbox').slideToggle();
	});
	/* -------------------------------------
			PROGRESS BAR
	-------------------------------------- */
	try {
		jQuery('#tg-skills').appear(function () {
			jQuery('.tg-skillholder').each(function () {
				jQuery(this).find('.tg-skillbar').animate({
					width: jQuery(this).attr('data-percent')
				}, 2500);
			});
		});
	} catch (err) {}
	/* -------------------------------------
			DONUT CHART
	-------------------------------------- */
	if(jQuery('#tg-chartContainer').length > 0 ){
		google.charts.load("current", {packages:["corechart"]});
		google.charts.setOnLoadCallback(drawChart);
		function drawChart() {
			var data = google.visualization.arrayToDataTable([
				['Task',					'Hours per Day'],
				['dolor sit amet',			12],
				['adipisicing elit',		13],
				['incididunt liptae',		25],
				['magna aliua fitoa',		7],
				['aliu liarota',			7],
				['aute irure pikori',		36],
			]);
			var options = {
				pieHole: 0.87,
				width: 335,
				height: 350,
				legend: {position: 'bottom', alignment: 'center', maxLines: 3},
				chartArea: { width: "90%", height: "90%" },
				pieSliceTextStyle:{color: '#515151'},
				colors: ['#f7464a', '#46bfbd', '#fdb45c', '#949fb1', '#4689f7', '#4d5360'],
			};
			var chart = new google.visualization.PieChart(document.getElementById('tg-chartContainer'));
			chart.draw(data, options);
		}
	}
	/* -------------------------------------
			THEME ACCORDION
	-------------------------------------- */
	jQuery(function() {
		jQuery('.tg-panelcontent').hide();
		jQuery('.tg-accordion h4:first').addClass('active').next().slideDown('slow');
		jQuery('.tg-accordion h4').on('click',function() {
			if(jQuery(this).next().is(':hidden')) {
				jQuery('.tg-accordion h4').removeClass('active').next().slideUp('slow');
				jQuery(this).toggleClass('active').next().slideDown('slow');
			}
		});
	});
	/* ---------------------------------------
			PORTFOLIO FILTERABLE
	-------------------------------------- */
	var $container = jQuery('.tg-locations');
	var $optionSets = jQuery('.option-set');
	var $optionLinks = $optionSets.find('a');
	function doIsotopeFilter() {
		if (jQuery().isotope) {
			var isotopeFilter = '';
			$optionLinks.each(function () {
				var selector = jQuery(this).attr('data-filter');
				var link = window.location.href;
				var firstIndex = link.indexOf('filter=');
				if (firstIndex > 0) {
					var id = link.substring(firstIndex + 7, link.length);
					if ('.' + id == selector) {
						isotopeFilter = '.' + id;
					}
				}
			});
			$container.isotope({
				filter: isotopeFilter
			});
			$optionLinks.each(function () {
				var $this = jQuery(this);
				var selector = $this.attr('data-filter');
				if (selector == isotopeFilter) {
					if (!$this.hasClass('tg-active')) {
						var $optionSet = $this.parents('.option-set');
						$optionSet.find('.tg-active').removeClass('tg-active');
						$this.addClass('tg-active');
					}
				}
			});
			$optionLinks.on('click', function () {
				var $this = jQuery(this);
				var selector = $this.attr('data-filter');
				$container.isotope({itemSelector: '.tg-item', filter: selector});
				if (!$this.hasClass('tg-active')) {
					var $optionSet = $this.parents('.option-set');
					$optionSet.find('.tg-active').removeClass('tg-active');
					$this.addClass('tg-active');
				}
				return false;
			});
		}
	}
	var isotopeTimer = window.setTimeout(function () {
		window.clearTimeout(isotopeTimer);
		doIsotopeFilter();
	}, 1000);
	/* -------------------------------------
			Google Map
	-------------------------------------- */
	jQuery(".tg-activelocationmap").gmap3({
		marker: {
			address: "1600 Elizabeth St, Melbourne, Victoria, Australia",
			options: {
				title: "Blink Consulting BootStrap HTML5 CSS3 Theme",
				icon: "images/mapmarker.png",
			}
		},
		map: {
			options: {
				zoom: 16,
				scrollwheel: false,
				disableDoubleClickZoom: true,
			}
		}
	});
	/* -------------------------------------
			EVENT COUNTER
	-------------------------------------- */
	jQuery('#tg-eventcounter').countdown('2018/02/02', function(event) {
		var $this = jQuery(this).html(event.strftime(''
			+ '<span>%-D</span><span>Days</span><em>:</em>'
			+ '<span>%H</span><span>Hrs</span><em>:</em>'
			+ '<span>%M</span><span>Min</span><em>:</em>'
			+ '<span>%S</span><span>Sec</span>'
		));
	});
	/* -------------------------------------
			NEXT EVENT COUNTER
	-------------------------------------- */
	jQuery('#tg-nexteventcounter').countdown('2018/10/10', function(event) {
		var $this = jQuery(this).html(event.strftime(''
			+ '<span>%-D</span><span>Days</span><em>:</em>'
			+ '<span>%H</span><span>Hrs</span><em>:</em>'
			+ '<span>%M</span><span>Min</span><em>:</em>'
			+ '<span>%S</span><span>Sec</span>'
		));
	});
	/* -------------------------------------
			THEME TOGGLES
	-------------------------------------- */
	jQuery("#tg-themetoggles").on('click', '.tg-panneltitle', function (e) {
		jQuery(this).next('.tg-pannelcontent').slideToggle(200);
		jQuery(this).parents('.tg-pannel').toggleClass('tg-active');
	});
	/* -------------------------------------
			FEE RANGE SLIDER
	-------------------------------------- */
	function feeRangeslider(){
		jQuery("#tg-productrangeslider").slider({
			range: true,
			min: 0,
			max: 500,
			values: [ 75, 300 ],
			slide: function( event, ui ) {
				jQuery( "#tg-productrangeamount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			}
		});
		jQuery( "#tg-productrangeamount" ).val( "$" + jQuery( "#tg-productrangeslider" ).slider( "values", 0 ) + " - $" + jQuery( "#tg-productrangeslider" ).slider( "values", 1 ) );
	}
	feeRangeslider();
	/*------------------------------------------
			PRODUCT INCREASE
	------------------------------------------*/
	$('em.minus').on('click', function () {
		$('#quantity1').val(parseInt($('#quantity1').val(), 10) - 1);
	});
	$('em.plus').on('click', function () {
		$('#quantity1').val(parseInt($('#quantity1').val(), 10) + 1);
	});
	/* -------------------------------------
			TOOLTIP
	-------------------------------------- */
	jQuery('[data-toggle="tooltip"]').tooltip()
	/* -------------------------------------
			FLIP BOX
	-------------------------------------- */
	jQuery('.tg-flippanel').hover(function(){
		jQuery(this).addClass('tg-flip');
	},function(){
		jQuery(this).removeClass('tg-flip');
	});
});