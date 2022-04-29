const express = require('express')
const app = express();
app.get('/home', (request, response) => {
    response.send({data: 'Hi Testing'})
});
const PORT = process.env.PORT || 5001
app.listen(PORT)