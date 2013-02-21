<?php

$slideDir = __DIR__ . '/slides';
$slides = glob($slideDir . '/*-*/index.html');
sort($slides);
$slideId = function ($slide) use ($slideDir) {
    return 'slide-' . trim(str_replace($slideDir, '', dirname($slide)), '/');
};
$slideIds = array_map($slideId, $slides);

?>
<!DOCTYPE html>
<html>
<head>
<title>About Stoutie</title>
<link href="css/global.css" rel="stylesheet" type="text/css">
<script src="js/jquery.min.js"></script>
<script src="js/jquery.color.min.js"></script>
<script src="js/jquery.masonry.min.js"></script>
<script src="js/global.js"></script>
</head>
<body>

<a href="javascript:void(0);" class="colorz-button" onClick="colorSlides()">CoLOrZ :D</a>

<div class="page-wrap">

    <div class="slides">
        <?php foreach ($slides as $i => $slide): ?>
        <article id="<?php echo $slideIds[$i] ?>" class="slide">
        <?php echo file_get_contents($slide) ?>
        </article>
        <?php endforeach ?>
    </div>

</div>

</body>
</html>

