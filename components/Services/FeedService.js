import React from 'react';
import Router from 'next/router'
import Image from 'next/image'
import { DateRange, Money, Place, Timelapse } from '@mui/icons-material';
import Link from 'next/link';
function FeedService({picture , title , date , description , article , price, disponible , place, duration ,tags ,id }) {
    return (
    <>
	<div className="container w-full md:max-w-3xl mx-auto ">
		
		<div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal" >
			<div className="font-sans">
				<p className="text-base md:text-sm text-cyan-500 font-bold">&lt; <span  onClick={()=>Router.push('/Services/')} className=" cursor-pointer text-base md:text-sm text-cyan-500 font-bold no-underline hover:underline">Services</span></p>
						<h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">{title}</h1>
						{tags && tags.map(((tag,index) =>  <span key={"tag"+index}  className="inline-block  cursor-pointer hover:bg-cyan-800 hover:text-white transition duration-300  bg-cyan-200 rounded-full px-3 py-1 text-sm font-semibold text-cyan-700 mr-2 mb-2">#{tag}</span> ))}
						<p className="mb-3 text-sm md:text-base font-normal text-gray-600">{disponible ? 'desponible': 'indesponible'}</p>
			</div>
            <div className='sm:grid grid-cols-2 grid-rows-1 gap-2'>
                <Image alt='' src={picture} height={"288px"} width={"672px"}  className="rounded-lg max-h-52 max-w-2xl"/>

                <div className=''>
                    <blockquote className="border-l-4 border-cyan-500 italic my-8 pl-8 md:pl-12">{description}</blockquote>

                    <blockquote className="border-l-4 border-gray-700 italic my-8 pl-8 md:pl-12">
                        <div className="font-medium text-white-800 text-sm text-left"><Money/> {price} {price&&"DA"}</div>
                        <div className="font-medium text-white-800 text-sm text-left"><DateRange/> {date}</div>
                        <div className="font-medium text-white-800 text-sm text-left"><Timelapse/> {duration}</div>
                        <div className="font-medium text-white-800 text-sm text-left"><Place/> {place}</div>
                    </blockquote>
                </div>
            </div>

            
			<p className={`py-6 ${ifArabicStyle(article) && "text-right"} `}>
				{ ifArabicNoHashtage(article)}
			</p>
		</div>
		<hr className="border-b-2 border-gray-400 mb-8 mx-4"></hr>
		
		<div className="font-sans flex justify-between content-center px-4 pb-12">
			<div className="text-left">
				<Link href={`/Services/${parseInt(id)-1}`} >
					<span className="cursor-pointer text-xs md:text-sm text-blue-500 font-semibold ">&lt;service précedent</span>
				</Link>
				
				
			</div>
			<div className="text-right">
				<Link href={`/Services/${parseInt(id)+1}`} >
					<span className="cursor-pointer text-xs md:text-sm text-blue-500 font-semibold ">service suivant &gt;</span>
				</Link>
				
				
			</div>
		</div>


		

	</div>
	

	<footer className="bg-white border-t border-gray-400 shadow">
		<div className="container max-w-4xl mx-auto flex py-8">

			<div className="w-full mx-auto flex flex-wrap">
				<div className="flex w-full md:w-1/2 ">
					<div className="px-8">
						<h3 className="font-bold text-gray-900">About</h3>
						<p className="py-4 text-gray-600 text-sm">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel mi ut felis tempus commodo nec id erat. Suspendisse consectetur dapibus velit ut lacinia.
						</p>
					</div>
				</div>

				<div className="flex w-full md:w-1/2">
					<div className="px-8">
						<h3 className="font-bold text-gray-900">Social</h3>
						<ul className="list-reset items-center text-sm pt-3">
							<li>
								<a className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1" href="#">Add social link</a>
							</li>
							<li>
								<a className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1" href="#">Add social link</a>
							</li>
							<li>
								<a className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1" href="#">Add social link</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</footer>
    </>
    );
}

export default FeedService;



const ifArabicStyle = (text)=>{
	return ( text[0]==="#" )
 }
const ifArabicNoHashtage = (text)=>{
	if ( text[0]==="#" )
		return text.substring(1)
	return text
}