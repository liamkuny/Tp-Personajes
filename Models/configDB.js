import 'dotenv/config'
const configDB = {
    user: process.env.DB_User,
    password: process.env.DB_Password,
    server: process.env.DB_Server,
    database: process.env.DB_Database,
    options: {
        trustServerCertificate: true,
        trustedConnection: true
    }
}
export default configDB;