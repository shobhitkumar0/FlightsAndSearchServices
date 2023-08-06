const {City}=require('../models/index');

class CityRepository{
    async CreateCity({name}){
        try{
            const city=await City.create({name});
            return city;
        }
        catch(error){
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
            throw{error}
        }
    }
}
module.exports=CityRepository;