const {City}=require('../models/index');

class CityRepository{
    async CreateCity({name}){
        try{
            const city=await City.create({name});
            return city;
        }
        catch(error){
            console.log("something went wrong in the city repository layer");
            throw{error}
        }
    }
    async deleteCity({Cityid}){
        try{
            await City.destroy({
                where:{
                    id:Cityid
                }
            });
        }
        catch(error){
            console.log("something went wrong in the city repository layer");
            throw{error}
        }
    }
    async updateCity(CityId,data){
        try{
            const city =await City.update(data,{
                where:{
                    id:CityId
                }
            });
            return city;

        }
        catch(error){
            console.log("something went wrong in the city repository layer");
            throw{error};
        }

    }
    async getCity(CityId){
        try{
            const city = await City.findByPk(CityId);
            return city;
        }
        catch(error){
            console.log("something went wrong in the city repository layer");
            throw{error};
        }
    }
}
module.exports=CityRepository; 