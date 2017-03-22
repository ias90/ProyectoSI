'use strict';

const Path = require('path');
const Bcrypt = require('bcrypt');
const Hapi = require('hapi');
const Inert = require('inert');
var Vision = require('vision')
var models = require('./models');
var Handlebars = require('handlebars');


const server = new Hapi.Server();
server.connection({ 
    host: process.env.IP,
    port: process.env.PORT
});



server.register(require('inert'), (err) => {

    if (err) {
        throw err;
    }

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply.file('./vistas/index.html');
        }
    }),
    
    server.route({
        method: 'GET',
        path: '/mostrarDocente',
        handler: function (request, reply) {
           var data;
            models.docente.findAll().then(function(datas){
            
           
           // console.log(datas);
            console.log(JSON.stringify(datas));
            reply(JSON.stringify(datas));
            });
        }
    }),
    
    server.route({
         method : 'GET', path : '/public/{path*}',
         handler : {
           directory : {
           path : './public',
           listing : false,
           index : false
           }
        }
       }),
    
    server.route({
        method: 'POST',
        path: '/insertar',
        handler: function (request, reply) {
            
            var profesor={
                
                nombre: request.payload.nombre,
                apellido: request.payload.apellido,
                departamento: request.payload.departamento,
                periodo: request.payload.periodo
                
            };
            models.sequelize.sync().then(function(){
                models.docente.create({
                    
                    nombre: profesor.nombre,
                    apellido: profesor.apellido,
                    departamento: profesor.departamento,
                    periodo: profesor.periodo,
                });
                  
            });
                console.log('Se ha insertado un docente en la tabla docentes.');
                console.log('Nombre: '+profesor.nombre);
                console.log('Apellido: '+profesor.apellido);
                console.log('Departamento: '+profesor.departamento);
                console.log('Periodo: '+profesor.periodo);
              reply.file('./vistas/index.html');
              
            }
            
    }),
    
    server.route({
        method: 'POST',
        path: '/insertarPruebaA',
        handler: function (request, reply) {
            
            var pruebaA={
                
                fecha: request.payload.fecha,
                nombreP: request.payload.nombreP,
                codigoM: request.payload.codigoM,
                seccion: request.payload.seccion,
                o1: request.payload.o1,
                o2: request.payload.o2,
                o3: request.payload.o3,
                o4: request.payload.o4,
                o5: request.payload.o5,
                o6: request.payload.o6,
                o7: request.payload.o7,
                o8: request.payload.o8,
                o9: request.payload.o9,
                o10: request.payload.o10,
                i1: request.payload.i1,
                i2: request.payload.i2,
                i3: request.payload.i3,
                i4: request.payload.i4,
                i5: request.payload.i5,
                i6: request.payload.i6,
                i7: request.payload.i7,
                i8: request.payload.i8,
                i9: request.payload.i9,
                f24: request.payload.f24,
                f25: request.payload.f25,
                f26: request.payload.f26,
                f27: request.payload.f27,
                f28: request.payload.f28,
                f29: request.payload.f29,
                f30: request.payload.f30,
                f31: request.payload.f31,
                f32: request.payload.f32,
                f33: request.payload.f33,
                f34: request.payload.f34,
                f35: request.payload.f35,
                f36: request.payload.f36,
                f37: request.payload.f37,
                f38: request.payload.f38,
                f39: request.payload.f39,
                f40: request.payload.f40,
                f41: request.payload.f41,
                f42: request.payload.f42,
                f43: request.payload.f43,
                f44: request.payload.f44,
                f45: request.payload.f45,
                f46: request.payload.f46,
                f47: request.payload.f47,
                f48: request.payload.f48,
                f49: request.payload.f49,
                f50: request.payload.f50,
                f51: request.payload.f51,
                f52: request.payload.f52,
                f53: request.payload.f53,
                f54: request.payload.f54,
                f55: request.payload.f55,
                valor: request.payload.valor,
                valor2: request.payload.valor2,
                valor3: request.payload.valor3,
                valor4: request.payload.valor4,
                valor5: request.payload.valor5,
                valor6: request.payload.valor6,
                valor7: request.payload.valor7,
                valor8: request.payload.valor8,
                valort: request.payload.valort,
                
                
            };
            models.sequelize.sync().then(function(){
                models.pruebaTipoA.create({
                    
                    fecha: pruebaA.fecha,
                    nombreP: pruebaA.nombreP,
                    codigoM: pruebaA.codigoM,
                    seccion: pruebaA.seccion,
                    o1: pruebaA.o1,
                    o2: pruebaA.o2,
                    o3: pruebaA.o3,
                    o4: pruebaA.o4,
                    o5: pruebaA.o5,
                    o6: pruebaA.o6,
                    o7: pruebaA.o7,
                    o8: pruebaA.o8,
                    o9: pruebaA.o9,
                    o10: pruebaA.o10,
                    i1: pruebaA.i1,
                    i2: pruebaA.i2,
                    i3: pruebaA.i3,
                    i4: pruebaA.i4,
                    i5: pruebaA.i5,
                    i6: pruebaA.i6,
                    i7: pruebaA.i7,
                    i8: pruebaA.i8,
                    i9: pruebaA.i9,
                    
                    f24: pruebaA.f24,
                    f25: pruebaA.f25,
                    f26: pruebaA.f26,
                    f27: pruebaA.f27,
                    f28: pruebaA.f28,
                    f29: pruebaA.f29,
                    f30: pruebaA.f30,
                    f31: pruebaA.f31,
                    f32: pruebaA.f32,
                    f33: pruebaA.f33,
                    f34: pruebaA.f34,
                    f35: pruebaA.f35,
                    f36: pruebaA.f36,
                    f37: pruebaA.f37,
                    f38: pruebaA.f38,
                    f39: pruebaA.f39,
                    f40: pruebaA.f40,
                    f41: pruebaA.f41,
                    f42: pruebaA.f42,
                    f43: pruebaA.f43,
                    f44: pruebaA.f44,
                    f45: pruebaA.f45,
                    f46: pruebaA.f46,
                    f47: pruebaA.f47,
                    f48: pruebaA.f48,
                    f49: pruebaA.f49,
                    f50: pruebaA.f50,
                    f51: pruebaA.f51,
                    f52: pruebaA.f52,
                    f53: pruebaA.f53,
                    f54: pruebaA.f54,
                    f55: pruebaA.f55,
                    valor: pruebaA.valor,
                    valor2: pruebaA.valor2,
                    valor3: pruebaA.valor3,
                    valor4: pruebaA.valor4,
                    valor5: pruebaA.valor5,
                    valor6: pruebaA.valor6,
                    valor7: pruebaA.valor7,
                    valor8: pruebaA.valor8,
                    valort: pruebaA.valort,
                });
                  
            });
                console.log('Se ha insertado una prueba A en la tabla pruebaA.');
                console.log('Fecha: '+pruebaA.fecha);
                console.log('Nombre: '+pruebaA.nombreP);
                console.log('Codigo materia: '+pruebaA.codigoM);
                console.log('Seccion: '+pruebaA.seccion);
                console.log('total: '+pruebaA.valor);
              reply.file('./vistas/index.html');
              
            }
            
    }),
    
    server.route({
        method: 'POST',
        path: '/insertarPruebaB',
        handler: function (request, reply) {
            
            var pruebaB={
                
                f4: request.payload.f4,
                f5: request.payload.f5,
                f7: request.payload.f7,
                f8: request.payload.f8,
                f10: request.payload.f10,
                f11: request.payload.f11,
                f12: request.payload.f12,
                f13: request.payload.f13,
                f14: request.payload.f14,
                f15: request.payload.f15,
                f16: request.payload.f16,
                f17: request.payload.f17,
                f18: request.payload.f18,
                f19: request.payload.f19,
                f20: request.payload.f20,
                f21: request.payload.f21,
                f22: request.payload.f22,
                f23: request.payload.f23,
                f24: request.payload.f24,
                f25: request.payload.f25,
                f26: request.payload.f26,
                total: request.payload.total
                
            };
            models.sequelize.sync().then(function(){
                models.pruebaTipoB.create({
                    
                f4: request.payload.f4,
                f5: pruebaB.f5,
                f7: pruebaB.f7,
                f8: pruebaB.f8,
                f10: pruebaB.f10,
                f11: pruebaB.f11,
                f12: pruebaB.f12,
                f13: pruebaB.f13,
                f14: pruebaB.f14,
                f15: pruebaB.f15,
                f16: pruebaB.f16,
                f17: pruebaB.f17,
                f18: pruebaB.f18,
                f19: pruebaB.f19,
                f20: pruebaB.f20,
                f21: pruebaB.f21,
                f22: pruebaB.f22,
                f23: pruebaB.f23,
                f24: pruebaB.f24,
                f25: pruebaB.f25,
                f26: pruebaB.f26,
                    total: pruebaB.total,
                });
                  
            });
                console.log('Se ha insertado una prueba B en la tabla pruebaB.');
                console.log('Fecha: '+pruebaB.f4);
                console.log('Nombre: '+pruebaB.f5);
                console.log('Codigo materia: '+pruebaB.f7);
                console.log('Seccion: '+pruebaB.f8);
                console.log('total: '+pruebaB.total);
              reply.file('./vistas/index.html');
              
            }
            
    }),
    
    server.route({
        method: 'GET',
        path: '/vistas',
        handler: function (request, reply) {
            
            reply.file('./vistas/vistas.html');
        }
    }),
    
    server.route({
        method: 'GET',
        path: '/login',
        handler: function (request, reply) {
            
            reply.file('./vistas/login.html');
        }
    }),
    
    //probando
    server.route({
        method: 'GET',
        path: '/probando',
        handler: function (request, reply) {
            
            reply.file('./vistas/probando.html');
        }
    }),
    
    
    server.route({
        method: 'GET',
        path: '/docente',
        handler: function (request, reply) {
            
            reply.file('./vistas/docente.html');
        }
    }),
    
    //PRUEBA TIPO A
    server.route({
        method: 'GET',
        path: '/pruebaTipoA',
        handler: function (request, reply) {
            
            reply.file('./vistas/pruebaTipoA.html');
        }
    }),
    
    //PRUEBA TIPO B
    server.route({
        method: 'GET',
        path: '/pruebaTipoB',
        handler: function (request, reply) {
            
            reply.file('./vistas/pruebaTipoB.html');
        }
    }),
    
    server.route({
        method: 'GET',
        path: '/prueba1',
        handler: function (request, reply) {
            
            reply.file('./vistas/prueba1.html');
        }
    }),
     server.route({
        method: 'GET',
        path: '/alumno',
        handler: function (request, reply) {
            
            reply.file('./vistas/alumno.html');
        }
    }),
    
    
    server.route({
        method: 'POST',
        path: '/vistas',
        handler: function (request, reply) {
            
             var ip = request.headers['x-forwarded-for'] || request.info.remoteAddress;
         models.sequelize.sync().then(function(){
                models.visitante.create ({
                    
                   IP_address: ip
                });
               models.rutaVisitante.create({
                     path: './visitas',
                     IP_address: ip
                  });
                  
            });   
            console.log('Un visitor mas vistas');
            reply.file('./vistas/vistas.html');
        }
    })
    
});



    server.route({
        method: 'GET',
        path: '/numVisit',
        handler: function (request, reply) {
            
            models.rutaVisitante.findAndCountAll({
                where: {
                    path: './visitas'}}).then(function(result) 
                    {
                        console.log('----------------------------------------');
                        console.log('Numero de visitas en la vista: Visitas: '+result.count);
                        console.log('----------------------------------------');
                    });
                    console.log('----------------------------------------');
                    models.rutaVisitante.findAndCountAll({where: {path:'./'}}).then(function(result) {
                        console.log('Numero de visitas en la vista: index(Home): '+result.count);
                        console.log('----------------------------------------');
                      });
        }
    });
    
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});