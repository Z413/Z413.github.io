
		var clock;
		
		$(document).ready(function() {
			var clock;

			clock = $('.clock').FlipClock({
		        clockFace: 'DailyCounter',
		        autoStart: false,
				showSeconds: false,
		        callbacks: {
		        	stop: function() {
		        		$('.message').html('Time out')
		        	}
		        }
		    });
				    
		    clock.setTime(1000000);
		    clock.setCountdown(true);
		    clock.start();

		});

