const {Flight}=require('../models/index');
const {Op}=require('sequelize');

class FlightRepository{
    #createFilter(data){//for private member function using hash 
        let filter={};
        if(data.arrivalAirportId){
            filter.arrivalAirportId=data.arrivalAirportId;
        }
        if(data.deaprtureAirportId){
            filter.deaprtureAirportId=data.deaprtureAirportId;
        }
        // if(data.minPrice && data.maxPrice){
        //     Object.assign(filter,{
        //         [Op.and]:[
        //             {price:{[Op.lte]:data.maxPrice}},
        //             {price:{[Op.gte]:data.minPrice}}
        //         ]
        //     })
        // }
        let priceFilter=[]
        if(data.minPrice){
            // Object.assign(filter,{price:{[Op.gte]:data.minPrice}});
            priceFilter.push({price:{[Op.gte]:data.minPrice}});
        }
        if(data.maxPrice){
            // Object.assign(filter,{price:{[Op.lte]:data.maxPrice}});
            priceFilter.push({price:{[Op.gte]:data.maxPrice}});
        }
        Object.assign(filter,{[Op.and]:priceFilter});
        return filter;
    }
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
async getFlight(FlightId){
    try{
        
        const flight = await Flight.findByPk(FlightId);
        return flight;
    }
    catch(error){
        console.log("something went wrong in the flight-repository layer");
        throw{error};
    }
}
async getAllFlight(filter){
    try{
        const filterObject=this.#createFilter(filter);
        const flight = await Flight.findAll({
            where:filterObject
        });
        return flight;
    }
    catch(error){
        console.log("something went wrong in the flight-repository layer");
        throw{error};
    }
}
}
module.exports= FlightRepository;