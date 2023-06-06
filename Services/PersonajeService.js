import sql from 'mssql';
import configDB from '../Models/configDB.js';

export class PersonajeService {
  getList = async () => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().query('SELECT id,imagen,nombre FROM Personajes');
    return results.recordset;
  }

  getDetailsbyId = async (id) => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().input("pId", id).query('SELECT * FROM Personajes INNER JOIN TablaRelacional on Personajes.id=id_personajes WHERE @pId=id');  //arreglar
    return results.recordset;
  }


  getByNameAgeMovie = async (nombre, edad, id) => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().input("pNombre", nombre, "pEdad", edad, "pId", id).query('SELECT * FROM Personajes INNER JOIN TablaRelacional on Personajes.id=id_personajes WHERE @pNombre =nombre || @pEdad=edad || @pNombre =nombre AND @pEdad=edad || @pId=id || @pNombre =nombre AND @pId=id || @pEdad=edad AND @pId=id || @pNombre =nombre AND @pEdad=edad AND @pId=id');
    return results.recordset;
  }

  insert = async (personaje) => {
    const conn = await sql.connect(configDB);
    const results = await conn.request()
      .input("pImagen", sql.VarChar, personaje.imagen)
      .input("pNombre", sql.VarChar, personaje.nombre)
      .input("pEdad", sql.Int, personaje.edad)
      .input("pPeso", sql.Float, personaje.peso)
      .input("pHistoria", sql.VarChar, personaje.hisotria)
      .query('INSERT INTO Personajes (nombre, edad, imagen, peso, historia) VALUES (@pNombre, @pEdad, @pImagen, @pPeso, @pHistoria)');

    return results.recordset;
  }



  updateById = async (id, personaje) => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().input("pId", id)
      .input("pNombre", sql.VarChar, personaje.nombre)
      .input("pEdad", sql.Int, personaje.edad)
      .input("pImagen", sql.VarChar, personaje.imagen)
      .input("pPeso", sql.Float, personaje.peso)
      .input("pHistoria", sql.VarChar, personaje.hisotria)
      .query('UPDATE Personajes SET nombre = @pNombre, edad = @pEdad, imagen = @pImagen, peso = @pPeso, historia=@pHistoria, WHERE @pId = id');

    return results;
  }


  deleteById = async (id) => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().input("pId", id).query('DELETE FROM Personajes WHERE @pId = id');

    return results;
  }
}
