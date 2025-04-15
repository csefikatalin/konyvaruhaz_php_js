<?php
require_once __DIR__ . '/database/Database.php';

class BookController
{
    private $conn;

    public function __construct()
    {
        $db = new Database();
        $this->conn = $db->getConnection();
    }

    // GET kérés kezelése (Könyvek lekérdezése)
    public function getBooks()
    {
        $query = "SELECT id, title, author FROM books";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $books = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($books);
    }

    // POST kérés kezelése (Új könyv hozzáadása)
    public function addBook()
    {
        $data = json_decode(file_get_contents("php://input"));
        
        if (!empty($data->title) && !empty($data->author)) {
            try {
                $stmt = $this->conn->prepare("INSERT INTO books (title, author) VALUES (:title, :author)");
                $stmt->bindParam(":title", $data->title);
                $stmt->bindParam(":author", $data->author);
                $stmt->execute();
                echo json_encode([
                    "id" => $this->conn->lastInsertId(),
                    "title" => $data->title,
                    "author" => $data->author,
                ]);
            } catch (PDOException $e) {
                http_response_code(500);
                echo json_encode(["error" => "Hiba a könyv hozzáadásakor: " . $e->getMessage()]);
            }
        } else {
            http_response_code(400);
            echo json_encode(["error" => "A cím és a szerző kötelező!"]);
        }
    }

    // DELETE kérés – könyv törlése ID alapján
    public function deleteBook()
    {
        // Az URL-t az $_SERVER['REQUEST_URI']-ből kinyerheted.
        $uri = $_SERVER['REQUEST_URI'];
        $uriParts = explode('/', $uri); // Például [ "", "books.php", "3" ]
        $id = end($uriParts); // Kivesszük az utolsó elemet, ami az ID

        if (!is_numeric($id)) {
            http_response_code(400);
            echo json_encode(["error" => "Érvénytelen ID"]);
            return;
        }

        $id = intval($id); // Az ID integer típussá konvertálása
        $stmt = $this->conn->prepare("DELETE FROM books WHERE id = :id");
        $stmt->bindParam(":id", $id);

        if ($stmt->execute()) {
            if ($stmt->rowCount() > 0) {
                echo json_encode(["message" => "Könyv sikeresen törölve."]);
            } else {
                http_response_code(404);
                echo json_encode(["error" => "Nincs ilyen azonosítójú könyv."]);
            }
        } else {
            http_response_code(500);
            echo json_encode(["error" => "Hiba történt a törlés során."]);
        }
    }
}
