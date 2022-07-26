# Next.js Open Jira App
Para correr localmente, se necesita la base de datos.

```sh
# -d detached
docker-compose up -d
```

#### MongoDB URL Local:
```sh
mongodb://localhost:27017/entriesdb
```

#### Configurar variables de entorno
```sh
# Renombrar .env.example a .env
# y configurar sus urls
# ex:

MONGO_URL=mongodb://localhost:PORT/DB_NAME
```