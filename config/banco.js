// Importar o mysql2 no padrão ES Modules
// import mysql from 'mysql2/promise';

// Configurar a conexão com o banco de dados
//const conexaoBanco = mysql.createPool({
 //   host: '10.87.100.6', // Servidor mysql da escola
 //   user: 'aluno',
//    password: 'Senai1234',
//    database: 'maiageminix',
//    waitForConnections: true // Aguarda a confirmação
//});

// Exportar como padrão (default) para funcionar com "import conexao from ..."
//export default conexaoBanco;


import mysql from 'mysql2/promise';
import 'dotenv/config';

const conexaoBanco = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 4000,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || 'test',
    ssl: {
        minVersion: 'TLSv1.2',
        rejectUnauthorized: true
    },
    waitForConnections: true
});

export default conexaoBanco;