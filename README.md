<p align="center">
  <a href="" target="blank"><img src="./frontend/public/tukki.png" width="320" alt="Nest Logo" /></a>
</p>

<p align="center" ><b>Tukki Music App</b>, la aplicación de música de la comunidad.</p>

<p align="center">
    <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
    <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
</p>

# Tukki-Music-App

Esta aplicación con la que podrás escuchar canciones y tener tus propias playlists a la vez que buscar canciones y usuarios.

## Instalación

#### Frontend -- React
```javascript

cd frontend
npm install
npm run start
+ configurar proxy en el package.json

```

#### API y Backoffice

```javascript

cd api
composer update
composer intstall
php artisan serve --host (Tu host) --port (Puerto)

```


## Tecnologías

Para elaborar este proyecto se ha recurrido a la utilización de dos tecnologías actuales muy importantes como son `NestJS` y `ReactJS` o `React`.
Sus repositorios principales:

-  [Laravel](https://github.com/laravel/laravel): Framework de PHP para backend para crear tanto aplicaciones completas como APIs.
-  [React](https://github.com/facebook/react): **Librería** de JavaScript para el diseño de interfaces.

## DB Schema

![Database Schema](./assets/schema.jpg)

## Images

Algunas imágenes de la aplicación:

 -  Login Light

![Login Light](./assets/login-light.jpg)

 -  Login Dark

![Login Dark](./assets/login-dark.jpg)

 -  App Funcionando

![App](./assets/app-3.jpg)

## Proxy 

El problema de las peticiones asincronas de CORS se podria solucionar utilizando un proxy en el propio `package.json`

![Proxy](./assets/proxy.jpg)

## Author

 -  David Fernandez Flores