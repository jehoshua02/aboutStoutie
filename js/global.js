$(function () {
    colorSlides();
    initImageGrids();
});

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
            columnWidth: 286
		});
	});
}

function randomColor()
{
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}

