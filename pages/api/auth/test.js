import { Express } from "express";
const app = express();



module.exports = app.get('/test', (req, res)=>{
   res.console.log("thgis is play from backend");
})

