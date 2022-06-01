import React, {useState} from 'react';
import istambol from "../../public/istambol.webp"
import Articles from '../../components/Cards/Articles';
function Index(props) {
    const [activeFilter , setClickFilter] = useState(false)
    return (
        <div className='py-4 bg-gray-100'>
            <div className='sm:grid sm:py-1 px-16 grid-cols-2 gap-6'>
                <div className='text-right'>
                <div className="flex justify-center">
                    <div className="mb-3 xl:w-96">
                        <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                        <input type="search" className="form-control relative text-center placeholder-white focus:placeholder-gray-500 placeholder:font-bold  flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-bold text-white bg-cyan-500 bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-black focus:bg-cyan-100 focus:border-blue-600 focus:outline-none focus:text-left" placeholder="Recherche" aria-label="Search" aria-describedby="button-addon2"/>                        </div>
                    </div>                    
                </div>
                </div>
                <div className='text-center flex justify-center mb-3 xl:w-96'>
                    <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                        
                        <div 
                        className="relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-bold text-white bg-cyan-500 bg-clip-padding border border-solid border-gray-300 rounded m-0" >
                            {activeFilter 
                            ? 
                            <div>
                                
                                <div className="grid grid-cols-3">
                                    <div className='hover:bg-white hover:text-cyan-500 rounded cursor-pointer'>Algérie</div>
                                    <div className='hover:bg-white hover:text-cyan-500 rounded cursor-pointer'>Mekka</div>
                                    <div className='hover:bg-white hover:text-cyan-500 rounded cursor-pointer'>international</div>
                                </div> 
                                
                            </div>
                            : 
                            <div 
                            className='grid grid-cols-3 '
                            onMouseLeave={()=>setClickFilter( ()=>false)}
                            onMouseEnter={()=>setClickFilter( ()=>true)}>
                                <div className='col-span-3'>Filtres</div> 
                                
                            </div>
                                }
                        </div>
                    </div>
                </div>
                
                
            </div>
            <div className='sm:grid sm:py-2 grid-cols-4 gap-3 text-center p-10'>
                <Articles 
                picture={istambol}
                title = "رحلة إلى إسطمبول"
                description="رحلة سياحية و ثقافية إلى تركيا لدراسة اللغة الإنجليزية أو اللغة التركية"
                id="54"
                />
                
            </div>
        </div>
    );
}

export default Index;
