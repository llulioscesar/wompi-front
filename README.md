# Proceso de Pago con Tarjeta de Crédito

Este proyecto implementa un flujo de pago con tarjeta de crédito como parte de un proceso de incorporación para una tienda en línea. Se trata de una aplicación de una sola página (SPA) centrada en dispositivos móviles, que permite a los usuarios comprar un producto y pagar utilizando sus datos de tarjeta de crédito.

## Proceso del Negocio

El proceso de negocio se divide en cuatro pasos principales:

1. **Selección de Producto**: La aplicación muestra un producto de la tienda con su información y precio.
2. **Datos de Pago**: Al seleccionar "Pagar con tarjeta de crédito", se abre un modal para que el usuario introduzca los datos de su tarjeta.
3. **Resumen y Pago**: Se muestra un resumen del pago y se solicita la confirmación del usuario.
4. **Resultado de la Transacción**: La aplicación muestra el resultado de la transacción, que puede ser exitoso o fallido.

## Diseño de la interfaz de usuario

[Diseño en Figma](https://www.figma.com/file/QspMpEDNzREoQbazG1VmJZ/Wompi?type=design&node-id=2%3A2&mode=design&t=UucIcpHAr54e3e6V-1)

### Diseño para Escritorio
![ui-desk.jpg](doc%2Fui-desk.jpg)

### Diseño para Móviles
![ui-mobile.jpg](doc%2Fui-mobile.jpg)

## Requisitos Mínimos

- Desarrollo en ReactJS (v18+) o VueJS (v2+) con la última versión LTS de Node.js.
- Diseño responsivo centrado en móviles, con un mínimo de referencia de tamaño de pantalla de un iPhone SE (2020).
- Uso obligatorio de Redux o Vuex, siguiendo los principios de la arquitectura Flux.
- Almacenamiento de los datos de transacción en el estado de la aplicación y en localStorage.
- Creación de pruebas unitarias con Jest, alcanzando más del 80% de cobertura.

## Despliegue

La aplicación debe ser desplegada en AWS, utilizando preferentemente opciones de nivel gratuito.

## Evaluación

Se evaluará la aplicación en base a la calidad de la UI/UX, la cobertura de las pruebas unitarias, la funcionalidad completa del proceso de pago y la adherencia a las mejores prácticas de seguridad y desarrollo.

## Instrucciones para Ejecutar y Probar la Aplicación

### Variables de Entorno
 - `API_URL`: URL de la API para obtener datos del lado del servidor.
 - `NEXT_PUBLIC_API_URL`: URL de la API para obtener datos del lado del cliente.

(Sigue con instrucciones detalladas para la configuración, ejecución y prueba de la aplicación.)

## Contribuciones

Los pull requests deben hacerse en ramas separadas y dirigirse a la rama principal para revisión y fusión.

---

Nota: Este proyecto es una demostración y no debe utilizarse con datos reales de tarjetas de crédito