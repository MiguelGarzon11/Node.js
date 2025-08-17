// const ex = require('express');
const http = require('node:http');

const processRequest = (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    console.log('Entro a la página.')
    res.statusCode = 500
    res.end('<h1>Mi novia es hermosa</>')
}

const server = http.createServer(processRequest)

server.listen(1234, () => {
    console.log('Server listening on port http://localhost:1234');
})