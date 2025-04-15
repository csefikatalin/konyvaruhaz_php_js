<?php
class Database {
    private $db_file = __DIR__ . '/../data/books.db'; // SQLite fájl elérési útja
    private $conn;

    public function getConnection() {
        if ($this->conn === null) {
            try {
                $this->conn = new PDO("sqlite:" . $this->db_file);
                $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            } catch (PDOException $e) {
                die("SQLite kapcsolat hiba: " . $e->getMessage());
            }
        }
        return $this->conn;
    }
}


