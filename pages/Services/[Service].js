import React from 'react';
import FeedService from '../../components/Services/FeedService';
import WidgetsService from '../../components/Services/WidgetsService';
import istambol from '../../public/istambol.webp'
import {google} from 'googleapis'

export async function getServerSideProps ({query}) {
    const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly','https://www.googleapis.com/auth/drive','https://www.googleapis.com/auth/drive.metadata','https://www.googleapis.com/auth/drive.file'] });

    // PLEASE REFACTOR LATER  
    const { Service } = query;
    const q = `'${process.env.DRIVE_FOLDER_ID}' in parents and name contains  "_s${Service}" `
    const range = `A${Service}:I${Service}`;
    
    if (!isPositiveInteger(Service))  return {
        redirect: {
          permanent: false,
          destination: '/Services'
        }
      }

    //GET SHEET INFO 
    const sheets = google.sheets({ version: 'v4', auth });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID,
      range,
      valueRenderOption: "FORMULA",
    });
    // Result
    const values = response?.data?.values
    if (values == undefined) return {
        redirect: {
          permanent: false,
          destination: '/Services'
        }
      }

    
    const [disponible , place , title , tags, price , date , duration , article , description, ] = values[0]
    
    //GET IMAGE FROM DRIVE
    const drive = google.drive({ version: 'v3', auth})
    let Image_Id = 0;
    try{
    const Image_Extracted = await drive.files.list ({pageSize: 150, q })
    Image_Id = Image_Extracted.data.files[0].id;
    }catch(e){
        Image_Id = 0;
    }
    const picture = Image_Id ? buildImage(Image_Id) : "https://picsum.photos/2000"
    const id = Service;
    return { 
        props: {
            disponible , place , picture , title , tags, price , date , duration , article , description , duration , id 
        } 
    }
}

function Service({disponible , place , picture , title , tags, price , date , duration , article , description , id  }) {
    return (
        <div className='flex'>
        <div className='flex-1 m-4 p-4'>
            <FeedService
            disponible = {disponible}
            place={place}
            picture={picture}
            title={title}
            price={price}
            date={date}
            duration={duration}
            article={article}
            description={description}
            tags={tags.split(',')}
            id= {id}
            />
        </div>
        
    </div>
    );
}
export default Service;
function buildImage(Image_Id) {
    return `https://drive.google.com/uc?id=${Image_Id}`
}
function isPositiveInteger(str) {
    if (typeof str !== 'string') {
      return false;
    }
  
    const num = Number(str);
  
    if (Number.isInteger(num) && num > 0) {
      return true;
    }
  
    return false;
}

   
  