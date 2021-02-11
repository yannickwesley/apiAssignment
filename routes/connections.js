let Connection = require('../model/connection');

// Récupérer tous les assignments (GET)
function getConnections(req, res){
    Connection.find((err, connections) => {
        if(err){
            res.send(err)
        }

        res.send(connections);
    });
}




module.exports = { getConnections};
