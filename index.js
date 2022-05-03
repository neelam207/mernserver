const express = require('express')
require('./service/passport')
const authRountes = require('./routes/authRoutes')
const app = express();
authRountes(app)

//client id 830849283125-cpdt17m05se7ak1cr0iefhr9c0jhh23v.apps.googleusercontent.com
//client secret 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
// app.get('/home', (request, response) => {
//     response.send({data: {
//         "message": "hello there",
//         code: 200
//     }})
// });

const PORT = process.env.PORT || 5001
app.listen(PORT)