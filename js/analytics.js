$('body').ready(function() {
	// Track clicking on Tell Me More button
	$('#tell-me-more-btn').on('click', function() {
		gtag('event', 'Click Tell Me More', {
		  'event_category': 'Home'
		});
	});

	// Track clicking on portfolio items
	$('.portfolio-link').on('click', function() {
		var title = $(this).parent().find('h4').text();

		gtag('event', 'Click Portfolio Item', {
		  'event_category': 'Home',
		  'event_label': title
		});
	});

	// Track contact form events
	$('#contactForm').on('submit', function() {
		gtag('event', 'Contact Form Submitted', {
			'event_category': 'Home'
		});

		if ($(this).hasClass('error')) {
			gtag('event', 'Contact Form Error', {
				'event_category': 'Home'
			});
		}
	});
});
