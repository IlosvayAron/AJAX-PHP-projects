<?php
    header('Content-Type: text/xml');
    echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';

    echo '<response>';
        $food = $_GET['food'];
        $foodArray = array('tuna', 'bacon', 'beef', 'loaf', 'ham');
        if(in_array($food,$foodArray))
            echo 'We do have ' . $food . '!';
        elseif($food == ''
            echo 'Please enter a food!';
        else
            echo 'Sorry, we don\'t sell no ' . $food . '!';//Sajnáljuk, de nem adunk el $food-ot.
    echo '</response>';
?>