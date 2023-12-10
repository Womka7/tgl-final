# Reto Modulo 3 Mascotas endpoint

VeterinApp simplifica el agendamiento de citas veterinarias al permitir a los usuarios registrar información sobre sus mascotas y programar citas con facilidad. La aplicación genera automáticamente tarjetas con detalles de las citas, ofreciendo una gestión organizada. Los usuarios pueden eliminar o actualizar citas, brindando una experiencia conveniente para cuidar de sus mascotas. 

¡Bienvenido a VeterinApp, donde cuidar de tus mascotas es tan sencillo como hacer clic!

# Integrantes
* Karina Pineda Parra
* Simon Orozco Henao
* David Peláez V
* Sara Foronda
* Carlos Ortiz

## API

### Descripción
Para nu---------

### Endpoints
1. *GET /api/cards/*
- Descripción: Obtiene todas las citas programadas en el sistema.
- Ejemplo de uso:
     bash
     curl -X GET http://localhost:3000/cards
     
2. *POST /api/cards*
   - Descripción: Registra una nueva cita en el sistema.
   - Ejemplo de uso:
     bash
     curl -X POST http://localhost:3000/cards
     

     bash
    {
        "name": "Firulais",
        "age": 7,
        "sex": "masculino",
        "date": "2024-02-24",
        "description": "Tiene dolor de patas"
    }
     
3. *DELETE /api/cards/id*
   - Descripción: Elimina una cita específica según su ID.
   - Parámetros:
     - id: ID del elemento a eliminar.
   - Ejemplo de uso:
     bash
     curl -X DELETE http://localhost:3000/cards/id
     
4. *PATCH /api/cards/:id*
   - Descripción: Actualiza parcialmente la información de una cita específica según su ID.
   - Parámetros:
     - id: ID del elemento a actualizar.
     - parametro1: Descripción del parámetro.
   - Ejemplo de uso:
     bash
     curl -X PUT -d "parametro1=nuevo_valor" http://tu-api.com/api/endpoint3/123
    
     bash
    {
        "name": "NiñoBrown",
        "description": "Tiene dolor de uñas"
    }
     
### Tecnologías Utilizadas
- Se utilizó para el Frontend -React, Bootstrap y Scss
- Se utilizó para el Backend - Node.js, Express.js Docker y postgresql 

## Instalación y Uso
Para instalar el proyecto primero 

bash
# clonar Repositorio
git clone https://github.com/Karinagth1/tgl-final.git
# Configurar las variables de entorno .env que contiene la sgte información para la conexión

 bash
        PG_USER= 'topgunlab'
        PG_HOST= 'localhost'
        PG_DATABASE= 'topgunlab'
        PG_PASSWORD= 'topgunlab'
        PG_PORT= 5433 
        JWT_KEY='myToken'
        API_TOKEN='myToken'
        SESSION_SECRET='myToken'

# Luego se debe instalar dependencias 
cd client
npm i 
cd server
npm i 
# En seguida en server se debe correr 

cd server
docker compose up 
npm run start
# Iniciar la aplicación
cd client 
npm run dev



## Nota
- El historial del proyecto inicialmente lo trabajamos desde el repositorio que relacionamos a continuación
bash
 git https://github.com/carlospianoforte/reto3-main.git

  ya que teniamos mayores avances, y donde se trabajaron la mayor parte de los cambios, el resultado final 
bash
 git https://github.com/Karinagth1/tgl-final.git
```
    lo compartimos en el repo que enviamos del proyecto por correo y por ello en ese no hay mucha trazabilidad de cambios
SESSION_SECRET='myToken'