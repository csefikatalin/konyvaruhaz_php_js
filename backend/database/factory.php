<?php
/* Az adatbáziskapcsoalt létrehozása */
$db = new PDO("sqlite:" . __DIR__ . "/../data/books.db");
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$db->exec("
    CREATE TABLE IF NOT EXISTS books (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        author TEXT NOT NULL
    );

    INSERT INTO books (title, author) VALUES
    ('1984', 'George Orwell'),
    ('A Pál utcai fiúk', 'Molnár Ferenc');
");

echo "Adatbázis létrehozva és feltöltve.";

