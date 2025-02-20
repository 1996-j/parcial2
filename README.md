# 📚 Ordenamiento de Libros con Algoritmo de Inserción

## 📝 Descripción
Este proyecto implementa un sistema de ordenamiento de libros basado en el algoritmo de ordenamiento por inserción en JavaScript. Permite ordenar una colección de libros según diferentes criterios: **título, año de publicación o cantidad de reservas**.

## 🚀 Características
- ✅ Utiliza el algoritmo de **ordenamiento por inserción**.
- ✅ Soporta **múltiples criterios** de ordenamiento.
- ✅ Incluye **métricas de rendimiento** para evaluar eficiencia.
- ✅ Implementado en **JavaScript** y ejecutable en **Node.js**.

# 🛠 Uso

### 🔹 1. Inicialización
```javascript
const sorter = new BibliotecaSorter();
🔹 2. Ordenar libros por criterio
javascript
Copiar
Editar
const librosOrdenados = sorter.ordenamientoPorInsercion(libros, 'reservas');
🔹 3. Evaluar rendimiento
javascript
Copiar
Editar
sorter.analizarRendimiento(libros, 'titulo');
📂 Estructura del Código
El código está estructurado en:

📌 Lista de libros: Array de objetos con información de los libros.
📌 Clase BibliotecaSorter: Implementa el algoritmo de ordenamiento y la función de comparación.
📌 Función ordenamientoPorInsercion: Aplica el ordenamiento según el criterio seleccionado.
📌 Función comparar: Compara los libros según el criterio proporcionado.
📌 Función analizarRendimiento: Evalúa el rendimiento en diferentes escenarios.
📌 Función generarDatosPrueba: Genera datos aleatorios para pruebas.
📊 Ejemplo de Datos
javascript
Copiar
Editar
const libros = [
  { titulo: "Algoritmos Avanzados", anio: 2018, reservas: 120 },
  { titulo: "Introducción a JavaScript", anio: 2020, reservas: 90 },
  { titulo: "Estructuras de Datos", anio: 2015, reservas: 60 },
  { titulo: "Sistemas Operativos", anio: 2019, reservas: 110 }
];
⚙️ Requerimientos
🔧 Node.js instalado para ejecutar el código.
🔮 Posibles Mejoras
🚀 Implementar algoritmos más eficientes para grandes volúmenes de datos (ej. QuickSort, MergeSort).
🔗 Integración con bases de datos para manejar libros en almacenamiento persistente.
🎨 Desarrollo de una interfaz gráfica para mejor interacción.
✍️ Autores
Desarrollado por jeison herney villamil caicedo.
