const allowedCors = [
    "https://pindie-app.nomoredomainswork.ru",
    "http://localhost:3000",
    "https://server.nomoredomainswork.ru"
];

const cors = (req, res, next) => {
    const {origin} = req.headers;
    if (allowedCors.includes(origin)) {
        res.header("Access-Control-Allow-Origin", origin);
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
        res.header("Access-Control-Allow-Credentials", true);
    }

    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
};

module.exports = {cors};

