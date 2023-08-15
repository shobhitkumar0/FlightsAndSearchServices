const {Airplane}=require ('../models/index');

class AirplaneRepository{
    async getAirplane(id){
        try{   
                const airplane = await 
                // Airplane.findByPk(id);
                Airplane.findOne({
                    where: {
                      id: id
                    }
                  });
               
                return airplane;
        }
        catch(error){
            console.log(error);
            console.log("Something went wrong in the aiplane repository layer");
            throw("error");
        }
    }
}


module.exports=AirplaneRepository;