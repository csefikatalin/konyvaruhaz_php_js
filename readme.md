# PHP alapú szerver végpontokkal, JS fetch kérésekkel

## Backend

### Adatbázis

**database/Database.php** - Adatbáziskapcsolat konfigurálása és létrehozása 

**data/books.db** - Az SQLite adatbázis 

**database/factory.php** - A tábla létrehozása és feltöltés adatokkal

### A Book tábla adatainak elérése

**Book.php** - Az összes könyv lekérése
**BookController.php** - A get, post, delete végpontokhoz tartozó HTTP kérések kezelése 

### Végpontok kezelése

A végpontok kezelése a **books_endpoints.php** fájlban történik. 

## PHP szerver beállítása

1. Lépj be a backend mappába
2. A terminálba írd az alábbi utasításokat: 

**php /database/factory.php** - adatbázis feltöltése adatokkal
**php -S localhost:8000** - Apache szerver indítása

## Végpontok

**get http://localhost:8000/books_endpoint.php** - az összes könyv lekérdezése az adatbázis konyv táblájából
**post http://localhost:8000/books_endpoint.php** - egy könyv eltárolása a konyv táblában, visszaadja az eltárolt könyvet az új id-vel
**delete http://localhost:8000/books_endpoint.php/2** - 2-es id-jű könyv törlése az adatbázisból

# Frontend

**Modell.js** - asszinkron fetch kérések indítása get, post és delete HTTP kérések
**index.js** - a karmester - ő kezeli a view kéréseit a modell felé. Feliratkozik a View-k eseményére és továbbítja a krést a modell felé. Lehetne külön osztály is. 

**admin_view/AdminTermekek.js** - a Termekek lista kezelése, az AdminTermek osztály példányosítása
**admin_view/AdminTermek.js** - Egyetlen termék megjelenítésére szolgáló osztály
**admin_view/Urlap.js** - Új adat felvitelére szolgáló űrlap osztály










