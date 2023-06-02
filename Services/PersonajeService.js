import sql from 'mssql';
import configDB from '../Models/configDB.js';

export const getList=async()=>
{
  const conn = await sql.connect(configDB);
  const results = await conn.request().query('SELECT id,imagen,nombre FROM Personajes');
  return results.recordset;
}

export const getDetailsbyId=async(id)=>
{
  const conn = await sql.connect(configDB);
  const results = await conn.request().input( "pId", id).query('SELECT * FROM Personajes INNER JOIN TablaRelacional on Personajes.id=id_personajes WHERE @pId=id'); 
  return results.recordset;
}


export const getByNameAgeMovie = async (nombre,edad,id) => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().input("pNombre",nombre, "pEdad", edad, "pId", id).query('SELECT * FROM Personajes INNER JOIN TablaRelacional on Personajes.id=id_personajes WHERE @pNombre =nombre || @pEdad=edad || @pNombre =nombre AND @pEdad=edad || @pId=id || @pNombre =nombre AND @pId=id || @pEdad=edad AND @pId=id || @pNombre =nombre AND @pEdad=edad AND @pId=id'); 
    return results.recordset;
}

export const insert = async (personaje) => {
  const conn = await sql.connect(configDB);
  const results = await conn.request() 
  .input( "pImagen", sql.VarChar, personaje.imagen)
  .input( "pNombre", sql.VarChar, personaje.nombre)
  .input("pEdad", sql.Int, personaje.edad)
  .input("pPeso", sql.Float, personaje.peso)
  .input("pHistoria", sql.VarChar, personaje.hisotria)
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
