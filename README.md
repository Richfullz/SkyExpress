# SkyExpress
## ![SkyExpress](https://github.com/user-attachments/assets/8b80fd0a-93df-455c-b259-4870b32fe165)
### ![image](https://github.com/user-attachments/assets/7cf43fc1-864e-46c6-907c-aaf29f366682)

## Es una aplicación del tiempo creada con la api weatherapi apicación gratuita que no muestra la temperatura, la ubicación... y muchas cosas mas en tiempo real

# Pasos que seguir para cogeer los datos de Weather api

## accedemos a la pagina weatherapi, https://www.weatherapi.com/, tambien puedes ver la documentacion creada por la comunidad que explican para coger la apiKeys.....
## ![image](https://github.com/user-attachments/assets/d89ccd2a-cc56-4ea1-90c9-085d14b4d7e4)

## Vamos a SignUp y ponemos todos los datos para registrarnos
### ![image](https://github.com/user-attachments/assets/ce7bed9e-9b9f-433d-b06e-9e23639ebae6)

## una vez registrados, vamos a login ponemos nuestro usuario y contraseña y ya veremos nuestra apiKey (no voy a mostrar esta pagina ya que la apiKey es privada y personal)

# ¿como Hacer invisible la apiKey?
## primero cree un archivo .env, dentro del el creé una variable con la apikey que me dió weatherapi
## luego lo meti en .gitignore para que no me lo subiera a github

# VSCODE Backend
## Me centre primero en el backend, cree un archivo server.js, aqui instalé node_modules, exprees.js, dotenv, es para coger los datos el archivo .env  y cors es un paquete que conecta con express,es un mecanismo que
## permite a los servidores indicar qué orígenes (dominios) están autorizados para acceder a sus recursos

## para ello use la consola con git bash(cada uno puede usar el que quiera poweshell....) y use npm
## npm install cors
## npm install dotenv
## npm install express
## node -v / npm -v
## Una vez hecho todo esto, use la petición Get: es una solicitud HTTP que se utiliza para pedir los datos a un servidor, es el metodo mas común para leer o consultar información.
## Tambien use postman para verificar que los datos a través de la peticion get llegarán correctamente
## aqui puse mi petición Get lo siguiente después de la ? escribo mi apiKey(la de los demas será difernte)
## ![image](https://github.com/user-attachments/assets/38939357-0a63-4e25-aa07-35c31caf2bf3)

## use estos parametros, que tenemos en los documentos de la pagina weaderapi:
### ![image](https://github.com/user-attachments/assets/f49bc78f-d7b3-4525-897c-c2ff7de3dc64)
## Una vez puesto nuestros datos correctamente nos saldrá esto:
### ![image](https://github.com/user-attachments/assets/909672a6-5599-4eae-a21a-54af5517ac60)
## Estos son los datos que vamos a coger y mostrarlos en el frontend(eso después, hay mas datos abajo)
## una vez tengamos todo correcto vamos con el código
### ![image](https://github.com/user-attachments/assets/ab67f5b8-a280-4b4b-9d7d-8c627de938ab)
## Para empezar importamos los paquetes que instalamos anteriormente y hacemos la peticion get /tiempo/:ciudad (empece cogiendo una ciudad Española no :ciudad que es global, tu puedes coger la que quieras, ## si eres de otro pais ciudad, en mi caso para verificar que me llegaba correctamente en Postman), cogi los datos que se me mostraban en postman y puse la url weatheapi y añadi e ${apikey} poniendo la 
## variable apiKey que dentro puse la variable WEATHER_API_KEY que ahi dentro esta mi apikey y ${ciudad} es global, lo dicho anteriormente si tu quieres poner una ubicación exacta pones la que quieras.
## despues creé un bucle try catch para verificar que si funciona o no la peticion.
