<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <?php echo "This is a test!" . "<br>"?>
    <?php
    $x = "I am ";
    $y = "Archie";

    $z = $x;
    $z .= $y;
    echo $z;
    echo "<br>";
    ?>

    <?php 
    $age    = "100";
    echo "My age is {$age}";
    ?>
    <?php echo "<br><br><br><br>"?>

    <form action="index.php" method="POST">
        <input type="number" placeholder="Enter number" name="input"><br><br>
        <input type="submit" value="Get month" name="submit">
    </form>
   
    <?php
        if(isset($_POST["submit"])){
            $input = $_POST["input"];
            $location = "Location:" . "index.php" . "?msg=";

            switch($input){
                case 1: $msg = "The month is January";
                header($location . $msg);

                break;
                case 2: $msg = "The month is Febuary";
                header($location . $msg);

                break;
                case 3: $msg = "The month is March";
                header($location . $msg);

                break;
                case 4: $msg = "The month is April";
                header($location . $msg);

                break;
                case 5: $msg = "The month is May";
                header($location . $msg);

                break;
                case 6: $msg = "The month is June";
                header($location . $msg);

                break;
                case 7: $msg = "The month is July";
                header($location . $msg);

                break;
                case 8: $msg = "The month is August";
                header($location . $msg);

                break;
                case 9: $msg = "The month is September";
                header($location . $msg);

                break;
                case 10: $msg = "The month is October";
                header($location . $msg);

                break;
                case 11: $msg = "The month is November";
                header($location . $msg);

                break;
                case 12: $msg = "The month is December";
                header($location . $msg);

                break;
                default: $msg = "Month cannot be found";
                header($location . $msg);
                break;
            }
        }

        if(isset($_GET['msg'])){
            echo "<h3>" . $_GET['msg'] . "</h3>";
        }
    ?>
    <?php echo "<br><br><br>"?>

    <?php 

        for($count = 20; $count > 0; $count--){
            if($count % 2 == 0){
                echo "{$count} is even.<br>";
            }else{
                echo "{$count} is odd.<br>";
            }
        }
    ?>
    
    <?php echo "<br><br><br>"?>

    <?php
    
    $users = array(
        "username" => "jdoe2019",
        "password" => md5("P@assw0rd"),
        "created" => "2-3-19",
        "account_type" => "premium",
        "payment_type" => "annual",
        "address" => "Ohio",
        "active" => "yes" 
    );

    foreach($users as $key => $value){
        $key_nice = ucwords(str_replace("_", " ", $key));
        echo $key_nice. ": " . $value . "<br>";
    }

    echo "<br><br>";

    $employees = array(
        array(
            "fn" => "Archie",
            "ln" => "Baclay",
            "age" => 27
        ),
        array(
            "fn" => "Bill",
            "ln" => "Gates", 
            "age" => 70
        ),
        array(
            "fn" => "James",
            "ln" => "Bond",
            "age" => 60
        )
    );

    foreach($employees as $people){
        echo "My name is " . $people['fn'] . " " . $people['ln'] . ". I am " . $people['age'] . " years old. <br>";
    };

    ?>






</body>
</html>