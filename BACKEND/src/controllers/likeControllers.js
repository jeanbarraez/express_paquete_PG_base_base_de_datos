import {
  getLike,
  createLike,
  modifytrip,
  deletId,
} from "../../models/likeModels.js";

export const getLikesAll = async (req, res) => {
  try {
    const postlike = await getLike();
    res.status(200).json(postlike);
  } catch (error) {
    res.status(500).json({ error: "Error al procesar la solicitud" });
    console.error("Error al procesar la solicitud:", error);
  }
};

export const createLikes = async (req, res) => {
  try {
    const { titulo, url, descripcion } = req.body;

    // Validar que los campos requeridos estén presentes
    if (!titulo || !url || !descripcion) {
      return res
        .status(400)
        .json({ error: "Se requieren título, URL y descripción" });
    }

    const newLike = await createLike(titulo, url, descripcion);
    res.status(201).json({ newLike });
  } catch (error) {
    res.status(500).json({ error: "Error al procesar la solicitud" });
    console.error("Error al procesar la solicitud:", error);
  }
};

export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, url, descripcion } = req.query;
    await modifytrip(titulo, url, descripcion, id);
    res.send("Post modificado con éxito");
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la solicitud" });
    console.error("Error al procesar la solicitud:", error);
  }
};

export const removeId = async (req, res) => {
  try {
    const { id } = req.params;
    await deletId(id);
    res.send("Post Eliminado con éxito");
  } catch (error) {
    res.status(500).json({ error: "Error al Eliminar la solicitud" });
    console.error("Error al procesar la solicitud:", error);
  }
};

export const notFound = async (req, res) => {
  res.status(404).json({ error: "This request is not possible" });
  console.log("This request is not possible", error);
};
