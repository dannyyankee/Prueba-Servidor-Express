
// app.get("/", (req, res) =>  res.send("<h1>Estoy respondiento desde un servido express</h1>"))
// app.get("/clientes", (req, res) => res.send("Estoy respondiento desde clientes"))
// app.get("/productos", (req, res) => res.send("Estoy respondiento desde productos"))

// Importo express
const express = require("express");
// Ejecuto el router
const router= express.Router();

//Importamos el fichero de heroes

const {heroes}= require ("./../data/heroe.json");

//Importo la funcion para poder escribir en el fichero
const saveToJSON=require("./../data/heroe")

//Importo uuid
const { v4: uuidv4 } = require('uuid');
//uuidv4();


router
.get("/heroes",(req, res) =>  res.send(heroes))

.get("/heroes/:id",(req, res) =>  {//los : indican que el parametro cambia
    console.log(req.params.id)
    const oneheroe = heroes.find((heroe) => heroe.id === req.params.id)
    res.send(oneheroe)
})

.post("/heroes",(req, res) =>  {
    let newheroe = req.body;
    const newid = uuidv4();
    newheroe = {newid, ...newheroe}
    heroes.unshift(newheroe)
    saveToJSON({heroes})
    res.send(newheroe)
})

.put("/heroes/:id",(req, res) =>  {
    const id = req.params.id
    console.log(req.params.id)
    const newheroe ={id, ...req.body}
 
    const newheroes=heroes.map((heroe)=>{
        heroe.id === req.params.id? newheroe : heroe
        // if(heroe.id===req.params.id)
        //     return req.body
        // else
        //     return heroe
    })
    saveToJSON({heroes})
    res.send(newheroe)
})

.patch("/heroes/:id",(req, res) =>  {///este esta sin hacer hay que hacerlo
    let newheroe = req.body;
    const newid = uuidv4();
    newheroe = {newid, ...newheroe}
    heroes.unshift(newheroe)
    saveToJSON({heroes})
    res.send(newheroe)
})

.delete("/heroes",(req, res) =>  {
    console.log(req.params.id)
    const newheroes = heroes.filter((heroe)=> heroe.id !== req.params.id)
    saveToJSON({heroes:newheroes})
    res.send(newheroes)
})

.get("/crearcliente",(req, res) =>  res.send(`Estoy en la ruta ${req.baseUrl}${req.url}`) )

module.exports = router;

  