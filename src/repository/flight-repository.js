const {Flight}=require('../models/index');

class FlightRepository{
    async createFlight(data){
    try{
        console.log(data);
        const flight=await Flight.create(data);
        return flight;

    }
    catch(error){
        console.log("something went wrong in the city repository layer");
        // console.log(error);
        throw{error};
    }
}
}
module.exports= FlightRepository;