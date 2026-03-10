const express= require("express");
const multer = require("multer");
const fs = require("fs");

const app = express();

const upload = multer({dest:"uploading/"});

app.use(express.static("public"));

app.post("/uploading", upload.single("uploaded_file"),(req,res)=>{

    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }
    fs.readFile(req.file.path, "utf-8", (err, data) => {
        if (err) {
        return res.status(500).json({ error: "File read error" });
        }

        const data_lines = data.split("\n");

        let info=[];
        let warning=[];
        let error=[];

        data_lines.forEach(line=>{
            if(line.toUpperCase().includes("INFO"))info.push(line);
            if(line.toUpperCase().includes("WARNING"))warning.push(line);  
            if(line.toUpperCase().includes("ERROR"))error.push(line);
        });

        fs.unlink(req.file.path, (err)=>{
            if(err){
            console.error("Error deleting file " , err);
            }
        });

        res.json({
            info_count: info.length,
            warning_count: warning.length,
            error_count: error.length,
            info,
            warning,
            error
        });
    });
});

app.listen(3000, ()=>{
    console.log("Runing");
});