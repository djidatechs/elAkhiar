import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Router from 'next/router'
import { DateRange, Money, Place, Timelapse } from '@mui/icons-material';
const Filter = (tag) => (console.log('Filter ('+tag+')'))
import jijel from '../../public/jijel.jpg'

function Services({ title , description , price, tags , disponible , date , place, duration, id , picture}) {    
   

    return (
        <div className=" group p-10 overflow-hidden cursor-pointer  " >      
                    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white ">
                        <div className={`w-full ${disponible ? "bg-green-500" : "bg-yellow-600"}  px-1 py-1 text-sm font-semibold`}>
                            <span className=" text-white">{disponible ? "disponible" : "indisponible"}</span>
                        </div>
                        <Image onClick={()=>Router.push(`/Services/${id}`)} src={picture} width="360px" height="180px"  alt="Mountain" className='group-hover:scale-125 transition duration-300' />
                        <div onClick={()=>Router.push(`/Services/${id}`)}  className="px-6 py-4 h-[260px] overflow-scroll scrollbar-hide">
                            <div className="font-bold text-cyan-600 sm:text-md lg:text-lg mb-2">{title}</div>
                            <div className='sm:grid grid-cols-2 grid-rows-2 sm:text-sm md:text-md '>
                                <div className="font-medium text-gray-800 text-sm text-left"><Money/> {price} {price&&"DA"}</div>
                                <div className="font-medium text-gray-800 text-sm text-left"><DateRange/> {date}</div>
                                <div className="font-medium text-gray-800 text-sm text-left"><Timelapse/> {duration}</div>
                                <div className="font-medium text-gray-800 text-sm text-left"><Place/> {place}</div>
                            </div>
                            
                            <p className="text-cyan-700 text-justify text-base mt-3">
                            { description.length < 140 ? description : description.substring(0, 140 - 3)+'...'}
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            {tags.split(',').map(((tag ,index)=>  <span key={"tag"+index} onClick={()=>Filter(tag)} className="inline-block  cursor-pointer hover:bg-cyan-800 hover:text-white transition duration-300  bg-cyan-200 rounded-full px-3 py-1 text-sm font-semibold text-cyan-700 mr-2 mb-2">#{tag}</span> ))}
                        </div>
                        <div 
                        onClick={()=>Router.push(`/Services/${id}`)}
                        className="w-full bg-cyan-500 rounded px-1 py-1 text-sm font-semibold cursor-pointer hover:bg-cyan-800 transition duration-300 ">
                            <span className=" text-white">Accéder</span>
                        </div>
                    </div>
        </div>
    );
}

export default Services;
