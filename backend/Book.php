<?php
/* a könyvlekérdező soztály */
class Book {
    private $conn;

    public function __construct(PDO $db) {
        /* beállítjuk az adatbázis kapcsolatot  */
        $this->conn = $db;
    }

    public function getAllBooks() {
        $stmt = $this->conn->prepare("SELECT id, title, author FROM books");
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
