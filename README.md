# Proyecto CRUD con MongoDB y Node.js

## Introducción

Este proyecto tiene como objetivo enseñar cómo utilizar MongoDB para crear una aplicación CRUD (Crear, Leer, Actualizar y Eliminar) usando Node.js. Aprenderás a interactuar con bases de datos MongoDB a través de queries, diseñar un backend con Node.js y a implementar un flujo completo para manipular datos de manera eficiente. El proyecto cubre desde la configuración de la base de datos hasta la implementación de un servidor backend que permite gestionar los datos mediante operaciones CRUD.

## Tecnologías utilizadas

### MongoDB

MongoDB es una base de datos NoSQL orientada a documentos que almacena los datos en formato BSON (una extensión de JSON). Es ideal para aplicaciones que requieren un almacenamiento flexible y escalable de datos sin necesidad de seguir un esquema fijo como las bases de datos relacionales.

### Node.js

Node.js es un entorno de ejecución de JavaScript del lado del servidor. Permite crear aplicaciones rápidas y escalables usando JavaScript en el backend, proporcionando un modelo de entrada/salida sin bloqueo y basado en eventos, ideal para aplicaciones que manejan muchas operaciones simultáneas.

## Cómo ejecutar el proyecto

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/tu_usuario/tu_repositorio.git
   cd tu_repositorio
   ```

2. Instala las dependencias:

   ```bash
   npm i
   ```

3. Configura las credenciales: Crea un archivo .env en la raíz del proyecto

   ```yaml
   MONGODB_URI=mongodb://localhost:27017/
   ```

4. Inicia el servidor:
   ```bash
   node start
   ```

## Comandos

### Explain

#### Ejecución del Comando explain()

      El comando explain() en MongoDB es una herramienta poderosa que te permite obtener información detallada sobre cómo se ejecuta una consulta. Esto es esencial para la optimización del rendimiento, ya que te proporciona una visión interna de cómo MongoDB procesa y ejecuta tus consultas.

#### ¿Qué es explain()?

      El método explain() se puede aplicar a una variedad de operaciones de consulta y comandos, como find(), aggregate(), y count(). Al usar explain(), MongoDB devuelve un documento que describe el plan de ejecución de la consulta, incluyendo detalles sobre el uso de índices, el número de documentos examinados y el tiempo tomado para ejecutar la consulta.

#### Modos de explain()

      MongoDB ofrece varios modos para el comando explain(), cada uno proporcionando un nivel diferente de detalle:

- <u>**queryPlanner**</u>: Proporciona información sobre el plan de consulta elegido por el optimizador de consultas, sin ejecutar la consulta.

- <u>**executionStats**</u>: Ejecuta la consulta y proporciona estadísticas de ejecución detalladas.

- <u>**allPlansExecution**</u>: Ejecuta la consulta y proporciona estadísticas detalladas para todos los planes de consulta considerados.

#### Number Types

      Explicaré los tipos de numeros que ofrece mongoDB para su uso, como por ejemplo en postgres se usa el int, long, float, etc

| Tipo de Dato                        | Descripción                                                                                                 | Tamaño en Bits | Rango de Valores                                                   |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------- | -------------- | ------------------------------------------------------------------ |
| **Integer (int32)**                 | Entero de 32 bits con signo. Usado para almacenar números enteros pequeños.                                 | 32 bits        | -2,147,483,648 a 2,147,483,647                                     |
| **Long (int64)**                    | Entero de 64 bits con signo. Usado para almacenar números enteros grandes.                                  | 64 bits        | -9,223,372,036,854,775,808 a 9,223,372,036,854,775,807             |
| **Double (64-bit)**                 | Número de punto flotante de 64 bits. Usado para almacenar números decimales.                                | 64 bits        | Aproximadamente ±1.7E308 (precisión de 15-17 dígitos)              |
| **High Precision Double (128-bit)** | Número de punto flotante de 128 bits. Usado cuando se requiere una precisión mayor para cálculos decimales. | 128 bits       | Aproximadamente ±1.18E-4932 a ±5.79E4932 (precisión de 33 dígitos) |

## Recursos adicionales

Para acceder al curso completo y seguir paso a paso la creación del proyecto, consulta el siguiente enlace: [MongoDB - The Complete Developer's Guide 2024](https://www.udemy.com/courses/search/?src=ukw&q=MongoDB+-+The+Complete+Developer%27s+Guide+2024)
