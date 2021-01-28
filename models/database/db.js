const mysql = require ("mysql");

const database = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        database: "labhill_commission",
        password: ""
    }
)

database.connect(function(err){
    if(err) throw err;
    console.log(`connection to database successful`);
})



database.end(function(err){
   if(err) {
    return (
        {
            err_code: err.code,
            err_sql:err.sql,
            err_message:err.message,
            err_:err.message,
            err_stack: err.stack
        }
    )
   }
})

module.exports = database;