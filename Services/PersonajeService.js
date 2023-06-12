import sql from 'mssql';
import configDB from '../Models/configDB.js';

export class PersonajeService {


  getList = async (name, age, movies) => {
    const conn = await sql.connect(configDB);
    let query = 'SELECT id, imagen, nombre FROM Personajes'
    let cont = 0

    const request = conn.request()
    if (name) {
      query += ' WHERE nombre = @pName'
      request.input("pName", sql.VarChar, name)
      cont++
    }
    if (age) {
      if (cont > 0) {
        query += ' AND'
      } else {
        query += ' WHERE'
      }
      request.input("pAge", sql.Int, age)
      query += 'edad = @pAge'
      
      cont++
    }
    if (movies) {
      if (cont > 0) {
        query += ' AND'
      } else {
        query += ' WHERE'
      }
      query += ' id_peliculas = @pMovies'
      request.input("pMovies", sql.Int, movies)
      cont++
    }

    const results = await request.query(query)
    return results.recordset;
  }


getById = async (id) => {
  const conn = await sql.connect(configDB);
  const results = await conn.request().input("pId", id).query('SELECT * FROM Personajes WHERE @pId=id');
  const resultadoPelicula = await conn.request().input("pId", id).query('SELECT * FROM Peliculas INNER JOIN TablaRelacional ON Peliculas.id = TablaPersonaje.id_peliculas WHERE TablaRelacional.id_personajes = @pId');
  const personaje = results.recordset[0];
  personaje.peliculasAsociadas = resultadoPelicula.recordset;
  return personaje;
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
  const results = await conn.request().input("pId", sql.int, id)
    .input("pNombre", sql.VarChar, personaje.nombre)
    .input("pEdad", sql.Int, personaje.edad)
    .input("pImagen", sql.VarChar, personaje.imagen)
    .input("pPeso", sql.Float, personaje.peso)
    .input("pHistoria", sql.VarChar, personaje.hisotria)
    .query('UPDATE Personajes SET nombre = @pNombre, edad = @pEdad, imagen = @pImagen, peso = @pPeso, historia=@pHistoria, WHERE id =@pId ');

  return results.recordset;
}


deleteById = async (id) => {
  const conn = await sql.connect(configDB);
  const results = await conn.request().input("pId", id).query('DELETE FROM Personajes WHERE @pId = id');

  return results;
}

}