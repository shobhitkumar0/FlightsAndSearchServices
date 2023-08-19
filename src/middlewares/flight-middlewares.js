const validateCreateFlight=(req,res,next)=>{
    if(!req.body.flightNumber||
        !req.body.airplaneId||
        !req.body.departureAirportId||
        !req.body.arrivalAirportId||
        !req.body.arrivalTime||
        !req.body.departureTime||
        !req.body.price
        ){
            console.log(req.body);
            /*flightNumber: 'Uk 635',
            airplaneId: '4',
            departureAirportId: '2',
            arrivalAirportId: '5',
            arrivalTime: '2023-01-29 04:33:12 ',
            departureTime: '2023-01-29 07:33:12',
            price: '6300',
            totalSeats: '300'*/
            return res.status(400).json({//400 for bad request
            data:{},
            success:false,
            message:'Invalid request bpdy for creating flight',
            err:'Missing mandatory request to craete a flight'
                });
        //if any of body param missing we come inside middleware
    }
    next();
}

module.exports={
    validateCreateFlight
}