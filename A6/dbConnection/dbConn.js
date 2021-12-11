const Sequelize = require('sequelize');

//setup db connection
var sequelize = new Sequelize('ddhrk5jjjqjoj2', 'ywbndchyfpblbk', 'f973eeed708ad80cc33a9a3a747eb9e02a23e8a4bcbd376e03e2fa7bd5a7694f', {
    host: 'ec2-34-195-69-118.compute-1.amazonaws.com',
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
        ssl: { rejectUnauthorized: false }
    },
    query: { raw: true },
    logging: false
});

//authenticate connection
sequelize.authenticate().then(()=> console.log('PostgreSQL connected.'))
.catch((err)=>console.log("Unable to connect to DB.", err));

module.exports = {sequelize, Sequelize};
