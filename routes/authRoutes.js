const passport = require('passport')

module.exports = (app) => {
app.get('https://shielded-fjord-58470.herokuapp.com/list', (request, response) => {
    response.send({data: [1,2,3,4,5]})
});
// app.get('/auth/google', passport.authenticate("google", {
//     scope: ['profile', 'email']
// }))
// app.get('/auth/google/callback', passport.authenticate("google"))
// app.get('/api/current_user', (request, response) => {
//     response.send(request.user)
// });
// app.get('/api/logout', (request, response) => {
//     request.logout()
//     response.send(request.user)
// });
}