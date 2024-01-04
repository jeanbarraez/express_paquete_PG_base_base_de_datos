import pool from "../db/ConnectionDB.js";

const getLike = async () => {
  const SQLquery = { text: "SELECT * FROM posts" };
  try {
    const response = await pool.query(SQLquery);
    return response.rows;
  } catch (error) {
    console.log(error);
  }
};

const createLike = async (titulo, img, descripcion) => {
  const SQLquery = {
    text: "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING * ",
    values: [titulo, img, descripcion, 0],
  };
  try {
    const response = await pool.query(SQLquery);
    console.log(response.rows);
    return response.rows;
  } catch (error) {
    console.log(error);
  }
};

const modifytrip = async (titulo, img, descripcion, id) => {
  const consulta =
    "UPDATE posts SET titulo=$1, img=$2, descripcion=$3 WHERE id = $4 RETURNING* ";
  const values = [titulo, img, descripcion, id];
  const { rowCount } = await pool.query(consulta, values);
  if (rowCount === 0) {
    throw { code: 404, message: "No se consiguió ningún post con este id" };
  }
};

const deletId = async (id) => {
  const consulta = "DELETE FROM posts WHERE id = $1";
  const values = [id];
  const { rowCount } = await pool.query(consulta, values);
  if (rowCount === 0) {
    throw { code: 404, message: "No se consiguió ningún post con este id" };
  }
};

export { getLike, createLike, modifytrip, deletId };
