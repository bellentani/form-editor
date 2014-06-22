// JavaScript Document
function formEditor () {

	//turn on disabled form
	var $input = $(".form-editor :input");
	$input.attr('disabled', true).addClass('disabled');
	
	//turn on editable fields on click
	$('.edit').click(function() {
		//$(this).removeClass('disabled-children');
		
		//get paths
		pathEle = $(this).parent().children('.disabled');
		pathCheRad = $(this).parent().children('label').children('.disabled');
		
		//$attr('disabled', false).focus().removeClass('disabled');
		
		pathEle
		.attr('disabled', false)
		.focus()
		.removeClass('disabled');
		
		pathCheRad
		.attr('disabled', false)
		.focus()
		.removeClass('disabled');;
		
		//show form submit button
		$('.trigger-submit').attr('disabled', false).fadeIn('slow').removeClass('disabled');
		
		//hide button
		$(this).fadeOut('slow').queue(function() {
      		$(this).remove().dequeue();
    	});
		
	});
	
	//turn on all fields
	$('.edit-all').click(function() {
		pathEle = $(this).parent().children('.disabled');
		pathEle.attr('disabled', false).fadeIn('slow').removeClass('disabled');
		$(this).slideUp('slow').queue(function() {
      		$(this).remove().dequeue();
    	});
		
	});
	
	/*$(this).on(click, function () {
		$(this).attr('disabled', false).removeClass('disabled');
		alert('hey')
	});
	*/
	//alert($input);
}