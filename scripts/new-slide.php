<?php

$title = readline('title: ');
$slideDir = realpath(__DIR__ . '/../slides');
$number = ceil(count(glob($slideDir . '/[0-9][0-9]-*/index.html')) + 1);
$name = trim(strtolower(preg_replace('/[^\w\d]+/', '-', $title)), '-');
$filename = sprintf('%s/%02.d-%s/index.html', $slideDir, $number, $name);
mkdir(dirname($filename), 0755, true);
file_put_contents($filename, <<<HTML
<h1 class="slide-title">{$title}</h1>
<div class="slide-body">
    <!-- content here -->
</div>
HTML
);

