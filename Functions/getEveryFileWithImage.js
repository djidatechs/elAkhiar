import {google} from 'googleapis'

export default async function Function () {
    const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly','https://www.googleapis.com/auth/drive','https://www.googleapis.com/auth/drive.metadata','https://www.googleapis.com/auth/drive.file'] });
    const sheets = google.sheets({ version: 'v4', auth });
    const range = `A1:I`; 
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID,
        range,
        valueRenderOption: "FORMULA",
    });

    const values = response?.data?.values
    if (values==undefined) return false;
    console.log({values})
    const drive = google.drive({ version: 'v3', auth})
    const q = `'${process.env.DRIVE_FOLDER_ID}' in parents and name contains  "_s" `
    const getIndex = (name) => name.substring(name.indexOf('_s') + 2)[0] ;
    const Image_Extracted = await drive.files.list ({pageSize: 150, q })
    const Image_Ids = Image_Extracted.data.files
    Image_Ids.map((imgId)=> {
        values[getIndex(imgId.name) -1].push (imgId.id)
    })
    
    return values
}