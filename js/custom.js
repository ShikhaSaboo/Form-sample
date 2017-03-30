$(document).ready( function() {
		var scroll_start = 0;
		var start_change = $('nav');
		var offset = start_change.offset();
		
		var scrollFxn = function(){
			if(start_change.length){
				$(document).scroll(function(){
					scroll_start = $(window).scrollTop();
					if(scroll_start>offset.top-10){
						$('nav').removeClass('drop-navbar');
					}
					else {
						$('nav').addClass('drop-navbar');
					}
				});
			}
		}

    	$(document).on('change', '.btn-file :file', function() {
		var input = $(this);
		var get = input.val();
		console.log('input',get);
		console.log('input',get.replace(/\\/g, '/'));
		console.log('input',get.replace(/\\/g, '/').replace(/.*\//, ''));
			var label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
		input.trigger('fileselect', [label]);
		});

		$('.btn-file :file').on('fileselect', function(event, label) {
		    
		    var input = $(this).parents('.input-group').find(':text'),
		        log = label;
		    
		    if( input.length ) {
		        input.val(log);
		    } else {
		        if( log ) alert(log);
		    }
	    
		});
		function readURL(input) {
		    if (input.files && input.files[0]) {
		        var reader = new FileReader();
		        
		        reader.onload = function (e) {
		        	$('#img-upload').css('display','block');
		            $('#img-upload').attr('src', e.target.result);
		        }
		        
		        reader.readAsDataURL(input.files[0]);
		    }
		}

		$("#imgInp").change(function(){
		    readURL(this);
		}); 

		scrollFxn();
	});