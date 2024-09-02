import {createServer} from 'node:http';
let PORT = 3000;
let myServer = createServer((req,res) => {
  let url = req.url;
  console.log(req.url);
  if(url === '/')
    {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Home Page');
  }
  else if(url ==='/about') {
    res.writeHead(200,{'Content-Type' : 'text/plain'})
    res.end('About Page');
  }
  else if(url ==='/contact') {
    res.writeHead(200,{'Content-Type' : 'text/plain'})
    res.end('Contact Page');
  }
  else if(url ==='/ayaz') {
    res.writeHead(200,{'Content-Type' : 'text/plain'})
    res.end('Ayaz Page')
  }
  else{
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('404 Not Found');
  }
})


myServer.listen(PORT,() => {
    console.log(`http://localhost:${PORT}/`);
});



// HTTP Methods
/* 
GET : retrieve data from server
POST : submit data to server
DELETE : delete data
PUT : update data
*/

// HTTP Status Code

/* 
1** : Informational
2** : Success
3** : Redirectional
4** : Client Errors
5** : Server Errors
*/