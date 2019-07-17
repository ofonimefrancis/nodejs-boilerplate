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

    registerSql: `
        INSERT INTO users(
            email,
            first_name,
            last_name,
            phone_number,
            password,
            salt
        ) VALUES($1, $2, $3, $4, $5, $6)
        RETURNING id,
        email,
        first_name,
        last_name,
        phone_number`,

    checkUserSql: `
        SELECT *
        FROM users
        WHERE email=($1)`
}

export default queries;