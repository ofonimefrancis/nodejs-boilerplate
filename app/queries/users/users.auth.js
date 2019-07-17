const queries = {
    getUserByEmailSql: `
      SELECT *
      FROM users
      WHERE email=($1)`,
  
    getUserById: `
      SELECT *
      FROM users
      WHERE id=($1)`,
    getUserByPhoneSql: `
      SELECT *
      FROM users
      WHERE phone_number=($1)`,
  };
  export default queries;