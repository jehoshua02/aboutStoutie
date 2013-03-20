<?php

$movies = glob(__DIR__ . '/../img/movies/*');
foreach ($movies as $movie) {
    echo sprintf("<img class=\"item\" src=\"img/movies/%s\">\n", basename($movie));
}

