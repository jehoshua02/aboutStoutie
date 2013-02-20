<?php

$slideDir = __DIR__ . '/slides';
$slides = glob($slideDir . '/*-*/index.html');
sort($slides);
$slideId = function ($slide) use ($slideDir) {
    return 'slide-' . trim(str_replace($slideDir, '', dirname($slide)), '/');
};

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

<a href="javascript:void(0);" class="colorz-button" style="position: fixed; top: 20px; right: 20px; text-decoration: none; color: white" onClick="colorSlides()">CoLOrZ :D</a>

<div class="page-wrap">

<?php foreach ($slides as $slide): ?>
<article id="<?php echo $slideId($slide) ?>" class="slide">
<?php echo file_get_contents($slide) ?>
</article>
<?php endforeach ?>

</div>

</body>
</html>

