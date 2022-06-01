import { google } from "googleapis";
import jijel from '../../public/jijel.jpg'
export default async function handler(req, res) {
    const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly','https://www.googleapis.com/auth/drive','https://www.googleapis.com/auth/drive.metadata','https://www.googleapis.com/auth/drive.file'] });
    const id = req.query.id;
    console.log({req ,A: req.id , B: req.query})
    //buil the query with the givin id 
    const q = `'${process.env.DRIVE_FOLDER_ID}' in parents and name contains  "s${id}_" `
    //select image
    const drive = google.drive({ version: 'v3', auth})
    let Image_Id = 0;
    try{
    const Image_Extracted = await drive.files.list ({pageSize: 150, q })
    Image_Id = Image_Extracted.data.files[0].id;
    }catch(e){
        Image_Id = 0;
    }
    console.log("THIS IS IT ",{Image_Id , q})
    if (Image_Id==0) return res.status(200).json({ respo : jijel})
    return res.status(200).json({ respo :  buildImage(Image_Id) })
  }


  function buildImage(Image_Id) {
    return `https://drive.google.com/uc?id=${Image_Id}`
}
  