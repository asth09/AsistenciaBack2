import { Router } from "express";
import { validateUserRole, validateUserRoles } from "../middlewares/validateToken.js";
import { getdocentes,
    getdocente,
    createdocentes,
    updatedocentes,
    deletedocentes } from "../controllers/docente.controller.js";   

const router = Router()

router.get('/docente', validateUserRoles, getdocentes)

router.get('/docente/:id', validateUserRoles, getdocente)

router.post('/docente', validateUserRoles, createdocentes)

router.delete('/docente/:id', validateUserRole, deletedocentes)

router.put('/docente/:id', validateUserRoles, updatedocentes)


export default router