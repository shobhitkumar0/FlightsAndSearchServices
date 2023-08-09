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
    async deleteCity(Cityid){
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
            // the below approach also work but will not return updated object
            // const city =await City.update(data,{
            //     where:{
            //         id:CityId
            //     },
                
            // });
            //for getting updated data in mysql we use below query
            const city =await City.findByPk(CityId);
            city.name=data.name;
            await city.save();
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
    async getAllCities(filter){// can be empty
        try{
            
            if(filter.name){
                
                const cities=await City.findAll({
                    
                    // where: {
                    //     name: {
                    //         [Op.startsWith]: filter.name
                    //     }
                    // }
                    where: { name: 
                        { $like: filter.name+ '%' } 
                    
                        }
                });
                
                console.log("..............reached here");
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        }
        catch(error){
            console.log("something went wrong in the city repository layer");
            console.log(error);
            throw{error};
        }
    }
}
module.exports=CityRepository; 