import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Services from '../../components/Cards/Services';
import {google} from 'googleapis'

export async function getServerSideProps ({query}) {

    const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly','https://www.googleapis.com/auth/drive','https://www.googleapis.com/auth/drive.metadata','https://www.googleapis.com/auth/drive.file'] });
    //get the sheets api 
    const sheets = google.sheets({ version: 'v4', auth });
    //get the valid data
    const range = `A1:I`; 
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID,
        range,
        valueRenderOption: "FORMULA",
    });
    const values = response?.data?.values
    if (values == undefined) return {
        redirect: {
          permanent: false,
          destination: '/Services'
        }
      }

    const drive = google.drive({ version: 'v3', auth})
    const q = `'${process.env.DRIVE_FOLDER_ID}' in parents and name contains  "_s" and name contains  "#" `
    const getIndex = (name) => name.substring(name.indexOf('_s') + 2, name.indexOf('#'))
    const Image_Extracted = await drive.files.list ({pageSize: 150, q })
    const Image_Ids = Image_Extracted.data.files
    Image_Ids.map((imgId)=> {
        values[getIndex(imgId.name) -1].push (imgId.id)
    } )
    console.log({values})
    return {props:
        {
           values 
        }   
    }
}


function Index({values}) {      
     const [activeFilter , setClickFilter] = useState(false)
    return (
        <div className='py-2 bg-gray-100'>
            <div className='sm:grid sm:py-1 px-16 grid-cols-2 gap-6'>
                <div className='text-right'>
                <div className="flex justify-center">
                    <div className="mb-3 xl:w-96">
                        <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                        <input type="search" className="form-control relative text-center placeholder-white focus:placeholder-gray-500 placeholder:font-bold  flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-bold text-white bg-cyan-500 bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-black focus:bg-cyan-100 focus:border-blue-600 focus:outline-none focus:text-left" placeholder="Recherche" aria-label="Search" aria-describedby="button-addon2"/>                        </div>
                    </div>                    
                </div>  

                </div>
                <div className='text-center'>
                    <div className="flex justify-center">
                        <div className="mb-3 xl:w-96">
                            <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                            <div 
                            className="relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-bold text-white bg-cyan-500 bg-clip-padding border border-solid border-gray-300 rounded m-0" >
                                {activeFilter 
                                ? 
                                <div className="grid grid-cols-3">
                                    <div className='hover:bg-white hover:text-cyan-500 rounded cursor-pointer'>Algérie</div>
                                    <div className='hover:bg-white hover:text-cyan-500 rounded cursor-pointer'>Mekka</div>
                                    <div className='hover:bg-white hover:text-cyan-500 rounded cursor-pointer'>international</div>
                                </div> 
                                : 
                                <div 
                                onMouseLeave={()=>setClickFilter( ()=>false)}
                                onMouseEnter={()=>setClickFilter( ()=>true)}> 
                                    Filtres
                                </div>
                                 }
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
            <div className='sm:grid sm:py-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-0 text-center'>
            {
                values.slice(0).reverse().map((service,index , v)=>{
                if (index == v.length-1) return <></>
                return(
                    <Services
                    key={"Service"+index}
                    disponible={service[0]}
                    place={service[1]}
                    tags={service[3]}
                    title={service[2]}
                    price={service[4]}
                    date={service[5]}
                    duration={service[6]}
                    description={service[8]}
                    id={v.length- index}
                    picture={buildImage( service[9])}
                    
                    />
                )})
            }
           
            </div>
        </div>
    );
}

export default Index;
function buildImage(Image_Id) {
    return `https://drive.google.com/uc?id=${Image_Id}`
}
  