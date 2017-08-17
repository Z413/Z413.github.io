$(function(){
	
	// preloader animation
	var dot = $('.dot');
	var loader = $('#loader');
	var tl_loader = new TimelineMax({repeat: 1, onComplete: loadContent});	
	
	$('.container').css('display','none');
	
	tl_loader
		.staggerFromTo(dot, 0.3, {y: 0, autoAlpha: 0}, {y: 10, autoAlpha: 1}, 0.05)
	    .fromTo(loader, 0.3,  {autoAlpha: 1, scale: 1.3}, {autoAlpha: 0, scale: 1}, 0.9)	
	
	function loadContent(){		
		var tl_loader_out = new TimelineLite({onComplete: contentIn});
		tl_loader_out
		.set(dot, {backgroundColor: '#00d87a'})
		.to(loader, 0.3, {autoAlpha: 1, scale: 1.3})
		.staggerFromTo(dot, 0.3, {y: 0, autoAlpha: 0}, {y: 20, autoAlpha: 1}, 0.05, 0)
		.to(loader, 0.3, {y: -150, autoAlpha: 0}, '+=0.3');
	}
	// start animation
	function contentIn() {
		$('.preloader').css('display','none');
		$('.container').css('display','block');
		$('body').css('opacity','0');
		$('.heart').css({"opacity": "0"}); 
		
		TweenLite.set($('.container'), {opacity: 1});
		TweenLite.set($('body'), {opacity: 1});
		
		TweenLite.from($('body'), .6, {autoAlpha: 0, ease: Power1.easeOut});
		TweenLite.to($('.heart'), .3, {opacity: 1, ease: Power1.easeInOut, delay: .4});
		TweenLite.from($('.header__h1'), .3, {autoAlpha: 0, y: 10, ease: Power1.easeOut, delay: .4});
		TweenLite.from($('.heder__text'), .3, {autoAlpha: 0, y: 10, ease: Power1.easeOut, delay: .5});
		
		TweenLite.from($('.ubuntu'), .3, {autoAlpha: 0, y: 10, ease: Power1.easeOut, delay: .6});
		TweenLite.from($('.cent_os'), .3, {autoAlpha: 0, y: 10, ease: Power1.easeOut, delay: .7});
		TweenLite.from($('.debian'), .3, {autoAlpha: 0, y: 10, ease: Power1.easeOut, delay: .8});
		TweenLite.from($('.linux'), .3, {autoAlpha: 0, y: 10, ease: Power1.easeOut, delay: .9});
		TweenLite.from($('.windows'), .3, {autoAlpha: 0, y: 10, ease: Power1.easeOut, delay: 1});
		TweenLite.from($('.free_bsd'), .3, {autoAlpha: 0, y: 10, ease: Power1.easeOut, delay: 1.1});
		TweenLite.from($('.bitrix'), .3, {autoAlpha: 0, y: 10, ease: Power1.easeOut, delay: 1.2});
		TweenLite.from($('.vm'), .3, {autoAlpha: 0, y: 10, ease: Power1.easeOut, delay: 1.3});
		TweenLite.from($('.bumblebee_plans'), .3, {autoAlpha: 0, y: 20, ease: Power1.easeOut, delay: .6});
		TweenLite.from($('.prime_plans'), .3, {autoAlpha: 0, y: 20, ease: Power1.easeOut, delay: .7});
	}
		
	// scroll animation
	$('.b_01').css('opacity','0');
	$('.b_02').css('opacity','0');
	$('.b_03').css('opacity','0');
	
	$('.p_01').css('opacity','0');
	$('.p_02').css('opacity','0');
	$('.p_03').css('opacity','0');
	
	$('.features__ip').css('opacity','0');
	$('.features__vm').css('opacity','0');
	$('.features__custom').css('opacity','0');
	$('.features__data').css('opacity','0');
	
	$('.infographic__tier3_text').css('opacity','0');
	$('.infographic__tier3_text h2').css('opacity','0');
	$('.infographic__tier3_text p').css('opacity','0');
	$('.infographic__tier3_img').css('opacity','0');
	$('.infographic__tier3_num').css('opacity','0');
	
	$('.infographic__net_text').css('opacity','0');
	$('.infographic__net_text h2').css('opacity','0');
	$('.infographic__net_text p').css('opacity','0');
	$('.infographic__net_img').css('opacity','0');
	$('.infographic__net_num').css('opacity','0');
	
	$('.infographic__equipment_text').css('opacity','0');
	$('.infographic__equipment_text h2').css('opacity','0');
	$('.infographic__equipment_text p').css('opacity','0');
	$('.infographic__equipment_img').css('opacity','0');
	$('.infographic__equipment_num').css('opacity','0');
	
	$('.infographic__data_text').css('opacity','0');
	$('.infographic__data_text h2').css('opacity','0');
	$('.infographic__data_text p').css('opacity','0');
	$('.infographic__data_img').css('opacity','0');
	$('.infographic__data_num').css('opacity','0');
	
	$(document).scroll(function(){
		// animation sale_plan 
		 if ($(window).scrollTop() > 200) {
			TweenLite.to($('.b_01'), .3, {autoAlpha: 1, y: -10, ease: Power1.easeOut, delay: .1}); 
			TweenLite.to($('.p_01'), .3, {autoAlpha: 1, y: -10, ease: Power1.easeOut, delay: .2});  
		 }	
		 if ($(window).scrollTop() > 400) {
			TweenLite.to($('.b_02'), .3, {autoAlpha: 1, y: -10, ease: Power1.easeOut, delay: .1}); 
			TweenLite.to($('.p_02'), .3, {autoAlpha: 1, y: -10, ease: Power1.easeOut, delay: .2});  
		 }	
		 if ($(window).scrollTop() > 600) {
			TweenLite.to($('.b_03'), .3, {autoAlpha: 1, y: -10, ease: Power1.easeOut, delay: .1}); 
			TweenLite.to($('.p_03'), .3, {autoAlpha: 1, y: -10, ease: Power1.easeOut, delay: .2});  
		 }
		 if ($(window).scrollTop() < 200) {
			TweenLite.to($('.b_01'), .3, {autoAlpha: 0, y: 0, ease: Power1.easeOut, delay: .1}); 
			TweenLite.to($('.p_01'), .3, {autoAlpha: 0, y: 0, ease: Power1.easeOut, delay: .2});  
		 }	
		 if ($(window).scrollTop() < 400) {
			TweenLite.to($('.b_02'), .3, {autoAlpha: 0, y: 0, ease: Power1.easeOut, delay: .1}); 
			TweenLite.to($('.p_02'), .3, {autoAlpha: 0, y: 0, ease: Power1.easeOut, delay: .2});  
		 }	
		 if ($(window).scrollTop() < 600) {
			TweenLite.to($('.b_03'), .3, {autoAlpha: 0, y: 0, ease: Power1.easeOut, delay: .1}); 
			TweenLite.to($('.p_03'), .3, {autoAlpha: 0, y: 0, ease: Power1.easeOut, delay: .2});  
		 }
		
		// animation features
		if ($(window).scrollTop() > 1110) {
			TweenLite.to($('.features__ip'), .3, {autoAlpha: 1, y: -20, ease: Power1.easeOut, delay: .1}); 
			TweenLite.to($('.features__vm'), .3, {autoAlpha: 1, y: -20, ease: Power1.easeOut, delay: .2}); 
			TweenLite.to($('.features__custom'), .3, {autoAlpha: 1, y: -20, ease: Power1.easeOut, delay: .3}); 
			TweenLite.to($('.features__data'), .3, {autoAlpha: 1, y: -20, ease: Power1.easeOut, delay: .4});  
		 }	
 		if ($(window).scrollTop() < 1110) {
			TweenLite.to($('.features__ip'), .3, {autoAlpha: 0, y: 0, ease: Power1.easeOut, delay: .1}); 
			TweenLite.to($('.features__vm'), .3, {autoAlpha: 0, y: 0, ease: Power1.easeOut, delay: .2}); 
			TweenLite.to($('.features__custom'), .3, {autoAlpha: 0, y: 0, ease: Power1.easeOut, delay: .3}); 
			TweenLite.to($('.features__data'), .3, {autoAlpha: 0, y: 0, ease: Power1.easeOut, delay: .4});  
		 }	
		
		// animation infographic
		if ($(window).scrollTop() > 1710) {
			$('.infographic__tier3_num p').removeClass('tier3_num_static').addClass('tier3_num_active');
			
			TweenLite.to($('.infographic__tier3_num'), .3, {autoAlpha: 1, x: -10, ease: Power1.easeOut}); 
			TweenLite.to($('.infographic__tier3_text'), .3, {autoAlpha: 1, y: -10, ease: Power1.easeOut, delay: .1}); 
			TweenLite.to($('.infographic__tier3_text h2'), .3, {autoAlpha: 1, y: -10, ease: Power1.easeOut, delay: .2}); 
			TweenLite.to($('.infographic__tier3_text p'), .3, {autoAlpha: 1, y: -10, ease: Power1.easeOut, delay: .3}); 
			TweenLite.to($('.infographic__tier3_img'), .3, {autoAlpha: 1, y: -10, ease: Power1.easeOut,delay: .4}); 
		 }	
		if ($(window).scrollTop() < 1710) {
			$('.infographic__tier3_num p').removeClass('tier3_num_active').addClass('tier3_num_static');	
			
			TweenLite.to($('.infographic__tier3_num'), .3, {autoAlpha: 0, x: 0, ease: Power1.easeOut}); 	
			TweenLite.to($('.infographic__tier3_text'), .3, {autoAlpha: 0, y: 0, ease: Power1.easeOut, delay: .1}); 
			TweenLite.to($('.infographic__tier3_text h2'), .3, {autoAlpha: 0, y: 0, ease: Power1.easeOut, delay: .2}); 
			TweenLite.to($('.infographic__tier3_text p'), .3, {autoAlpha: 0, y: 0, ease: Power1.easeOut, delay: .3}); 
			TweenLite.to($('.infographic__tier3_img'), .3, {autoAlpha: 0, y: 0, ease: Power1.easeOut,delay: .4}); 
		 }	
	
		if ($(window).scrollTop() > 2180) {
			$('.infographic__tier3_num p').removeClass('tier3_num_active').addClass('tier3_num_static');
			TweenLite.to($('.infographic__tier3_num'), .3, {autoAlpha: 1, x: 0, ease: Power1.easeOut}); 
			
			$('.infographic__net_num p').removeClass('net_num_static').addClass('net_num_active');
			
			TweenLite.to($('.infographic__net_num'), .3, {autoAlpha: 1, x: -10, ease: Power1.easeOut}); 
			TweenLite.to($('.infographic__net_text'), .3, {autoAlpha: 1, y: -10, ease: Power1.easeOut, delay: .1}); 
			TweenLite.to($('.infographic__net_text h2'), .3, {autoAlpha: 1, y: -10, ease: Power1.easeOut, delay: .2}); 
			TweenLite.to($('.infographic__net_text p'), .3, {autoAlpha: 1, y: -10, ease: Power1.easeOut, delay: .3}); 
			TweenLite.to($('.infographic__net_img'), .3, {autoAlpha: 1, y: -10, ease: Power1.easeOut,delay: .4}); 
		 }	
		if ($(window).scrollTop() < 2180) {
			$('.infographic__net_num p').removeClass('net_num_active').addClass('net_num_static');	
			
			TweenLite.to($('.infographic__net_num'), .3, {autoAlpha: 0, x: 0, ease: Power1.easeOut}); 	
			TweenLite.to($('.infographic__net_text'), .3, {autoAlpha: 0, y: 0, ease: Power1.easeOut, delay: .1}); 
			TweenLite.to($('.infographic__net_text h2'), .3, {autoAlpha: 0, y: 0, ease: Power1.easeOut, delay: .2}); 
			TweenLite.to($('.infographic__net_text p'), .3, {autoAlpha: 0, y: 0, ease: Power1.easeOut, delay: .3}); 
			TweenLite.to($('.infographic__net_img'), .3, {autoAlpha: 0, y: 0, ease: Power1.easeOut,delay: .4}); 
		 }	
		
		if ($(window).scrollTop() > 2690) {
			$('.infographic__net_num p').removeClass('net_num_active').addClass('net_num_static');
			TweenLite.to($('.infographic__net_num'), .3, {autoAlpha: 1, x: 0, ease: Power1.easeOut}); 
			
			$('.infographic__equipment_num p').removeClass('equipment_num_static').addClass('equipment_num_active');
			
			TweenLite.to($('.infographic__equipment_num'), .3, {autoAlpha: 1, x: -10, ease: Power1.easeOut}); 
			TweenLite.to($('.infographic__equipment_text'), .3, {autoAlpha: 1, y: -10, ease: Power1.easeOut, delay: .1}); 
			TweenLite.to($('.infographic__equipment_text h2'), .3, {autoAlpha: 1, y: -10, ease: Power1.easeOut, delay: .2}); 
			TweenLite.to($('.infographic__equipment_text p'), .3, {autoAlpha: 1, y: -10, ease: Power1.easeOut, delay: .3}); 
			TweenLite.to($('.infographic__equipment_img'), .3, {autoAlpha: 1, y: -10, ease: Power1.easeOut,delay: .4}); 
		 }	
		if ($(window).scrollTop() < 2690) {
			$('.infographic__equipment_num p').removeClass('equipment_num_active').addClass('equipment_num_static');	
			
			TweenLite.to($('.infographic__equipment_num'), .3, {autoAlpha: 0, x: 0, ease: Power1.easeOut}); 	
			TweenLite.to($('.infographic__equipment_text'), .3, {autoAlpha: 0, y: 0, ease: Power1.easeOut, delay: .1}); 
			TweenLite.to($('.infographic__equipment_text h2'), .3, {autoAlpha: 0, y: 0, ease: Power1.easeOut, delay: .2}); 
			TweenLite.to($('.infographic__equipment_text p'), .3, {autoAlpha: 0, y: 0, ease: Power1.easeOut, delay: .3}); 
			TweenLite.to($('.infographic__equipment_img'), .3, {autoAlpha: 0, y: 0, ease: Power1.easeOut,delay: .4}); 
		 }	
		
		if ($(window).scrollTop() > 3185) {
			$('.infographic__equipment_num p').removeClass('equipment_num_active').addClass('equipment_num_static');
			TweenLite.to($('.infographic__equipment_num'), .3, {autoAlpha: 1, x: 0, ease: Power1.easeOut}); 
			
			$('.infographic__data_num p').removeClass('data_num_static').addClass('data_num_active');
			
			TweenLite.to($('.infographic__data_num'), .3, {autoAlpha: 1, x: -10, ease: Power1.easeOut}); 
			TweenLite.to($('.infographic__data_text'), .3, {autoAlpha: 1, y: -10, ease: Power1.easeOut, delay: .1}); 
			TweenLite.to($('.infographic__data_text h2'), .3, {autoAlpha: 1, y: -10, ease: Power1.easeOut, delay: .2}); 
			TweenLite.to($('.infographic__data_text p'), .3, {autoAlpha: 1, y: -10, ease: Power1.easeOut, delay: .3}); 
			TweenLite.to($('.infographic__data_img'), .3, {autoAlpha: 1, y: -10, ease: Power1.easeOut,delay: .4}); 
		 }	
		if ($(window).scrollTop() < 3185) {
			$('.infographic__data_num p').removeClass('data_num_active').addClass('data_num_static');	
			
			TweenLite.to($('.infographic__data_num'), .3, {autoAlpha: 0, x: 0, ease: Power1.easeOut}); 	
			TweenLite.to($('.infographic__data_text'), .3, {autoAlpha: 0, y: 0, ease: Power1.easeOut, delay: .1}); 
			TweenLite.to($('.infographic__data_text h2'), .3, {autoAlpha: 0, y: 0, ease: Power1.easeOut, delay: .2}); 
			TweenLite.to($('.infographic__data_text p'), .3, {autoAlpha: 0, y: 0, ease: Power1.easeOut, delay: .3}); 
			TweenLite.to($('.infographic__data_img'), .3, {autoAlpha: 0, y: 0, ease: Power1.easeOut,delay: .4}); 
		 }	
		
    });
	
	// range sliders initialization
	$('input[name="cpu_slider"]').rangeslider({
		polyfill: false,
		onInit: function(){
			$('#output_cpu').text('2');		
		},
		onSlide:function(position, value){
			if(value===1)	{$('#output_cpu').text('1');}
			if(value===2)	{$('#output_cpu').text('2');}
			if(value===3)	{$('#output_cpu').text('4');}
			if(value===4)	{$('#output_cpu').text('8');}
		}
	});
	$('input[name="ram_slider"]').rangeslider({
		polyfill: false,
		onInit: function(){
			$('#output_ram').text('4 Гб');		
		},
		onSlide:function(position, value){
			if(value===1) {$('#output_ram').text('1 Гб');}
			if(value===2) {$('#output_ram').text('2 Гб');}
			if(value===3) {$('#output_ram').text('4 Гб');}
			if(value===4) {$('#output_ram').text('8 Гб');}
			if(value===5) {$('#output_ram').text('32 Гб');}
		}
	});
	$('input[name="hdd_slider"]').rangeslider({
		polyfill: false,
		onInit: function(){
			$('#output_hdd').text('30 Гб');		
		},
		onSlide:function(position, value){
			if(value===1) {$('#output_hdd').text('20 Гб');}
			if(value===2) {$('#output_hdd').text('30 Гб');}
			if(value===3) {$('#output_hdd').text('40 Гб');}
			if(value===4) {$('#output_hdd').text('80 Гб');}
		}
	});	
	
	// language bottom toogle
	$('#RU_TOP') .click( function  () {
		if ( $('#RU_TOP') .hasClass("on_lang") ) return;
		$('#EN_TOP').removeClass( "on_lang" );
		$('#RU_TOP').addClass("on_lang");
		TweenLite.to($('.on_lang_btn'), .3, {x: 0, ease: Power1.easeOut});
});
	$('#EN_TOP') .click( function  () {
		if ( $('#EN_TOP') .hasClass("on_lang") ) return;
		$('#RU_TOP').removeClass( "on_lang" );
		$('#EN_TOP').addClass("on_lang");
		TweenLite.to($('.on_lang_btn'), .3, {x: -38, ease: Power1.easeOut});
});
	
	$('#RU_BOT') .click( function  () {
		if ( $('#RU_BOT') .hasClass("on_lang")) return;
		
		$('#EN_BOT').removeClass("on_lang");
		$('#RU_BOT').addClass("on_lang");
		TweenLite.to($('.on_lang_btn_bot'), .3, {x: 0, ease: Power1.easeOut});
});
	$('#EN_BOT') .click( function  () {
		
		if ( $('#EN_BOT') .hasClass("on_lang") ) return;
		$('#RU_BOT').removeClass( "on_lang" );
		$('#EN_BOT').addClass("on_lang");
		TweenLite.to($('.on_lang_btn_bot'), .3, {x: -38, ease: Power1.easeOut});
});
	
	// sale_plan panel toogle
	$('.tab_plan').click( function () {
		if ( $('.tab_plan') .hasClass("on_tab") ) return;
		
		$('.tab_config').removeClass( "on_tab" );
		$('.tab_plan').addClass("on_tab");

		TweenLite.to($('.sale_plan__body_config'), .3, {display: 'none', opacity: 0, y: 20, ease: Power1.easeOut});
		TweenLite.from($('.sale_plan__body_plan'), .1, {display: 'none',opacity: 0, y: 20, ease: Power1.easeOut});
		TweenLite.to($('.sale_plan__body_plan'), .3, {display: 'block', opacity: 1, y: 0, delay: .4, ease: Power1.easeOut});
		
		TweenLite.to($('.tab_cir'), .3, {x: 0, ease: Power1.easeOut});
		
		TweenLite.to($('.tab_arr'), .3, {y: 20, ease: Power1.easeOut});
		TweenLite.to($('.tab_arr'), .1, {x: 0, ease: Power1.easeOut, delay: .3});
		TweenLite.to($('.tab_arr'), .3, {y:0, ease: Power1.easeOut, delay:.4});
	});
	$('.tab_config').click( function () {
		if ( $('.tab_config') .hasClass("on_tab") ) return;
		
		$('.tab_plan').removeClass( "on_tab" );
		$('.tab_config').addClass("on_tab");

		TweenLite.to($('.sale_plan__body_plan'), .3, {display: 'none', opacity: 0, y: 20, ease: Power1.easeOut});
		TweenLite.from($('.sale_plan__body_config'), .1, {display: 'none',opacity: 0, y: 20, ease: Power1.easeOut});
		TweenLite.to($('.sale_plan__body_config'), .3, {display: 'block',opacity: 1, y: 0, delay: .4, ease: Power1.easeOut});
		
		TweenLite.to($('.tab_cir'), .3, {x: 225, ease: Power1.easeOut});
		
		TweenLite.to($('.tab_arr'), .3, {y: 20, ease: Power1.easeOut});
		TweenLite.to($('.tab_arr'), .1, {x: 215, ease: Power1.easeOut, delay:.3});
		TweenLite.to($('.tab_arr'), .3, {y:0, ease: Power1.easeOut, delay:.4});
	});

	// calculator
	$( "input" ).each(function() {
		$( this ).change(function() {
			var sum = 0;
			// sum_cpu
			if ( $('input[name="cpu_slider"]').val() == 1 ) { sum += 120 }
			if ( $('input[name="cpu_slider"]').val() == 2 ) { sum += 140 }
			if ( $('input[name="cpu_slider"]').val() == 3 ) { sum += 160 }
			if ( $('input[name="cpu_slider"]').val() == 4 ) { sum += 180 }
			if ( $('#xeon3').prop('checked') ) { sum += 680 }
			// sum_ram
			if ( $('input[name="ram_slider"]').val() == 1 ) { sum += 120 }
			if ( $('input[name="ram_slider"]').val() == 2 ) { sum += 140 }
			if ( $('input[name="ram_slider"]').val() == 3 ) { sum += 160 }
			if ( $('input[name="ram_slider"]').val() == 4 ) { sum += 180 }
			if ( $('input[name="ram_slider"]').val() == 5 ) { sum += 180 }
			// sum_hdd
			if ( $('input[name="hdd_slider"]').val() == 1 ) { sum += 120 }
			if ( $('input[name="hdd_slider"]').val() == 2 ) { sum += 140 }
			if ( $('input[name="hdd_slider"]').val() == 3 ) { sum += 160 }
			if ( $('input[name="hdd_slider"]').val() == 4 ) { sum += 180 }
			if ( $('#ssd').prop('checked') ) { sum += 680 }
			// sum_services
			if ( $('#admin').prop('checked') ) { sum += 680 }
			if ( $('#panel').prop('checked') ) { sum += 680 }
			if ( $('#license').prop('checked') ) { sum += 680 }
			if ( $('#backup').prop('checked') ) { sum += 680 }
			
			$('#sum_calculate').text(sum);
	});
});
	
});
