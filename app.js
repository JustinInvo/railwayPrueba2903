// const http = require('http');
// const server  = http.createServer((req,res)=>{
//     res.end('Respuesta de la solicitud v2')
// })

// const puerto = 3000;
// server.listen(puerto, ()=>{ 
//     console.log('Esperando solicitudes')
// })
// import {PORTConfig} from './config.js'

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_USER = process.env.DB_USER || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || 'CONTRAPRUEBA';
const DB_NAME = process.env.DB_NAME || 'userdb';
const DB_PORT = process.env.DB_PORT || 3306;


// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + '/public'))


app.get('/',(req,res)=>{
    res.render('index',{titulo:"Mi titulo dinámico"});
})

app.get('/servicios',(req,res)=>{
    res.render('servicios', {tituloServicios:"Este es titulo de servicios"})
})
app.use(express.static(__dirname + '/public'))

app.use((req,res,next)=>{
    res.status(404).render('404', {
        titulo: 'titulo del sitio web',
        descripcion: ' descripción de la web'
    })
})

app.listen(port,()=>{
    console.log('Servidor a su servicio ',port)
})

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAgwskgmus2jlBD48_vko70KVjUkbiKxmc",
//   authDomain: "aprendiendo-node-js.firebaseapp.com",
//   projectId: "aprendiendo-node-js",
//   storageBucket: "aprendiendo-node-js.appspot.com",
//   messagingSenderId: "1054681464122",
//   appId: "1:1054681464122:web:4218b13b6b940bcfd9e403",
//   measurementId: "G-YZWSH557CM"
// };

// // Initialize Firebase
// const appFirebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(appFirebase);