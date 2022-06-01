import React from 'react';
import GeneralButton from '../Buttons/GeneralButton';
import Router from 'next/router'
import Link from 'next/link';
function presentationCard(props) {
    return (
    <div className=' text-black text-center m-auto px-10 '> 
        <div className='font-extrabold text-blue-500 sm:text-3xl text-2xl pb-6'>
          Voyager avec nous
        </div>
        <div className='sm:text-xl md:text-2xl text-lg font-medium text-justify pb-8 '>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat purus vel nisi varius varius. Cras at mi eu eros efficitur sagittis eu nec metus. Mauris placerat porttitor leo. Aliquam neque ligula, sodales sed neque vitae, cursus elementumffdf 
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <Link href={'/Services'}>
            <GeneralButton 
            title="Decouvir"
            font="font-bold"
            size="text-xl"
            textColor="text-cyan-500"
            borderColor="border-cyan-500"
            hoverBackgroundColor="hover:bg-cyan-500"
            />
          </Link>
          <GeneralButton 
          title="Contact"
          font="font-bold"
          size="text-xl"
          textColor="text-cyan-500"
          borderColor="border-cyan-500"
          hoverBackgroundColor="hover:bg-cyan-500" 
          />
        </div>
        
    </div>
    );
}

export default presentationCard;