$(function () {


	$('*').click(lytboxEngine);

	function lytboxEngine() {
		console.log('yyy')
		var $self = $(this); 
		//console.log('dat click');
		event.stopPropagation();

		if($(this).attr('class').indexOf('wp-image') > -1){ //checks if contains wp-image in class name 
			//console.log("dat image");

			var $div = $('<div />').prependTo('body');
			$div.attr('class', 'lytbox');

			var $lytbox = $('.lytbox');
			var winHeight = $(window).height();
			var winWidth = $(window).width();
			var pageWidth = $('#masthead').width();

			$lytbox.width(pageWidth);
			$('body').css({'background-color' : 'rgba(20,20,20,0.65'});

			var $container = $('<div />').prependTo('.lytbox');
			$container.attr('class', 'lytContainer');
			var $lytpic = $('.lytContainer');

			var top = ((winHeight - $lytpic.height()) / 3);
			var left = ( winWidth - $lytpic.width() ) / 2;

			$lytpic.css({'position' : 'absolute'});
			$lytpic.css({'left' : left});
			$lytpic.css({'top' : top})
			$lytpic.css({'margin' : '0 auto'});
			$lytpic.css({'max-width' : '400px'});
			$lytpic.css({'max-height' : '400px'});

			var $src = $self.attr('src');
			//console.log($src);

			//$lytpic.prepend('<img src="http://localhost/challenge5/wp-content/uploads/2014/04/DUNT.jpg" />');
			$lytpic.prepend('<img src="" />');
			$lytpic.children().attr("src", $src);


			$lytpic.children().css({'max-width' : '400px'});
			$lytpic.children().css({'max-height' : '400px'});
			$lytpic.children().css({'min-width' : '400px'});
			$lytpic.children().css({'min-height' : '400px'});

			return false;
		} else { 

			//if($(this).attr('class').indexOf('lytbox') > -1){ 
			//	return false;
			//} else { 
				$('.lytbox').remove();
				$('body').css({'background-color' : ''});
			//};

		};
		return false;
	};


	$(window).on('resize', function(){
     lytboxEngine();
	});

})