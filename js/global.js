$(function () {
    initSlides();
    initImageGrids();
});

var $slideIds = [];
function initSlides()
{
    colorSlides();

    // add slide links
    $('.slide').each(function ($i, $slide) {
        var $id = $($slide).attr('id');
        console.log($id);
        $slideIds[$slideIds.length] = $id;
        $($slide).find('.slide-title').append(' <a class="slide-link" href="#' + $id + '">#</a>');
    });

    // scrolling event for slide links
    $('body').on('click', '.slide-link', function (e) {
        e.preventDefault();
        scrollToSlide(this.hash.replace('#', ''));
    });

    // set hash to first slide
    if (!window.location.hash) {
        window.location.hash = $slideIds[0];
    }

    // keydown events
    $('body').keydown(function (e) {
        // 33 and 34
        if (e.which == 33) {
            scrollToPreviousSlide();
        } else if (e.which == 34) {
            scrollToNextSlide();
        } else if (e.which == 67) {
            colorSlides();
        }
    });
}

function colorSlides()
{
    $('.slide').each(function ($i, $slide) {
        var $color = randomColor();
        $($slide).animate({'background-color': $color});
    });    
}

function initImageGrids()
{
	var $container = $('.image-grid');
	$container.imagesLoaded(function(){
		$container.masonry({
			itemSelector: '.item',
		});
	});
}

function randomColor()
{
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}

function scrollToSlide($slideId)
{
    colorSlides();
    var $target = $('#' + $slideId);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 500, 'swing', function () {
        window.location.hash = $slideId;
    });
}

function scrollToPreviousSlide()
{
    scrollToSlide($(window.location.hash).prev('.slide').attr('id'));
}

function scrollToNextSlide()
{
    scrollToSlide($(window.location.hash).next('.slide').attr('id'));
}

