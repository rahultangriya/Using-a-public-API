import express from "express";
import axios from "axios";

// port no. and make app

const app = express();
const port = 3000;

app.use(express.static("public"));
// simple get method

app.get("/",async(req,res)=>
{
    try{
        
        const result = await axios.get("https://random.dog/woof.json");
        res.render("index.ejs",{content:result.data.url});
    }
    catch(error)
    {
        res.status(404).send(error.message);
    }
});
app.post("/dog-image",async(req,res)=>
{
    try{
        const result = await axios.get("https://random.dog/woof.json");
        res.render("index.ejs",{content:result.data.url});
    }
    catch(error)
    {
        res.send(error.message);
    }
});
// setup port to listen 


app.listen(port,(req,res)=>
{
    console.log(`listening on port ${port}`);
});