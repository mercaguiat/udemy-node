const http = require('http');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/'){
        res.write('<html>');
        res.write('<head><title>Assignment</title></head>');
        //res.write('<body><h1>hello</h1></body>');
        res.write(
        '<body><form action="/create-user" method="POST">Username: <input type="text" name="username"> <button type="submit">Submit</button></button></form></body>'
        )
        res.write('</html>');
        return res.end();
    }
    if (url ==='/create-user' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        })
        return req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);
            res.statusCode = 302; // Temporary redirect
            res.setHeader('Location', '/'); // Redirect location
            return res.end();
        })
    }

    if (url === "/users"){
        res.write('<html>');
        res.write('<head><title>Assignment</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>')
        res.write('</html>');
        return res.end();
    }
}

exports.handler = requestHandler;