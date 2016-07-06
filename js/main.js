$(document).on('ready', function(){
	//Remove the class selected from all li's and add it to the clicked one.
	$('#nav-main li').on('click', function(){
		$('#nav-main li').removeClass('selected', 5000);

		$(this).addClass('selected');
	});

	//Click function for Home
	$('#home_button').on('click', function(){
		//if the home page is not the current page
		if(!$('#home').hasClass('current')){
			//if the current page is work slide it right and show home
			if($('#work').hasClass('current')){
				$('#work').animate({
						'left': '100px',
						'opacity': '0'
					}, 1000, function(){
						$('#home').animate({'opacity': '1'}, 500);
						$('#work').css('left', '0px');
				});
			}
			//if the current page is work slide it right and show home
			else{
				$('#hobbies').animate({
						'left': '100px',
						'opacity': '0'
					}, 1000, function(){
						$('#home').animate({'opacity': '1'}, 500);
						$('#hobbies').css('left', '0px');
				});
			}

			//Remove the class current from all pages
			$('.page').removeClass('current');
			$('#home').addClass('current');
		}
	});

	//Click function for Work
	$('#work_button').on('click', function(){
		//if the work page is not the current page
		if(!$('#work').hasClass('current')){
			//if the current page is home slide it left and show work
			if($('#home').hasClass('current')){
				$('#home').animate({
						'left': '-100px',
						'opacity': '0'
					}, 1000, function(){
						$('#work').animate({'opacity': '1'}, 500);
						$('#home').css('left', '0px');
				});
			}
			//if the current page is work slide it right and show work
			else{
				$('#hobbies').animate({
						'left': '100px',
						'opacity': '0'
					}, 1000, function(){
						$('#work').animate({'opacity': '1'}, 500);
						$('#hobbies').css('left', '0px');
				});
			}

			//Remove the class current from all pages
			$('.page').removeClass('current');
			$('#work').addClass('current');
		}
	});

	//Click function for Hobbies
	$('#hobbies_button').on('click', function(){
		//if the home page is not the current page
		if(!$('#hobbies').hasClass('current')){
			//if the current page is work slide it left and show hobbies
			if($('#work').hasClass('current')){
				$('#work').animate({
						'left': '-100px',
						'opacity': '0'
					}, 1000, function(){
						$('#hobbies').animate({'opacity': '1'}, 500);
						$('#work').css('left', '0px');
				});
			}
			//if the current page is home slide it left and show hobbies
			else{
				$('#home').animate({
						'left': '-100px',
						'opacity': '0'
					}, 1000, function(){
						$('#hobbies').animate({'opacity': '1'}, 500);
						$('#home').css('left', '0px');
				});
			}

			//Remove the class current from all pages
			$('.page').removeClass('current');
			$('#hobbies').addClass('current');
		}
	});

}); //closes ready function