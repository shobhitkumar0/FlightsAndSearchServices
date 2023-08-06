const express=require("express");
const bodyParser=require("body-parser");
const {PORT} =require('./config/serverConfig');
const CityRepository=require('./repository/city-repository');

const setupAndStartServer= async()=>{
    //create and express object
    const app=express();
   
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.listen(PORT,async()=>{
        console.log(`server started at ${PORT}`);
        const repo=new CityRepository();
        repo.CreateCity({name:"New Delhi"});
    
     
        

    });


}
setupAndStartServer();