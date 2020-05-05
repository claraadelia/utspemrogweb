// bikin 3variabel untuk memeanggil dulu
// 1. express untuk memanggil librari express js
// 2. bodyparser untuk memanggil library yang namanya bodyparser
// 3. app ini digunakan untuk memanggil fungsi secara global express js
const  express = require('express');
const bodyParser = require("body-parser");
const app = express();

//parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log(`Server started on port`);
});

