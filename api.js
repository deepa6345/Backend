const http = require("http");
let data= require('./data');
http.createServer(function (req, res) {
    res.setHeader("Content-Type", "application/json"); // Correct method name and header value

    if (req.url === "/") { // Use triple equals for comparison
        res.write("Home");
    } else if (req.url === "/login") { // Use triple equals, not assignment
        res.write(JSON.stringify(data.user));
    }

    res.end();
}).listen(8080);
