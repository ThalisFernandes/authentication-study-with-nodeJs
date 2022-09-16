const auth = require('../auth');

const clientsRoutes = (app, auth = null)=>{
    app.route('/clientes/:id?')
    .get()
    .post((req, res)=>{
        let token = req.headers.authorization;
        console.log(req.headers.authorization);
        if(token) {
          try {
            let token = isValidAToken(token);
              res.status(200).send({"Token":token});
          } catch (error) {
             res.status(400).send({'Error':error});
          }
        } else {
            res.status(401).send('Your header request is missing the Authorization token!!!');
        }
        
    })
    .put()
    .delete()
}

module.exports = clientsRoutes;