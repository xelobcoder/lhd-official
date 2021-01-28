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

// creating clinician information table 

let clinicin_personal_information = `create table if not exists clinicianDetail(
    id int(255) not null auto_increment primary key,
    firstname varchar(255) not null ,
    lastname varchar(255) not null,
    birthday varchar(255) not null,
    mobileNumber int(255) not null,
    gender varchar(255) not null,
    email varchar(255) not null,
    uniqueid varchar(255) not null

)`;

let clinician_organization = `create table if not exists clinicianOrganization(
    id int(255) not null auto_increment primary key,
    organization_name varchar(255) not null,
    region varchar(255) not null,
    city varchar(255) not null,
    streetname varchar(255) not null,
    postcode varchar(255) not null,
    uniqueid varchar(255) not null

)`;

const payment_mode = `create table if not exists paymentMode(
     id int(255) not null auto_increment primary key,
     paymentmode varchar(255) not null,
     moneynumber varchar(255) not null,
     momo_name varchar(255) not null,
     uniqueid varchar(255) not null

)`;

const imageData = `create table if not exists imageLoad(
    id int(255) not null auto_increment primary key,
    imagedir varchar(255) not null,
    password varchar(255) not null ,
    uniqueid varchar(255) not null
)`


database.query(clinicin_personal_information, function(err,result,fields){
    if(err) throw err;
    console.log(result);
})

database.query(clinician_organization,function(err,result,fields){
    if(err) throw err;
    console.log(result)
})

database.query(payment_mode,function(err,result,fields){
    if(err) throw err;
    console.log(result);
})

database.query(imageData,function(err,result,fields){
    if(err) throw err;
    console.log(err)
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