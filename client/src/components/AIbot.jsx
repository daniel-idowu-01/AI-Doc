import React from "react";
import { AiBot, Msg1, Msg2 } from '../assets/images';


function Aibot() {
    return(
        <div className="m-12 flex flex-col justify-items-center items-center">
            <div className="flex gap-6 justify-items-center items-center ">
                <img src={Msg1} alt="" className="md:object-scale-down" style={{ width: 160, height: 98 }}/>
                <img src={AiBot} alt="" style={{ width: 200, height: 400 }} className="md:object-scale-down" />
                <img src={Msg2} alt="" className="md:object-scale-down mt-20" style={{ width: 160, height: 98 }}/>
            </div>

            <div className="text-center">
                <p className="font-bold text-3xl my-6 text-[#0B63E5]">Get Health Advise 24/7</p>
                <p>Consult your favorite AI Doctor</p>
            </div>
        </div>
    )
}

export default Aibot