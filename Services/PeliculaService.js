import sql from 'mssql';
import configDB from '../Models/configDB.js';


export class PeliculaService {

  getList = async (req) => {
    const conn = await sql.connect(configDB);
    const title = req.query.title
    const order = req.query.order
    let query = 'SELECT id, imagen, titulo, fechaCreacion FROM Peliculas'

    if (title) {
      query += ' WHERE titulo = @pTitle'
    }
    if (order) {
      query += ` ORDER BY fechaCreacion ${order}`
    }

    const results = await conn.request()
      .input("pTitle", sql.VarChar, title)
      .query(query)
    return results.recordset;
  }


  getById = async (id) => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().input("pId", id).query('SELECT * FROM Peliculas WHERE @pId=id');
    const resultadoPersonaje = await conn.request().input("pId", id).query('SELECT nombre FROM Personajes INNER JOIN TablaRelacional ON Personajes.id = TablaRelacional.id_personajes WHERE TablaRelacional.id_peliculas = @pId');
    const pelicula = results.recordset[0];
    if (pelicula != undefined) {
      pelicula.peliculasAsociadas = resultadoPersonaje.recordset;
    }
    return pelicula;
  }


  insert = async (pelicula) => {
    const conn = await sql.connect(configDB);
    const results = await conn.request()
      .input("pImagen", sql.VarChar, pelicula?.imagen?? " ")
      .input("pTitulo", sql.VarChar, pelicula?.titulo?? " ")
      .input("pFechaCreacion", sql.DateTime, pelicula?.fechaCreacion?? 12/12/2012)
      .input("pCalificacion", sql.Float, pelicula?.calificacion?? 3)
      .query('INSERT INTO Peliculas (imagen,titulo,fechaCreacion, calificacion) VALUES (@pImagen, @pTitulo, @pFechaCreacion,@pCalificacion)');

    return results.recordset;
  }



  updateById = async (id, pelicula) => {
    const Mov = await this.getById(id)
    const conn = await sql.connect(configDB);
    const results = await conn.request().input("pId", sql.Int, id)
      .input("pImagen", sql.VarChar, pelicula?.imagen?? Mov?.imagen)
      .input("pTitulo", sql.VarChar, pelicula?.titulo?? Mov?.titulo)
      .input("pFechaCreacion", sql.DateTime, pelicula?.fechaCreacion?? Mov?.fechaCreacion)
      .input("pCalificacion", sql.Float, pelicula?.calificacion?? Mov.calificacion)
      .query('UPDATE Peliculas SET imagen = @pImagen, titulo = @pTitulo, fechaCreacion = @pFechaCreacion, calificacion = @pCalificacion WHERE @pId = id ');
    return results;
  }


  deleteById = async (id) => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().input("pId", id).query('DELETE FROM Peliculas WHERE @pId = id');

    return results;
  }

}