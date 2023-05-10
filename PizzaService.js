import sql from 'mssql';
import configDB from '../models/configDB.js';



export const getAll = async () => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().query('SELECT * FROM Personajes');
    return results.recordset;
}


export const getById = async (id) => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().input("pId",id).query('SELECT * FROM Personajes WHERE @pId = id');
    return results.recordset;
}

export const insert = async (personaje) => {
  const conn = await sql.connect(configDB);
  const results = await conn.request() 
  .input( "pNombre", sql.VarChar, personaje.nombre)
  .input("pEdad", sql.Int, personaje.edad)
  .input( "pImagen", sql.VarChar, personaje.imagen)
  .input("pPeso", sql.Float, personaje.peso)
  .input("pSerieOPelicula", sql.Float, personaje.serieOpelicula)
  .query('INSERT INTO Personajes (nombre, edad, imagen, peso,serieOpelicula) VALUES (@pNombre, @pLibreGluten, @pImporte, @pDescripcion)');

  return results.recordset;
}



export const updateById = async (id, pizza) => {
  const conn = await sql.connect(configDB);
  const results = await conn.request().input("pId", id)
  .input( "pNombre", sql.VarChar, pizza.Nombre)
  .input("pLibreGluten", sql.Bit, pizza.LibreGluten)
  .input( "pImporte", sql.Float, pizza.Importe)
  .input("pDescripcion", sql.VarChar, pizza.Descripcion)
  .query('UPDATE Pizzas SET Nombre = @pNombre, Descripcion = @pDescripcion, LibreGluten = @pLibreGluten, Importe = @pImporte  WHERE @pId = id ');

  return results;
}


export const deleteById = async (id) => {
  const conn = await sql.connect(configDB);
  const results = await conn.request().input("pId", id).query('DELETE FROM Pizzas WHERE @pId = id');

  return results;
}