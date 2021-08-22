# Botlist x Zeew ♥ | Template


archivo `.env`
```js
clientID=
clientSecret=
callbackURL=
token=

# MYSQL DATA
DB_HOST=
DB_NAME=
DB_USER=
DB_PASS=
DB_PORT=
````


# Informacion

## Licencia

```
Copyright (c) 2021 - kamerrezz.com

Por este presente doy la autorizacion para el uso de este proyecto para fines personal, sin comercializar y sin fines terceros, siempre y cuando dejando la licencia y los creditos visibles.

Tomando en cuenta las mejoras o modificaciones minimas para uso propio siempre y cuando dejando los creditos correspondientes.

Uso el uso del codigo creando en este proyecto para mejorar cualquier proyecto similar o diferente sin monetizacion es permitida hasta en un cierto limite.

> Propiedad intelectual

```

## Estructura
  - utils
    - db - Funciones de la base de Datos
    - muddleware - Funciones de la API
    - Schemas - Validaciones de datos
    - ApiDiscord - Funciones de la api de discord y webhooks de discord
  - views
    - bot - Vistas del bot
    - User - Vistas del Usuario
    - partials - codigo html reutilizables
  - Controllers - Rutas
  - Services - Logica
  - routes
    - API
      - Bot - Todo relacionado a bots
      - User - Todo relacionado a User
    - Views - FrontEnd

## Rutas
  - API
    - Bot
      - `[get]` » /api/bot
      - `[get]` » /api/bot/1234567890
      - `[post]` » /api/bot/1234567890
      - `[put]` » /api/bot/1234567890
      - `[delete]` » /api/bot/1234567890
    - User
      - `[get]` » /api/user
      - `[get]` » /api/user/1234567890
      - `[post]` » /api/user/1234567890
      - `[put]` » /api/user/1234567890
      - `[delete]` » /api/user/1234567890
  - Front (TEMPORAL)
    - `[get]` » /bot
    - `[get]` » /bot/1234567890
    - `[get]` » /user/123456789

## Controllers
  - Bot
    - get
    - create
    - update
    - delete

## Schemas - Datos
  - Bot
    - id
    - username
    - shortdesc
    - Longdesc
    - prefix
    - owner
    - team
    - create_at
    - update_at
    - temp_likes
    - temp_dislike
    - likes
    - dislikes
    - tags
    - ispremiun
    - iszeew
    - iszeewTEAM
    - status
  - User
    - id
    - username
    - createdAt
    - information
    - updatedAt
    - last_connection
    - IP
  - Customer
    - isPublic
    - isCustomURL
    - CustomURL
    - isCustomBanner
    - CustomURL
  - Social
    - id
    - Facebook
    - Discord
    - Youtube
    - Twitter
    - Twitch
    - WebSite

 