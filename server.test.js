const request = require("supertest");
const app = require("./Routes/User");
const mongoose = require("mongoose");

describe("Test the route path" , () =>{
   
   test("it should response the GET method" , () =>{
    const resonse = request(app).post("http://localhost:8000/User/add").send({
        "Name" : "Rish",
        "Email" : "rish@gmail.com",
        "age" : 50,
        "Contact" : 123,

    })
    expect(response.statusCode).toBe(200);
   })
    
});
describe("Test the route path" , () =>{
   
    test("it should response the GET method" , () =>{
     const resonse = request(app).delete("http://localhost:8000/User/add").send({
         "Name" : "Rish",
         "Email" : "rish@gmail.com",
         "age" : 50,
         "Contact" : 123,
 
     })
     expect(response.statusCode).toBe(200);
    })
     
 });

 describe("Test the route path" , () =>{
   
    test("it should response the GET method" , () =>{
     const resonse = request(app).post("http://localhost:8000/User/add").send({
         "Name" : "Rish",
         
 
     })
     expect(response.statusCode).toBe(200);
    })
     
 });

