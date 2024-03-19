# Etapa de construcción
FROM node:lts-alpine as builder

WORKDIR /app

# Copiamos los archivos de paquete y los instalamos
COPY package*.json ./

RUN npm install

# Copiamos el resto del código de la aplicación y construimos
COPY . .
RUN npm run build

# Etapa base para producción y desarrollo
FROM node:lts-alpine as base

WORKDIR /app

# Copiamos solo las dependencias necesarias y archivos de construcción desde el 'builder'
COPY --from=builder /app .

# Etapa de desarrollo
FROM base as dev

# Instalamos todas las dependencias, incluyendo las de desarrollo
RUN npm install

EXPOSE 3000
CMD ["npm", "run", "dev"]

# Etapa de producción
FROM base as prod

# Aquí, no necesitamos reinstalar o eliminar herramientas de desarrollo, ya que nunca fueron instaladas en esta etapa
EXPOSE 3000
CMD ["npm", "run", "start"]
