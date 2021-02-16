const https = require("https")
const port = process.env.PORT || 3000

https.createServer((req,res)=>{
	res.writeHead(200);
	res.end('hello world\n')
}).listen(port)