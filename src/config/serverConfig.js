const dotenv=require(`dotenv`);
dotenv.config();
module.exports={
    // create an express object
    PORT:process.env.PORT
}