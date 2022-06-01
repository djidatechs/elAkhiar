import React from 'react';
import Router from 'next/router'
import Image from 'next/image'
function feed({picture , title , date , description , article }) {
    return (
    <>
	<div className="container w-full md:max-w-3xl mx-auto ">
		
		<div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal" >
			<div className="font-sans">
				<p className="text-base md:text-sm text-cyan-500 font-bold">&lt; <span  onClick={()=>Router.push('/Articles/')} className=" cursor-pointer text-base md:text-sm text-cyan-500 font-bold no-underline hover:underline">Articles</span></p>
						<h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">{title}</h1>
						<p className="mb-3 text-sm md:text-base font-normal text-gray-600">{date}</p>
			</div>
			<Image alt='' src={picture} className="rounded-lg max-h-52 max-w-2xl"/>
            <blockquote className="border-l-4 border-cyan-500 italic my-8 pl-8 md:pl-12">{description}</blockquote>
			<p className="py-6">
				{article}
			</p>
		</div>
		<hr className="border-b-2 border-gray-400 mb-8 mx-4"></hr>
		
		<div className="font-sans flex justify-between content-center px-4 pb-12">
			<div className="text-left">
				<span className="text-xs md:text-sm font-normal text-gray-600">&lt; Previous Post</span><br></br>
				<p><a href="#" className="break-normal text-base md:text-sm text-cyan-500 font-bold no-underline hover:underline">Blog title</a></p>
			</div>
			<div className="text-right">
				<span className="text-xs md:text-sm font-normal text-gray-600">Next Post &gt;</span><br></br>
				<p><a href="#" className="break-normal text-base md:text-sm text-cyan-500 font-bold no-underline hover:underline">Blog title</a></p>
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

export default feed;