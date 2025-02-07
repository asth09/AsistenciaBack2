import Docente from '../models/docente.model.js'

export const getdocentes = async(req, res) => {
    try {
        const docentes = await Docente.find();
        res.json(docentes);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createdocentes = async(req, res) => {
    try {
    const { nombre, apellido, cedula, firma } = req.body

    console.log(req.user)

    const newDocente = new Docente({
        nombre,
        apellido,
        cedula,
        firma,
        });
        const savedDocente = await newDocente.save();
        res.json(savedDocente);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getdocente = async(req, res) => {
    try {
        const docente = await Docente.findById(req.params.id)
        if (!docente) return res.status(404).json({ message: "Registro no encontrado" });
    res.json(docente)
    } catch (error) {
        return res.status(400).json({ message: "Registro no encontrado"});
    }
}

export const updatedocentes = async(req, res) => {
    try {
        const docente = await Docente.findByIdAndUpdate(req.params.id, req.body, {
            new:true,
        })
        if (!docente) return res.status(404).json({ message: "Registro no actualizado" });
        res.json(docente)
    } catch (error) {
        return res.status(404).json({ message: "Registro no encontrado"})
    }
}

export const deletedocentes = async(req, res) => {
    try {
        const docente = await Docente.findByIdAndDelete(req.params.id)
        if (!docente) return res.status(404).json({ message: "Registro no eliminado" });
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
  
