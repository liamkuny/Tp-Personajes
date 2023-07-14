# Mi Proyecto

Este es un proyecto de ejemplo que utiliza Express y MS SQL Server para crear una API. Proporciona información sobre cómo levantar el proyecto de manera local, los requisitos de instalación, configuraciones de variables de entorno, scripts de base de datos y cómo probar los endpoints creados.



## Instalación

1. Clona este repositorio en tu máquina local:

git clone <url_del_repositorio>


Reemplaza `<url_del_repositorio>` por la URL del repositorio clonado de Github "https://github.com/liamkuny/Tp-Personajes.git".

2. Abre una terminal o línea de comandos y navega hasta el directorio raíz del proyecto.

3. Ejecuta el siguiente comando para instalar las dependencias necesarias:

npm install

## Configuración de variables de entorno


1. En el .env apracera esto que deberas modificar para utilizar la base de datos:

DB_SERVER=nombre_del_servidor


Asegúrate de reemplazar `nombre_del_servidor`, por el "Server Name" que te da al abrir la base de datos "Microsoft Sql Server".

## Scripts de base de datos

1. Deberas arrastrar el archivo de la base de datos "Dai-Personajes.sql" dentro de una base de datos creada anteriormente, y apretar arriba en Execute
2. Deberas arrastrar el archivo de login a la base de datos que es "CreateLoginAndUser.sql", y apretar Execute


## Levantar el proyecto de manera local

Para levantar el proyecto y hacerlo funcionar de manera local, sigue estos pasos:

1. Asegúrate de tener una base de datos MS SQL Server configurada y accesible.

2. Asegúrate de haber configurado correctamente las variables de entorno en el archivo `.env`.

3. Ejecuta el siguiente comando para iniciar el proyecto con Nodemon:

npm start

markdown
Copy code

Nodemon iniciará tu aplicación y la supervisará en busca de cambios. Verás mensajes en la terminal que indican que Nodemon está en funcionamiento y el servidor se ha iniciado correctamente.

## Probar los endpoints

Una vez que el proyecto esté en funcionamiento, puedes probar los endpoints creados utilizando una herramienta como Postman o cURL. Aquí tienes los pasos a seguir:

1. Abre Postman o cualquier otra herramienta similar.

2. Realiza una solicitud HTTP a la siguiente URL:

http://localhost:3000/ruta_del_endpoint

markdown
Copy code

Reemplaza `ruta_del_endpoint` por la ruta del endpoint que deseas probar.

3. Verifica las respuestas y los resultados obtenidos.

¡Listo! Ahora puedes levantar el proyecto de manera local, probar los endpoints y realizar las modificaciones necesarias según tus requerimientos.

## Licencia

Este proyecto está bajo la licencia ISC. Consulta el archivo [LICENSE](LICENSE) para obtener más detalles.
Recuerda reemplazar <url_del_repositorio> con la URL correcta del repositorio y revisar los pasos y configuraciones según tus necesidades específicas.