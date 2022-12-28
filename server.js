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
console.log("hello world")

app.get("/about", (req, res) => {
    res.sendFile(__dirname +'/public/about.html');
});

app.get("/contact", (req, res) => {
    res.sendFile(__dirname +'/public/contact.html');
});

app.get("/blog", (req, res) =>{
    res.sendFile(__dirname +'/public/blog.html');
});

app.get("/projects", (req, res) => {
    res.sendFile(__dirname +'/public/projects.html');
});

app.get("/project-details", (req, res) => {
    res.sendFile(__dirname +'/public/project-details.html');
});

app.get("/services", (req, res) => {
    res.sendFile(__dirname +'/public/services.html');
});

app.get("/service-details", (req, res) => {
    res.sendFile(__dirname +'/public/service-details.html');
});

// making listen port
const port = process.env.PORT || 80
app.listen(port, (error) => {
    if(!error)
    console.log(`the server run on port ${port}`)
})

