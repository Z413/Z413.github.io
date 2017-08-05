$("#slider").slider({
    ticks: [0, 100, 200, 300],
    ticks_positions: [0, 24, 50, 100],
    ticks_labels: [
        'Не владею',
        'Использую готовые </br>решения',
        'Использую готовые решения </br>и умею и переделывать',
        'Пишу сложный JS с нуля'
    ],
    ticks_snap_bounds: 40
});
(function () {
    // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
    if (!String.prototype.trim) {
        (function() {
            // Make sure we trim BOM and NBSP
            var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            String.prototype.trim = function() {
                return this.replace(rtrim, '');
            };
        })();
    }[].slice.call(document.querySelectorAll('input.input__field')).forEach(function(inputEl) {
        // in case the input is already filled..
        if (inputEl.value.trim() !== '') {
            classie.add(inputEl.parentNode, 'input--filled');
        }

        // events:
        inputEl.addEventListener('focus', onInputFocus);
        inputEl.addEventListener('blur', onInputBlur);
    });

    function onInputFocus(ev) {
        classie.add(ev.target.parentNode, 'input--filled');
    }

    function onInputBlur(ev) {
        if (ev.target.value.trim() === '') {
            classie.remove(ev.target.parentNode, 'input--filled');
        }
    }
})();
(function () {
    [].slice.call(document.querySelectorAll('select.cs-select')).forEach(function(el) {
        new SelectFx(el);
    });
})();
(function () {
	if ($(window).width() < 768) {
		$(".nav").hide();
	} 
	
    $('.go_to').click( function () { 
	var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) { 
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); 
        }
	    return false; 
    });	
	
	$('.nav a').click(function () {
		$('.nav a').removeClass('nav__link_active');
		$(this).addClass('nav__link_active');
		return true;
	});
	
	$('.mobile__menu').click(function () {
		$(".nav").slideToggle(300);
	});	
	
	
	
	
})();

