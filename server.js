const path = require("path");
const express = require("express");
const { error } = require("console");
const app = express();

//make public going rendered

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")))

//sending public html

app.get("/", (req, res) => {
    res.render(index.html);
});

app.get("/about", (req, res) => {
    res.sendFile('public/about.html');
});

app.get("/contact", (req, res) => {
    res.sendFile('public/contact.html');
});

app.get("/blog", (req, res) =>{
    res.sendFile('public/blog.html');
});

app.get("/projects", (req, res) => {
    res.sendFile('public/projects.html');
});

app.get("services", (req, res) => {
    res.sendFile('public/services.html');
});

// making listen port
const port = process.env.PORT || 80
app.listen(port, (error) => {
    if(!error)
    console.log(`the server run on port ${port}`)
})

