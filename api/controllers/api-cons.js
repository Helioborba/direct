import UserObject from "../models/mysql.js";

// Novelty function
function sleep(ms) {
    return new Promise( (resolve) => {
      setTimeout(resolve, ms);
    });
}

// controls
export async function postNewUser(req, res, next) { 
    const data = req.body.data;
    console.log("data received: ", data);

    // Query stage
    const User = new UserObject(data.username, data.email, data.password);
    User.addUser()
    .then( (data) => {
        res.send({ message: 'Added Successfully'});
    })
    .catch( err => console.log(err));
}

export async function postFindUser(req, res, next) { 
    const data = req.body.data;
    console.log("data: ", data);

    // Query stage
    UserObject.findUser(data.username, data.password)
    .then( (data) => {
        if( data[0] === undefined ) {
            res.send({ message: 'Login Failed', error: true});
        } else {
            if(data[0][0]?.username) {
                res.send({ message: 'Login Success', error: false});
            } else {
                res.send({ message: 'Login Failed', error: true});
            }
        }
    })
    .catch( err => console.log(err) );
}
