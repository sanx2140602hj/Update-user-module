const {initializeApp, cert} = require("firebase-admin/app");

const serviceAccount = require("../../utils/constants/service-account.json");

const app = initializeApp({
  credential: cert(serviceAccount),
  databaseURL: 'https://<dgs9a-f8ec4>.firebaseio.com'
});

module.exports = app;

/* scope = alcance

const test = 10;
let testOne = 10;
var textTwo = 10;

Valor inmutable = nunca cambia de valor
Valor mutable = puede cambiar de valor
let es una variable que únicamente se lee en el archivo o función que fue declarada
var es una variable que sestá disponible en todos lados, puede ser leída en cualquier parte del archivo y desde otros archivos
Var es una mala práctica, no es segura*/