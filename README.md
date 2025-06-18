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

