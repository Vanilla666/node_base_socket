const WebSocket = require('ws'); //創建一個WebSocket的服務器

const WebSocketServer = WebSocket.Server; //引用Server類
 
const wss = new WebSocketServer({ // 實例化WebSocketServer
    port: 3000 //埠號設3000 3000端口上打開了一個WebSocket Server
});
// 有WebSocket請求接入
wss.on('connection', function (ws) { // 就觸發連接WebSocket服務 回調函數會傳入一個WebSocket的實例
    console.log(`[SERVER] serve端開WebSocket服務 connection()`); //顯示在cmd第一行

    ws.on('message', function (message) { //server端 接收到 client端訊息 函數裡 message = client端送過來的訊息

        console.log(`[SERVER] Received: ${message}`); //接收到client端的訊息並顯示在cmd

        // setTimeout(() => { //每秒調用匿名函數
            ws.send("server response:"+message); //伺服器收到client訊息後 把訊息丟回 client端
        // }, 500);

    })
    ws.on('error',function(err){
        console.log(`[SERVER] error: 伺服器發生錯誤 ${err}`); //伺服器發生錯誤顯示錯誤代碼
    })
    ws.on('open',() => {
        console.log(`[SERVER] open: 伺服器開啟`); //接收到客戶端要求開啟連線CMD顯示
    })
    ws.on('close',() => {
        console.log(`[SERVER] close: 伺服器關閉`); //接收到客戶端要求關閉連線CMD顯示
    })

});

console.log('ws server started at port 3000...'); 

// client test:

// let count = 0;

// let ws = new WebSocket('ws://localhost:3000/ws/chat');//接到serve端

// ws.on('open', function () { //一開始打開連接時要調用的事件偵聽器
//     console.log(`[CLIENT] client端連接到serve open()`); //cmd顯示
//     ws.send('Hello!'); //發送訊息
// });

// ws.on('message', function (message) { //從服務器收到消息時要調用的事件偵聽器
//     console.log(`[CLIENT] Received: ${message}`); //client端接收serve端訊息
//     count++; //變數++
//     if (count > 4) {
//         ws.send('Goodbye!'); //如果 count > 6
//         ws.close(); //關閉連線
//     } else {
//         setTimeout(() => { //每秒調用匿名函數
//             ws.send(`Hello, I'm Mr No.${count}!`); //client端 發送訊息給 serve端
//         }, 500);
//     }
// });
