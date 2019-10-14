//http
const http = require('http');
//host
const hostname = '127.0.0.1';
//port
const port = 3000;
//server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(drivers));
  });

server.listen(port, hostname, ()=>{
    console.log(`server running at http://${hostname}:${port}`);
});

// drivers
const drivers = [
    {id: 1,
    'Name':'Kalyango John',
    'Plate number': 'UBD 001',
    'Gender': 'Male',
    'lat': 24.090294249,
    'long': 2.3098239293,
    },
    {id: 2,
    'Name':'Bets Peter',
    'Plate number': 'UBD 002',
    'Gender': 'Female male',
    'lat': 98.2308283028380,
    'long': 90.83028039293,
    },
    
]
