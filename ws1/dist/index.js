"use strict";
// import { WebSocketServer } from 'ws';
Object.defineProperty(exports, "__esModule", { value: true });
// const wss = new WebSocketServer({ port: 8080 });
// wss.on("connection",function(socket){
//   console.log("user connected");
//   socket.on("message",(e)=>{
//     if(e.toString() == "ping"){
//       socket.send("poooo");
//     }
//   })
// })
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
wss.on("connection", function (socket) {
    socket.on("message", (e) => {
        socket.send("lululu");
    });
});
