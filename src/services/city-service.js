const  {CityRepository} =require ('../repository/index');

class CityService{
    constructor(){
        this.CityRepository=new CityRepository();
    }
    async createCity(data){
        try{
            const city =await this.CityRepository.CreateCity(data);
            return city;
        }
        catch(error){
            console.log("something wrong at service layer");
            throw{error};
        }
    }
    async deleteCity(cityId){
        try{const response=await this.CityRepository.deleteCity(cityId);
        return response;
    }
        catch(error){
            console.log("something worng at service layer");
            console.log(error);
            throw{error};
        }
    }
    async updateCity(cityId,data){
        try{
            const city=await this.CityRepository.updateCity(cityId,data);
             return city;
        }
        catch(error){
            console.log("something worng at service layer");
            throw{error};
        }
    }
    async getCity(cityId){
        try{
            const city=await this.CityRepository.getCity(cityId);
            return city;
        }
        catch(error){
            console.log("something worng at service layer");
            throw{error};
        }
    }
    async getAllCities(filter){
        try {
            const cities=await this.CityRepository.getAllCities({name :filter.name});
            return cities;
            
        } catch(error){
            console.log("something worng at service layer");
            throw{error};
        }
    }
}

module.exports=CityService;