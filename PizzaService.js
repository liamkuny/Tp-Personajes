import sql from 'mssql';
import configDB from '../models/configDB.js';


export const getList=async()=>
{
  const conn = await sql.connect(configDB);
  const results = await conn.request().input("pNombre"= nombre, "pImagen", imagen, "pId", id).query('SELECT id,imagen,nombre FROM Personajes');
  return results.recordset;
}


export const getByNameAgeMovie = async () => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().input("pNombre"= nombre, "pEdad", edad, "pPelicula", pelicula).query('SELECT * FROM Personajes WHERE @pNombre =nombre AND @pEdad=edad AND ');
    return results.recordset;
}

export const insert = async (personaje) => {
  const conn = await sql.connect(configDB);
  const results = await conn.request() 
  .input( "pNombre", sql.VarChar, personaje.nombre)
  .input("pEdad", sql.Int, personaje.edad)
  .input( "pImagen", sql.VarChar, personaje.imagen)
  .input("pPeso", sql.Float, personaje.peso)
  .query('INSERT INTO Personajes (nombre, edad, imagen, peso) VALUES (@pNombre, @pEdad, @pImagen, @pPeso)');

  return results.recordset;
}



export const updateById = async (id, personaje) => {
  const conn = await sql.connect(configDB);
  const results = await conn.request().input("pId", id)
  .input( "pNombre", sql.VarChar, personaje.nombre)
  .input("pEdad", sql.Int, personaje.edad)
  .input( "pImagen", sql.VarChar, personaje.imagen)
  .input("pPeso", sql.Float, personaje.peso)
  .query('UPDATE Personajes SET nombre = @pNombre, edad = @pEdad, imagen = @pImagen, peso = @pPeso WHERE @pId = id ');

  return results;
}


export const deleteById = async (id) => {
  const conn = await sql.connect(configDB);
  const results = await conn.request().input("pId", id).query('DELETE FROM Personajes WHERE @pId = id');

  return results;
}
