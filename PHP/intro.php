<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>

<body>
    <div class="container">
        This is my first php website

        <?php
        echo "<br>";
        echo "This is printed using PHP (Hypertext preprocessor) ";
        ?>
        <?php
        echo "Hello World";
        //Single line comment
        /* Multi
            line 
            Comment*/
        #Documnet

        $variable1 = 245;
        $variable2 = 542;
        echo " ";
        echo $variable1;
        echo " ";
        echo $variable2;
        echo " ";
        echo $variable1 + $variable2;
        ?>
        <?php
        // Arthimetic Operators
        echo "<h1> Arthimetic Operators </h1>";
        echo "<br>";
        echo "The value of varible1 + variable2 is ";
        echo $variable1 + $variable2;
        echo "<br>";
        echo "The value of varible1 - variable2 is ";
        echo $variable1 - $variable2;
        echo "<br>";
        echo "The value of varible1 * variable2 is ";
        echo $variable1 * $variable2;
        echo "<br>";
        echo "The value of varible1 / variable2 is ";
        echo $variable1 / $variable2;
        echo "<br>";
        echo "<br>";
        echo "<br>";
        // Assignment Operators
        // Comparison Operators

        echo "<h1> Comparison Operators </h1>";
        echo "<br>";
        echo "The value of 1==4 is ";
        echo var_dump(1 == 4);
        echo "<br>";

        echo "The value of 1!=4 is ";
        echo var_dump(1 != 4);
        echo "<br>";

        echo "The value of 1>=4 is ";
        echo var_dump(1 >= 4);
        echo "<br>";

        echo "The value of 1<=4 is ";
        echo var_dump(1 <= 4);
        echo "<br>";
        echo "<br>";
        echo "<br>";
        // Incrementing and Decrementing Operators
        echo "<h1>  Incrementing and Decrementing Operators</h1>";
        echo --$variable1;
        echo "<br>";
        echo --$variable2;
        echo "<br>";
        echo "<br>";
        echo "<br>";
        // Logical Operators
        echo "<h1>Logical Operators</h1>";
        $myVar = (true and true);
        $myVar = (false and true);
        $myVar = (false and false);
        $myVar = (true and false);
        $myVar = (true or false);

        echo var_dump($myVar = (true xor true));
        $myVar = (false and true);
        $myVar = (false xor false);
        $myVar = (true and false);
        echo "<br>";
        echo var_dump($myVar);
        echo "<br>";
        echo "<br>";
        echo "<br>";

        // Constant
        echo "<h1> Constant </h1>";
        echo "<br>";
        define('PI', 3.14);
        $radius = 15;
        $area = PI * $radius * $radius;
        echo "Area of Cirlce with radius :";
        echo $area;
        echo "<br>";
        echo "<br>";
        echo "<br>";

        // Conditional Statements
        // if
        // if-else
        // if-else-if

        echo "<h1>Conditional Statements </h1>";
        echo "<br>";
        $age = 6;
        if ($age > 18) {
            echo "You can go to the party";
        } else if ($age == 7) {
            echo "You are 7 years old";
        } else if ($age == 6) {
            echo "You are 6 years old";
        } else {
            echo "You can not go to the party";
        }
        // Arrays
        echo "<h1> Arrays </h1>";
        echo "<br> ";
        $languages = array("Python", "C++", "php", "NodeJs");
        echo count($languages);   
        echo $languages[0];
        // Loops => Foreach, For, While, do..while
        echo "<h1> Loops </h1>";
        echo "<br>";

        // Loops in PHP
       // Iterating arrays in PHP using while loop
    $a = 0;
    while ($a < count($languages)) {
        echo "<br>The value of language is: ";
        echo $languages[$a];
        $a++;
    }

    // Do while loop
    $a = 200;
    do {
        echo "<br>The value of a is: ";
        echo $a;
        $a++;
    } while ($a < 10);

    // For loop
    for ($a=60; $a < 10; $a++) { 
        echo "<br>The value of a from the for loop is: ";
        echo $a;
    }

    foreach ($languages as $value) {
        echo "<br>The value from foreach loop is ";
        echo $value;
    }
    echo "<br>";echo "<br>";echo "<br>";


    //  Function in PHP => Build-in function, User-defined function
    echo "<h1> Function in PHP </h1>";
    echo "<br>";
    function print_number($number){
        echo "<br>Your number is ";
        echo $number;
    }
    print_number(10);

    echo "<br>"; echo "<br>"; echo "<br>";


    // Strings
    echo "<h1> Strings </h1>";
    echo "<br>";
    $str = "This this this";
    echo $str. "<br>";
    $lenn = strlen($str);
    echo "The length of this string is ". $lenn . ". Thank you <br>";
    echo "The number of words in this string is ". str_word_count($str) . ". Thank you <br>";
    echo "The reversed string is ". strrev($str) . ". Thank you <br>";
    echo "The search for is in this string is ". strpos($str, "is") . ". Thank you <br>";
    echo "The replaced string is ". str_replace("is", "at", $str) . ". Thank you <br>";
    // echo $lenn;
    echo "<br>"; echo "<br>"; echo "<br>";
    ?>
    </div>

</body>

</html>