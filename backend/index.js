import express from 'express';
const app = express();
import cors from 'cors';
import {create, allUsers, find, login, update} from "./dal.js";


app.use(cors());

//Route for user account creation
app.get('/account/create/:name/:email/:password', function (req, res) {
    find(req.params.email).then((user) => {
        if(user.length > 0){
            console.log('This Email is already in use');
            res.send('This Email is already in use');
        } else {
            create(req.params.name,req.params.email,req.params.password).
                then((user) => {
                    console.log(user);
                    res.send(user);            
            });  
        }
    });              
});

app.get('/account/all', function (req, res){
    allUsers().then((docs)=>{
        console.log(docs);
        res.send(docs);
    });
});

//Route for Login user
app.get('/account/login/:email/:password', function(req, res){
    login(req.params.email, req.params.password).then((docs) => {
        if(docs){
            if(docs.password === req.params.password){
                res.send(docs); 
            } else {
                res.send('Incorrect Password');
            }
        } else {
            res.send('No user found');
        }
    })
});

app.get('/account/update/:email/:amount', function(req, res){

    let amount = Number (req.params.amount);
    update(req.params.email, amount).then((docs) => {
        console.log(docs);
        res.send(docs);
    });
});

app.listen(3000, () => {
    console.log('listening on port 3000');
})
