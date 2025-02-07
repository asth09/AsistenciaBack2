import { Router } from "express";
import { validateUserRole, validateEmpleado } from "../middlewares/validateToken.js";
import { getempleados,
    getempleado,
    createempleados,
    updateempleados,
    deleteempleados } from "../controllers/empleado.controller.js";   

const router = Router()

router.get('/empleado', validateEmpleado, getempleados)

router.get('/empleado/:id', validateEmpleado, getempleado)

router.post('/empleado', validateEmpleado, createempleados)

router.delete('/empleado/:id', validateUserRole, deleteempleados)

router.put('/empleado/:id', validateEmpleado, updateempleados)


export default router