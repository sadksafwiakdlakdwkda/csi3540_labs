<?php
header('Content-Type: application/json');

$host = 'localhost';
$db = 'emergency_waitlist';
$user = 'postgres';
$password = '123456';
$dsn = "pgsql:host=$host;dbname=$db;";


try {
    $pdo = new PDO($dsn, $user, $password, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
    $sql = "SELECT * FROM record WHERE status = 'wait'";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($results);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Database error: ' . $e->getMessage()]);
}

