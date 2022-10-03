# Wheater App

## Arrancar el proyecto
Este proyecto hace llamadas a una API externa, por lo que antes de arrancarlo, debes sustituir el archivo `.env.example` por `.env`, y dentro de éste, la variable `API_KEY` por una apiKey válida. Puedes crear la tuya en : [https://openweathermap.org/price](https://openweathermap.org/price)

## Decisiones de proyecto
Al tratarse de un proyecto corto y de resolución rápida, lo he creado con create-react-app para tener el boilerplate autogenerado.
### Organización
Aunque es un proyecto muy pequeño, he organizado los archivos y carpetas para que éste sea fácilmente escalable. He separado las capas del proyecto siguiendo el principio de responsabilidad única, y por ello he creado un servicio para las llamadas a la API y un modelo para el mapeo de datos necesario para el renderizado en los componentes.
### Estilos
He incluido los estilos mínimos necesarios para hacer la página legible, y utilizado sass como preprocesador CSS (esta decisión ha sido tomada sobre todo para ahorrar tiempo de desarrollo, ya que tengo un boilerplate de uso personal para normalización y variables montado con scss).
### Testing
He creado una suite con las sentencias a testear derivadas de los requerimientos (aparacen comentadas en el código), y desarrollado el primero de los casos.
### Redux
He implantado Redux como solución al requerimiento de que el proyecto tenga varios idiomas. Esta decisión ha venido derivada más de la descripción de los requerimientos (en los que como posible solución se citaba Redux), que por convicción propia, ya que en este caso tan sencillo lo habría manejado con un contexto de React. En cuanto a las traducciones, no he considerado necesario introducir ningún paquete adicional como [react-intl](https://www.npmjs.com/package/react-intl) para no hacer más compleja la solución.


## Próximas iteraciones
En caso de seguir desarrollando este proyecto, los pasos más inmediatos serán:
- Gestión de errores de API
- Loading durante la carga de datos del detalle
- Completar los test-cases