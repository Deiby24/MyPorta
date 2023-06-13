import React from "react";
import { ExpertiseData } from "./ExpertiseData";

const images = require.context('../../src/img', true)
export function Expertise() {
    return(
        <div className="w-full" style={{height:"600px"}}>
            
            <div className="containerExpertise absolute">
                <div className="containerCardExpertise">
                    {ExpertiseData.map(items=>(
                        <a  className="flex flex-col items-center mt-16 border  rounded-lg shadow md:flex-row md:max-w-xl  border-gray-500 bg-gray-700 hover:bg-gray-800">
                            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={images(items.image)} alt=""/>
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{items.name}</h5>
                                <p className="mb-3 font-normal text-gray-400">{items.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
           
        </div>
    )
}