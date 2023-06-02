import sql from 'mssql';
import configDB from '../Models/configDB.js';


export class PeliculaService {
 getList=async()=>
{
  const conn = await sql.connect(configDB);
  const results = await conn.request().query('SELECT id,imagen,titulo,fechaCreacion FROM Peliculas');
  return results.recordset;
}

 getDetailsbyId=async(id)=>
{
  const conn = await sql.connect(configDB);
  const results = await conn.request().input( "pId", id).query('SELECT * FROM Peliculas INNER JOIN TablaRelacional on Pelciculas.id=id_peliculas WHERE @pId=id' );
  return results.recordset;
}


 insert = async (pelicula) => {
  const conn = await sql.connect(configDB);
  const results = await conn.request() 
  .input( "pImagen", sql.VarChar, pelicula.imagen)
  .input( "pTitulo", sql.VarChar, pelicula.titulo)
  .input("pFechaCreacion", sql.Int, pelicula.fechaCreacion)
  .input("pCalificacion", sql.Float, pelicula.calificacion)
  .query('INSERT INTO Peliculas (titulo, , imagen, peso) VALUES (@pNombre, @pEdad, @pImagen, @pPeso)');

  return results.recordset;
}



 updateById = async (id, pelicula) => {
  const conn = await sql.connect(configDB);
  const results = await conn.request().input("pId", id) 
  .input( "pImagen", sql.VarChar, pelicula.imagen)
  .input( "pTitulo", sql.VarChar, pelicula.titulo)
  .input("pFechaCreacion", sql.Int, pelicula.fechaCreacion)
  .input("pCalificacion", sql.Float, pelicula.calificacion)
  .query('UPDATE Peliculas SET imagen = @pImagen, titulo = @pTitulo, fechaCreacion = @pFechaCreacion, calificacion = @pCalificacion WHERE @pId = id ');
  return results;
}


deleteById = async (id) => {
  const conn = await sql.connect(configDB);
  const results = await conn.request().input("pId", id).query('DELETE FROM Peliculas WHERE @pId = id');

  return results;
}

}