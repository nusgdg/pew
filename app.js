var main = function(){
	$('.storybutton').on('touchstart click', function(){
		$('.sendcard').hide();
		$('.story').fadeIn(1000);
	});
	$('.cardbutton').on('touchstart click', function(){
		$('.story').hide();
		$('.sendcard').fadeIn(1000);
	});
}

$(document).ready(main);