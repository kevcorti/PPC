# Proyecto Gráfica popular y pensamiento visual como aliados del aprendizaje

![Logo](graficaapp/src/assets/logo_main.png)

## Tecnologías
- Node.js v18 (LTS)
- Express.js (LTS)
- Postgres v14
- React.js v18+
- TailwindCss v3+
- Prisma ORM (LTS)
- CKAN v2.10+

## Instalación
La presente aplicación gráfica popular requiere [Node.js](https://nodejs.org/) v18+ para ejecutarlo. Además, necesita tener instalado [CKAN](https://ckan.org/) 2.10+ para el servidor de almacenamiento. Finalmente, para la base de datos [PostgreSQL](https://www.postgresql.org/) v14+ para almacenar los datos.


### Instalación CKAN usando Docker Compose

Mira este video o link para instalar CKAN.
[Link](https://docs.ckan.org/en/2.9/maintaining/installing/install-from-package.html](https://docs.ckan.org/en/2.9/maintaining/installing/install-from-docker-compose.html)

## Variables de entorno

Antes de ejecutar este proyecto, primero deberá agregar las siguientes variables de entorno a su archivo .env. Cabe recalcar que cada app tiene su propio archivo .env, por lo cual deberá llenar individualmente.

### Frontend

> Note: Debes crear el archivo .env en el directorio graficaapp `Ruta: graficaapp/.env` para ingresar el contenido de las variables de entorno. También, puedes copiar y pegar el contenido del archivo .env.example en el archivo .env que creaste.

`VITE_URL_CKAN_BACKEND` URL del Servidor de CKAN

`VITE_API_CKAN_KEY` API KEY de la cuenta admin o usuario asignado de CKAN

`VITE_PACKAGE_ID_STORAGE` ID del DataSet creado por el mismo admin o usuario asignado

`VITE_URL_BACKEND` URL del BACKEND Node Js/Express.js

### Backend

> Note: Debes crear el archivo .env en el directorio graficaapp `Ruta: backend/.env` para ingresar el contenido de las variables de entorno. También, puedes copiar y pegar el contenido del archivo .env.example en el archivo .env que creaste.

`DATABASE_URL` URL de la Base de Datos (postgresql://<user>:<password>@localhost:5432/<db_name>?schema=public). 

> Nota: No se debe ingresar el usuario Postgres, se recomienda crear otro usuario.

> Nota: Antes de agregar el link de la DB, debes crear primero la base de datos. Primero debes crear un usuario en postgres con el siguiente comando `CREATE USER usuario WITH PASSWORD 'password123';`. Después, crear la base de datos con el siguiente comando `CREATE DATABASE graficapopulardb WITH OWNER <tu_usuario_creado> ENCODING = utf-8'`. Luego crear la URL siguiente el ejemplo de arriba con el nuevo usuario.

`SHADOW_DATABASE_URL` En Caso de Fallar la conexion a DB, copiar el mismo link de "DATABASE_URL" aquí. (Error en Windows)

`PORT` Puerto donde correrá el backend.

## Ejecución

### Correr Frontend
Instalar Nodejs 18+ y ejecutar los siguientes comandos:
```sh
cd graficaapp
npm install
npm run dev
```

Para desplegar la aplicación:
```sh
npm run build
```
Se genera la carpeta /dist con todos los archivo de la app web.

### Correr Backend
Instalar Nodejs y ejecutar los siguientes comandos:
Nota: Es importante correr el comando: `npx prisma db push` para actualizar el contenido de la base de datos.

```sh
cd backend
npm install
npx prisma migrate deploy
npx prisma db push
```
> Nota: Si el comando `npx prisma migrate deploy` genera algún error, solo ejecuta el comando de abajo `npx prisma db push`.

Debes de correr las migraciones, debes correr los script que están en el archivo .sql en la ruta `backend\db.sql` utilizando la interfaz gráfica de Postgres (pgAdmin4). Para poblar la base de datos, después de haber corrido las migraciones.

> Nota: También puedes usar ejecutar el archivo .sql desde la línea de comandos e ingresar siguiente comando: `sudo psql postgresql://<tusuario>:<tupassword>@localhost:5432/graficapopulardb -f db.sql` para poblar la DB sin necesidad de abrir el pgAdmin4.

Después de haber poblado la base de datos, ejecutar el siguiente comando para inicializar el backend.
```sh
npm run dev
```

Para desplegar la aplicación:
```sh
npm start
```

## Colaboradores
Cualquiera duda o novedad escribir a los siguientes correos:

- **Fernando Bucheli | fbucheli@espol.edu.ec** 
- **David Terreros | dterrero@espol.edu.ec** 
