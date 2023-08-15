const repository = require('../repository');
const {FlightRepository,AirplaneRepository}=require('../repository/index');
const {compareTime}=require('../utils/helper');

class FlightService{
    constructor(){
         this.airplaneRepository=new AirplaneRepository();
         this.flightrepository=new FlightRepository();
    }
    async createFlight(data){
        try{
            if(compareTime(data.arrivalTime,data.departureTime)){
                throw{error:'Arrival time can not be less than departure time'};
            }
            const airplane=await this.airplaneRepository.getAirplane(data.airplaneId);//fetch the airplane
            // console.log(airplane.capacity);
            const flight= await this.flightrepository.createFlight({//add the capacity
                ...data,totalSeats:airplane.capacity
            });
            return flight;
           
        }
        catch(error){
            console.log(error);
            console.log("error occured at flight service layer");
            throw (error);
        }
       
    }
    async getFlightData(){
        //todo
    }
}
module.exports=FlightService;