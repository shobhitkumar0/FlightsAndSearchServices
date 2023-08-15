const {FlightService}=require ('../services/index');

const flightService =new FlightService();

const create = async (req,res)=>{
    try {
        const flight =await flightService.createFlight(req.body);
        return res.status(201).json(
            {
                data:flight,
                success:true,
                message: 'Successfully created a flight',
                err:{}
            }
        )
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to create a flight',
            err:error
        })
    }
}
const getAll =async(req,res)=>{
    try {
        const response = await flightService.getAllFlightData(req.query);
        console.log(response);
        return res.status(200).json({
            data:response,
            success:true,
            err:{},
            message: 'Successfully fetched the flight'
            
        });
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to fetch all flight',
            err:error
        });
    }
}
module.exports={
 create,
 getAll
}