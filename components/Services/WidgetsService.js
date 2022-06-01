import React from 'react';
import Image from 'next/image'
import Router from 'next/router'
import { DateRange, Money, Place, Timelapse } from '@mui/icons-material';
const Filter = (tag) => (console.log('Filter ('+tag+')'))
function WidgetsService({picture , title , price, disponible , date , place, duration, id}) {
    return (
        
        <>
        

        <div className=" parent mx-auto overflow-hidden cursor-pointer  " onClick={()=>Router.push(`/Services/${id}`)} >      
                    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-500 ">
                    <div className={`w-full ${disponible ? "bg-green-500" : "bg-red-500"}  px-1 py-1 text-sm font-semibold`}>
                            <span className=" text-white">{disponible ? "disponible" : "indisponible"}</span>
                    </div>


                    <div className="relative overflow-hidden">
                        <Image width="300px" height="160px" src={picture}  alt="Mountain" className='hover:scale-125 transition duration-300' />
                        <div className="group absolute w-full h-full mx-auto top-0 text-white bg-black/60 hover:bg-transparent transition duration-300 text-xs text-center ">
                            <div className='block group-hover:hidden transition duration-300 pt-2 ml-3 '>
                                <div className="font-medium text-white-800 text-sm text-left"><Money/> {price} {price&&"DA"}</div>
                                <div className="font-medium text-white-800 text-sm text-left"><DateRange/> {date}</div>
                                <div className="font-medium text-white-800 text-sm text-left"><Timelapse/> {duration}</div>
                                <div className="font-medium text-white-800 text-sm text-left"><Place/> {place}</div>
                            </div>
                        </div>
                    </div>


                    <div className="w-full bg-cyan-500 rounded px-1 py-1 text-sm text-center font-semibold cursor-pointer hover:bg-cyan-800 transition duration-300 ">
                            <span className=" text-white">{title}</span>
                        </div>
                    </div>
                </div>
                </>
    );
}

export default WidgetsService;