$(function () {
    initSlides();
    initImageGrids();
});

var $slideIds = [];
function initSlides()
{
    // add slide links
    $('.slide').each(function ($i, $slide) {
        var $id = $($slide).attr('id');
        $slideIds[$slideIds.length] = $id;
        $($slide).find('.slide-title').append(' <a class="slide-link" href="#' + $id + '">#</a>');
    });

    // scrolling event for slide links
    $('body').on('click', '.slide-link', function (e) {
        e.preventDefault();
        scrollToSlide(this.hash.replace('#', ''));
    });

    // determine current slide
    $('body').imagesLoaded(function () {
        scrollToSlide((!window.location.hash) ? $slideIds[0] : window.location.hash.replace('#', ''));
    });

    // keydown events
    $('body').keydown(function (e) {
        if (e.which == 33) { // page up
            scrollToPreviousSlide();
        } else if (e.which == 34) { // page down
            scrollToNextSlide();
        } else if (e.which == 67) { // c
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

var $currentSlideId;
function scrollToSlide($slideId)
{
    var $target = $('#' + $slideId);
    if ($target.length != 0) {
        colorSlides();
        $currentSlideId = $slideId;
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            window.location.hash = $currentSlideId;
        });
    }
}

function scrollToPreviousSlide()
{
    scrollToSlide($('#' + $currentSlideId).prev('.slide').attr('id'));
}

function scrollToNextSlide()
{
    scrollToSlide($('#' + $currentSlideId).next('.slide').attr('id'));
}

