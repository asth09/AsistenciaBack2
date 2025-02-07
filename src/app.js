import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";

import authRoutes from './routes/auth.routes.js';
import docenteRoutes from './routes/docente.routes.js';
import empleadoRoutes from './routes/trabajador.routes.js';

const app = express();

const whitelist = [ "https://api-prueba-asistant-front.vercel.app"
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions)); 
app.use(cookieParser());
app.use(bodyParser.json())


app.get("/api/nelson", (req, res) =>{
  res.json({
    message: "funciona"
  })
})
app.use("/api", authRoutes);
app.use("/api", docenteRoutes);
app.use("/api", empleadoRoutes);
 

export default app