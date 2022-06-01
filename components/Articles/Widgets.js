import React from 'react';
import Router from 'next/router'
import Image from 'next/image'
function widgets({picture,title,description,id}) {
    return (
        
        <div className="w-full mx-auto bg-gray-600 hover:bg-cyan-600 transition duration-300 rounded-lg  mt-3">
            <div className='cursor-pointer' >
                <Image className="rounded-t-lg" src={picture} />
            </div>
            <div className="p-5">
                <div className='cursor-pointer' >
                    <h5 className="mb-2 text-md font-bold tracking-tight text-white">{title}</h5>
                </div>
                <p className="mb-3 font-normal text-white">{description}</p>
                <div onClick={()=>Router.push(`/Articles/${id}`)}  className=" cursor-pointer inline-flex items-center py-2 px-3 text-sm font-medium text-center text-gray-600 hover:text-white  rounded-lg  focus:ring-4 focus:outline-none  bg-white hover:bg-cyan-500 transition dura">                            
                    Lire plus
                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </div>
            </div>
        </div>
    
    );
    }

export default widgets;