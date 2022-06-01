import React from 'react';
import Image from 'next/image'
import PresentationCard from '../components/Home/presentationCard';
import TravelTypeCard from '../components/Cards/TravelTypeCard';
//Images
import presentationImage from "../public/presentationImage.png"
import hajjUmrah from "../public/hajjUmrah.jpg"
import istambol from "../public/istambol.webp"
import jijel from "../public/jijel.jpg"

function Home(props) {
  return (
    <div className='sm:px-2 px-4'>
      {/**part one */}
      <div className='sm:grid grid-cols-2 gap-2 grid-rows-1'>
        <div className=' text-center'>
        <Image
            src={presentationImage}
            alt="Picture of the author"
            width="410px"
            height="410px"
          />
        </div>
        <PresentationCard/>
      </div>
      

      {/**part two */}
      <div className='sm:grid sm:py-2 grid-cols-3 gap-3 grid-rows-1'>
      <TravelTypeCard
      picture={jijel}
      title="Algérie"
      />
      <TravelTypeCard
      picture={hajjUmrah}
      title="الحج و العمرة"
      />
      <TravelTypeCard
      picture={istambol}
      title="International"
      />
      </div>


      
      
    </div>
  );
}

export default Home;