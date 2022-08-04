// imports
import express, { urlencoded, static as stat, json } from "express";
import { join } from 'path';
import cors from 'cors';
import path from 'path';
import WebSocket, { WebSocketServer } from 'ws'

// NÃO DEVE SER UTILIZADA EM PRODUÇÃO
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

// Rotas (API-Endpoints)
import apiCons from './routes/api-cons.js';

// Pagina 404
// import { page404 } from './controllers/error.js';

// Colocando algumas variáveis importantes
const app = express(); // Principal para funcionar o node basicamente
const __dirname = path.resolve(); // Dirname parece não existir pré-definido usando ES6 Import .js, por isso tem q ser definido

// Express
app.use(json({limit: '20mb'}));
app.use(urlencoded({extended: true, limit: '20mb'})); //body-parser está obsoleto, utilizar urlenconded!
app.use(stat(join(__dirname,'public')));


// CORS para HTTP request não terem erro
app.use(cors());

// Endpoint e handler de erro 404
app.use('/sys', apiCons);
// app.use(page404); < Vai causar erro de não haver template engine


// Conexão básica do servidor
const port = process.env.PORT || 9000;
const expressServer = app.listen(port, () => {
    console.log("Port online");
});

// Apenas para visualizar pelo browser
// const sv = new WebSocket("ws://localhost:5000/ws")

// Servidor websocket no port 8080 (cuidado, os dois ports estão rodando)
const wsServer = new WebSocketServer({ 
    port: 8080
});

// O que o websocket deve fazer quando receber uma mensagem
wsServer.on("connection", function(ws) {    
    ws.on("message", function(msg) {       
        wsServer.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) { 
              client.send(msg.toString());
              console.log('received message',msg.toString());
            }
        })
    })
})

// Utilizado para a checagem de conexão
expressServer.on('upgrade', async function upgrade(request, socket, head) {     // Utilizado para fazer upgrade da conexão para websocket 

    // aceita metade das requests; em caso de rejeição faz o reload do navegador
    
    if(Math.random() > 0.5){
        return socket.end("HTTP/1.1 401 Unauthorized\r\n", "ascii") // Fecha a conexão caso seja rejeitado
    }
    
    // Avisa que a conexão foi efetivada
    wsServer.handleUpgrade(request, socket, head, function done(ws) {
      wsServer.emit('connection', ws, request);
    });
});