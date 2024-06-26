const fs = require('fs');
const http = require('http');
const https = require('https');
const path = require('path');

const jsonServer = require('json-server');

// const options = {
//     key: fs.readFileSync(
//         path.resolve(__dirname, '/etc/letsencrypt/live/learn-frontend-easy.ru/privkey.pem'),
//     ),
//     cert: fs.readFileSync(
//         path.resolve(__dirname, '/etc/letsencrypt/live/learn-frontend-easy.ru/fullchain.pem'),
//     ),
// };

const options = {
    key: fs.readFileSync(
        path.resolve(__dirname, 'key.pem'),
    ),
    cert: fs.readFileSync(
        path.resolve(__dirname, 'cert.pem'),
    ),
};

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });
    next();
});

// Эндпоинт для логина
server.post('/login', (req, res) => {
    try {
        const { username, password } = req.body;
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
        const { users = [] } = db;

        const userFromBd = users.find(
            (user) => user.username === username && user.password === password,
        );

        if (userFromBd) {
            return res.json(userFromBd);
        }

        return res.status(403).json({ message: 'User not found' });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

// проверяем, авторизован ли пользователь
// eslint-disable-next-line
server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'AUTH ERROR' });
    }

    next();
});

server.use(router);

// запуск сервера
const httpsServer = https.createServer(options, server);
const httpServer = http.createServer(server);

httpsServer.listen(8443, () => {
    console.log('server is running on 8443 port');
});

httpServer.listen(8000, () => {
    console.log('server is running on 8000 port');
});
