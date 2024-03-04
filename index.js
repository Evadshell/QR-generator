import qr from "qr-image";
import fs from "fs";
import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
var t ="";
app.listen(port,()=>{
    console.log(`port is running at ${port}`);
})
app.get("/",(req,res)=>{
    res.render("index.ejs");
})
app.post("/submit", (req, res) => {
    t = req.body["url"];
    var qr_svg = qr.image(t);
qr_svg.pipe(fs.createWriteStream("public/qr.png"));

  res.render("index.ejs",{t:t});
});

