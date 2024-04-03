<?php
header('Content-Type: application/json');

$host = 'localhost';
$db = 'emergency_waitlist';
$user = 'postgres';
$password = '123456';
$dsn = "pgsql:host=$host;dbname=$db;";

try {
    $pdo = new PDO($dsn, $user, $password, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
    $sql = " UPDATE record
    SET status = 'done'
    WHERE registrationTime = (
        SELECT MIN(registrationTime)
        FROM record
        WHERE status != 'done'
    );";
     $stmt = $pdo->prepare($sql);
     $stmt->execute(); 
     $affectedRows = $stmt->rowCount();
 
     if ($affectedRows > 0) {
        echo json_encode(['status' => 'success', 'message' => "$affectedRows record(s) updated successfully"]);
    } else {
        echo json_encode(['status' => 'info', 'message' => 'No records needed updating.']);
    }

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Database error: ' . $e->getMessage()]);
}
