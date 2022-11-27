import Database from './db.services';

const DB_EXEC = Database.getConnection();

export const getRegistrosDeLogin = async () => {
  let results = await DB_EXEC(`select * from registrosDeLogin`);
  //console.log(results);
  return results.rows._array;
}

export const insertRegistroDeLogin = async (param) => {
  let results = await DB_EXEC(`insert into registrosDeLogin(usuario, data)
  values(?,?)`, [param.usuario, param.data]);
  //console.log(results);
  return results.rowsAffected;
}

export const updateRegistroDeLogin = async (param) => {
  let results = await DB_EXEC(`update registrosDeLogin set usuario=?, data=?
  where id=?`, [param.usuario, param.data]);
  //console.log(results);
  return results.rowsAffected;
}

export const deleteRegistroDeLogin = async (id) => {
  let results = await DB_EXEC(`delete from registrosDeLogin where id=?`, [id]);
  //console.log(results);
  return results.rowsAffected;
}