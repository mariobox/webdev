var $contactForm = $('#contact-form');

$contactForm.submit(function(e) {
	e.preventDefault();
	var $submit = $('input:submit', $contactForm);
	var defaultSubmitText = $submit.val();

	$.ajax({
		url: '//formspree.io/mariosc@gmail.com',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
			$contactForm.append('<h4>Sending message…</h4>');
		},
		success: function(data) {
			$contactForm.hide();
			$('#message').html('<h4>Your form has been sent successfully!</h4>');
		},
		error: function(err) {
			$contactForm.hide();
			$('#message').html('<h4>Ops, there was an error.</h4>');
			
		}
	});
});
