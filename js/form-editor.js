// JavaScript Document
function formEditor () {
    
	//Bootstrap tooltip dependence
	$('.edit').tooltip ();
	
	//change all form items state to disabled
	var $input = $(".form-editor :input");
	$input.attr('disabled', true).addClass('disabled');
	
	//get paths
	var pathEle = $(this).parent().children('.disabled');
	var pathCheRad = $(this).parent().children('label').children('.disabled');
	
	//turn on editable fields on click
	$('.edit').click(function() {
		
		//disable inputs
		pathEle
		.attr('disabled', false)
		.focus() //set focus to element
		.removeClass('disabled');
		
		//disable radio & checkboxes
		pathCheRad
		.attr('disabled', false)
		.focus()
		.removeClass('disabled');;
		
		//show form submit button
		$('.trigger-submit').attr('disabled', false).fadeIn('slow').removeClass('disabled');
		
		//hide and remove edit button
		$(this).fadeOut('slow').queue(function() {
      		$(this).remove().dequeue();
    	});
		
		//remove tooltip html on click too
		$(this).parent().children('.tooltip').remove();
		
	});
	
	//turn on all fields
	$('.edit-all').click(function() {
		pathEle = $('.disabled');
		pathEle.attr('disabled', false).fadeIn('slow').removeClass('disabled');
		$(this).slideUp('slow').queue(function() {
      		$(this).remove().dequeue();
    	});
		$('.edit').fadeOut('slow').queue(function() {
      		$(this).remove().dequeue();
    	});
		
	});
}