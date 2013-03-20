<?php

@$html = DomDocument::loadHtmlFile(__DIR__ . '/../scraps/pandoraLikes.html');
$finder = new DOMXPath($html);
$artists = array();
foreach ($finder->query("//div[contains(@class, 'infobox-body')]/p[1]/a") as $anchor) {
    $artist = $anchor->textContent;
    if (in_array($artist, $artists)) {
        continue;
    }
    $artists[] = $artist;
};
sort($artists);

$columns = 4;
$columnLength = ceil(count($artists) / $columns);
$columnCount = 0;
$column = 1;

// start column
echo "\t<div class=\"image-grid col-4\">\n";
echo "\t\t<ul class=\"item\">\n";
foreach ($artists as $artist) {
    if ($columnCount == $columnLength) {
        // start new column
        echo "\t\t</ul>\n";
        $column++;
        $columnCount = 0;
        echo "\t\t<ul class=\"item\">\n";
    }
    $columnCount++;
    echo sprintf("\t\t\t<li>%s</li>\n", $artist);
}
echo "\t\t</ul>\n";
echo "\t</div>\n";

