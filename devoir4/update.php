<?php
header('Content-Type: application/json');

$host = 'localhost';
$db = 'emergency_waitlist';
$user = 'postgres';
$password = '123456';
$dsn = "pgsql:host=$host;dbname=$db;";

try {
    $pdo = new PDO($dsn, $user, $password, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
    $name = $_GET['name'] ?? '';
    $gender = $_GET['gender'] ?? '';
    $tel = $_GET['tel'] ?? '';
    $time = $_GET['time'] ?? '';
    $code = $_GET['code'] ?? '';
    $sql = "INSERT INTO record (name, gender, tel, registrationTime, code, status) VALUES (:name, :gender, :tel, :time, :code, :status)";
    $stmt = $pdo->prepare($sql);

    $stmt->execute([
        ':name' => $name,
        ':gender' => $gender,
        ':tel' => $tel,
        ':time' => $time,
        ':code' => $code,
        ":status" => 'wait'
    ]);
    echo json_encode(['status' => 'success', 'message' => 'Update successful']);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Database error: ' . $e->getMessage()]);
}

