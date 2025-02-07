import Empleado from '../models/trabajadores.model.js'

export const getempleados = async(req, res) => {
    try {
        const empleados = await Empleado.find();
        res.json(empleados);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createempleados = async(req, res) => {
    try {
    const { nombre, apellido, cedula, firma  } = req.body

    console.log(req.user)

    const newEmpleado = new Empleado({
        nombre,
        apellido,
        cedula,
        firma,
        });
        const savedEmpleado = await newEmpleado.save();
        res.json(savedEmpleado);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getempleado = async(req, res) => {
    try {
        const empleado = await Empleado.findById(req.params.id)
        if (!empleado) return res.status(404).json({ message: "Registro no encontrado" });
    res.json(empleado)
    } catch (error) {
        return res.status(400).json({ message: "Registro no encontrado"});
    }
}

export const updateempleados = async(req, res) => {
    try {
        const empleado = await Empleado.findByIdAndUpdate(req.params.id, req.body, {
            new:true,
        })
        if (!empleado) return res.status(404).json({ message: "Registro no actualizado" });
        res.json(empleado)
    } catch (error) {
        return res.status(404).json({ message: "Registro no encontrado"})
    }
}

export const deleteempleados = async(req, res) => {
    try {
        const empleado = await Empleado.findByIdAndDelete(req.params.id)
        if (!empleado) return res.status(404).json({ message: "Registro no eliminado" });
    return res.sendStatus(204);
    } catch (error) {
        return res.status(404).json({ message: "Registro no encontrado"})
    }
}

export const getMenuByType = async (req, res) => {
    try {
      const tipo = req.query.tipo; // Obtener el tipo de la consulta (por ejemplo, /menus?tipo=principal)
      const menus = await Menu.find({ tipo }); // Buscar menús con el tipo especificado
  
      if (menus.length === 0) {
        return res.status(404).json({ message: "No se encontraron menús con ese tipo" });
      }
  
      res.json(menus); // Devolver la lista de menús encontrados
    } catch (error) {
      return res.status(500).json({ message: "Error al buscar menús" });
    }
  };
  
