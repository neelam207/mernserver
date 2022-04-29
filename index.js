const express = require('express')
const app = express();
app.get('/home', (request, response) => {
    response.send({data: {
        "message": "hello there",
        code: 200
    }})
});
const PORT = process.env.PORT || 5001
app.listen(PORT)