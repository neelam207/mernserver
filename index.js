const express = require('express')
const app = express();
app.get('/home', (request, response) => {
    response.send({data: {
        "message": "hello there",
        code: 200
    }})
});
app.get('/list', (request, response) => {
    response.send({data: [1,2,3,4,5]})
});
const PORT = process.env.PORT || 5001
app.listen(PORT)