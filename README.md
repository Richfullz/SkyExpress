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
## Para empezar importamos los paquetes que instalamos anteriormente y hacemos la peticion get /tiempo/:ciudad (empece cogiendo una ciudad Española no :ciudad que es global, tu puedes coger la que quieras, 
## si eres de otro pais ciudad coge otros datos que más te interesen, cogi los datos que se mostraban en postman y puse la url weatheapi y añadi e ${apikey} poniendo la variable apiKey que dentro puse la variable WEATHER_API_KEY que ahi dentro esta mi apikey y ${ciudad} es global.
## después creé un bucle try catch para verificar que si funciona o no la petición en el servidor.

# VSCODE FRONT-END
## Lo primero que hice fue hacer una plantilla en Figma para hacerme una idea de lo que queria hacer.
### ![image](https://github.com/user-attachments/assets/4103eb13-2006-4141-ab5d-8666c7e75cf4)
## Después de hacer el diseño en Figma empece por la estructura html
### ![image](https://github.com/user-attachments/assets/d662ea2e-beaf-4557-ba6f-3e2e30f128b4)
## Luego fuí a lo mas importante a crear la lógica en JS para hacer que todo funcionara según mi idea del proyecto haciendo peticiones fetch al servidor y hacen un bucle then-catch para verificar que los datos del servidor vienen correctamente o no y una vez verificados correctamente uso el DOM para mostrarlos en la parte front, luego deje una ciudad por defecto y cree el formulario con un botón que una vez cuando se pulse me muestre los datos de otra ciudad
### ![image](https://github.com/user-attachments/assets/3beec67f-b89c-46b6-b9f6-72570b938e20)
### ![image](https://github.com/user-attachments/assets/3825ff40-a8b8-4457-b4f4-bc7222c5ce76)
### ![image](https://github.com/user-attachments/assets/c8617f18-fb54-48a1-b760-78b51e4bb3b3)

## Por ultimo los estilos CSS que le puse al proyecto
### ![image](https://github.com/user-attachments/assets/324fc546-b24b-4026-8a63-8c2cc84629b5)
### ![image](https://github.com/user-attachments/assets/3be9b0f9-0f93-497a-97ea-99f9347a58e5)

# Cosas para Mejorar
## Que el tiempo sea en tiempo real
## Hacerla en formato mobil
## Hacer un pronostico de semanal
## Crear un Radar o un mapa interactivo
## Guardar ubicaciones preferidas
## añadir textos contextuales(por ejemplo si hay previsión de lluvias que ponga "No te olvides del paragüas")
