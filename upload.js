let {http,path,fs,querystring,mulitiparty,url} = require("./modules/requireMo")
let upload = http.createServer((req,res)=>{
    let pathname = url.parse(req.url).pathname
    if(pathname !== "/upload"){
        res.write("pathname is not meet the required standards ")
        res.end()
        return false
    }
    
    req.on("data",(chunk)=>{
        console.log(chunk);
        res.write("gg")
        res.end()
    })
    req.on("end",()=>{})

}).listen(8088,()=>{
    console.log("Server is running on 8088 port!");
})