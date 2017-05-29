var $contactForm = $('#contact-form');

$contactForm.submit(function(e) {
	e.preventDefault();
	
	$.ajax({
		url: '//formspree.io/mariosc@gmail.com',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
			$contactForm.hide();
			$('#message').html('<h4>Sending message…</h4>');
		},
		success: function() {
			$contactForm.hide();
			$('#message').html('<h4>Your form has been sent successfully!</h4>');
		},
		error: function() {
			$contactForm.hide();
			$('#message').html('<h4>Ops, there was an error.<a href="index.html">Try again</a></h4>');
			
		}
	});
});
