import React from 'react';
import Image from 'next/image'
import ballon from '../../public/ballon.png'
function travelTypeCard({picture , title}) {
    return (
        <>
       <div className=' cursor-pointer text-center sm:pt-0 pt-12 rounded-lg justify-center items-center transition duration-300 hover:scale-y-110 focus:scale-110'>
       <div>
        <Image
            src={picture}
            alt="Picture of the author"
            width="400px"
            height="200px"
            className='rounded-3xl '
          />
        </div>
        <p className='font-bold text-xl text-cyan-700'>
          {title}
        </p>
        
       
      </div>
   
      </>
    );
}

export default travelTypeCard;