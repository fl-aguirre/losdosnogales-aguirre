# Los dos nogales

Proyecto Final para la entrega final del curso de Coderhouse.

Los dos nogales es un ecommerce creado con React JS para la venta de productos catamarqueños, principalmente nueces confitadas rellenas de dulce de leche, aceitunas y dulces regionales. La aplicación no está completa (no se puede realizar compras), pero cuenta con las funcionalidades básicas que nos ofrece React.

Características:

- Desarrollado con create-react-app
- Emplea algunas librerías externas
- Cumple con los requisitos obligatorios de la entrega

Cuenta con:

- Vista de catálogo completo de productos con foto, precio y botón para ver detalles. 
- Vista de detalles de productos con foto, descripción, precio, botón (suma y resta) para cantidad, precio por cantidad y botón para agregar al carrito.
- Control de stock para evitar que los usuarios agreguen más items que los disponibles.
- Filtro de productos por categorías en el navegador a partir de la base de datos.
- Carrito de compras con productos seleccionados, botones para quitar productos, limpiar el carrito, consultar otros productos y terminar la compra.
- Formulario para los datos del comprador y procesamiento de la orden de compra.
- Consulta y carga de datos desde y hacia Firebase.
- Almacenamiento y gestión de datos del carrito en LocalStorage.  

## Instalación

1. Requiere [Node.js](https://nodejs.org/es/) para funcionar
2. Realizar fork y clonar el repositorio
3. Ubicarse en el root del proyecto con y correr el comando `npm install`
4. Correr el proyecto con el comando `npm start`
5. Se abrirá la aplicación en http://localhost:3000/ 

## Dependencias y librerías

React Boostrap 5 para dar estilo y formato a la aplicación.

React Router Dom para la navegación entre páginas de la aplicación.

React Font Awesome para íconos y logos (ícono del carrito)

Firebase para la solución de los datos empleados en la aplicación.

## Aplicación en funcionamiento

[Los dos nogales en funcionamiento](https://github.com/fl-aguirre/losdosnogales-aguirre/blob/main/losdosnogales-funcionamiento.gif)

### Autor

Franco Luciano Aguirre

2021 - Curso de React en CoderHouse
