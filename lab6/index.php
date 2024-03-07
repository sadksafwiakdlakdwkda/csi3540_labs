<?php

$diceRolls = [];
$totalScore = 0;
$countOnes = 0;
for ($i = 0; $i < 5; $i++) {
    $roll = rand(1, 6);
    $diceRolls[] = $roll;
    $totalScore += $roll;
    if ($roll == 1) {
        $countOnes++;
    }
}

echo "les des: ";
echo "<br>";

foreach ($diceRolls as $roll) {
    echo $roll . " ";
}
echo "<br>";
echo "la somme：" . $totalScore;
echo "<br>";
echo  "ones：" . $countOnes;
?>