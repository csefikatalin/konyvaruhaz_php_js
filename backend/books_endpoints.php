<?php
require_once __DIR__ . '/BookController.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
/* Az OPTIONS azért kell, hogy a post kéréseket engedélyezzük. 
A POST, PUT, DELETE stb. típusú kérések előtt a böngésző automatikusan küld egy OPTIONS kérést, 
hogy megnézze, a szerver engedi-e az ilyen típusú kapcsolatot.

Ha az OPTION kérések esetén a  válasz nem HTTP 200,  a böngésző eldobja a POST-ot.
*/
header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

// Ha ez egy preflight OPTIONS kérés, válaszolj 200-zal
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Kérdés típusa alapján a megfelelő függvény meghívása
// Kérés típusa alapján a megfelelő művelet
// A controller példányosítása
$controller = new BookController();
// Kérés típusa alapján a megfelelő függvény meghívása
switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        $controller->getBooks();
        break;
    case 'POST':
        $controller->addBook();
        break;
    case 'DELETE':
        $controller->deleteBook();
        break;
    default:
        http_response_code(405);
        echo json_encode(["error" => "Nem támogatott HTTP metódus."]);
        break;
}