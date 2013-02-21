<?php

$slideDir = realpath(__DIR__ . '/../slides');
$slides = glob($slideDir . '/*-*/index.html');
sort($slides);

$number = 1;
foreach ($slides as $slide) {
    $oldname = dirname($slide);
    $newname = preg_replace('/\/[0-9\.]+-/', sprintf('/%02.d-', $number), $oldname);
    rename($oldname, $newname);
    $number++;
}

