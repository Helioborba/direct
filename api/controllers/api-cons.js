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
    const User = new UserObject(data.username, data.email, data.password);
    User
    .addUser()
    .then( (data) => {
        res.send({ message: 'Added Successfully'});
    })
    .catch( err => console.log(err));
}


export async function getUserData(req, res, next) { // Pega todos os valores na linha
    // This sleep is just for checking the loading page in the app
    // await sleep(2000); // dont forget to remove this later!
    
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    UserObject
    .allValues()
    .then( (data) => {
        data.rows.sort( (a, b) => a.id - b.id) // takes 2 rows per sort, then check its ID for sorting 
        res.send( {posts:data.rows});
    })
    .catch( err => console.log(err));
}
