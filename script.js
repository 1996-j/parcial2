
class BibliotecaSorter {
    constructor() {
        this.comparaciones = 0;
        this.intercambios = 0;
    }

    
    resetMetrics() {
        this.comparaciones = 0;
        this.intercambios = 0;
    }

  
    ordenamientoPorInsercion(libros, criterio) {
        console.time('Tiempo de ordenamiento');
        const n = libros.length;
        let arr = [...libros]; 
        
        for (let i = 1; i < n; i++) {
            let elementoActual = arr[i];
            let j = i - 1;
            
            while (j >= 0 && this.comparar(arr[j], elementoActual, criterio) > 0) {
                arr[j + 1] = arr[j];
                j = j - 1;
                this.intercambios++;
                this.comparaciones++;
            }
            arr[j + 1] = elementoActual;
        }
        
        console.timeEnd('Tiempo de ordenamiento');
        return arr;
    }

    
    comparar(a, b, criterio) {
        switch(criterio) {
            case 'titulo':
                return a.titulo.localeCompare(b.titulo);
            case 'anio':
                return a.anio - b.anio;
            case 'reservas':
                return b.reservas - a.reservas; // Orden descendente
            default:
                throw new Error('Criterio de ordenamiento no válido');
        }
    }

    
    analizarRendimiento(libros, criterio) {
        this.resetMetrics();
        
      
        console.log('\nCaso 1: Lista desordenada');
        const resultado1 = this.ordenamientoPorInsercion(libros, criterio);
        console.log(`Comparaciones: ${this.comparaciones}`);
        console.log(`Intercambios: ${this.intercambios}`);
        
       
        this.resetMetrics();
        console.log('\nCaso 2: Lista ya ordenada');
        const resultado2 = this.ordenamientoPorInsercion(resultado1, criterio);
        console.log(`Comparaciones: ${this.comparaciones}`);
        console.log(`Intercambios: ${this.intercambios}`);
        
        
        this.resetMetrics();
        console.log('\nCaso 3: Lista inversamente ordenada');
        const listaInversa = [...resultado1].reverse();
        const resultado3 = this.ordenamientoPorInsercion(listaInversa, criterio);
        console.log(`Comparaciones: ${this.comparaciones}`);
        console.log(`Intercambios: ${this.intercambios}`);
    }

   
    generarDatosPrueba(cantidad) {
        const libros = [];
        const titulos = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'SQL', 'PHP'];
        
        for (let i = 0; i < cantidad; i++) {
            libros.push({
                titulo: titulos[Math.floor(Math.random() * titulos.length)] + ' ' + i,
                anio: 2000 + Math.floor(Math.random() * 24),
                reservas: Math.floor(Math.random() * 200)
            });
        }
        return libros;
    }
}


const sorter = new BibliotecaSorter();


const librosEjemplo = [
    { titulo: "Algoritmos Avanzados", anio: 2018, reservas: 120 },
    { titulo: "Introducción a JavaScript", anio: 2020, reservas: 90 },
    { titulo: "Estructuras de Datos", anio: 2015, reservas: 60 },
    { titulo: "Sistemas Operativos", anio: 2019, reservas: 110 }
];

console.log('\nPruebas con datos de ejemplo:');
console.log('\nOrdenamiento por título:');
sorter.analizarRendimiento(librosEjemplo, 'titulo');

console.log('\nOrdenamiento por año:');
sorter.analizarRendimiento(librosEjemplo, 'anio');

console.log('\nOrdenamiento por reservas:');
sorter.analizarRendimiento(librosEjemplo, 'reservas');


console.log('\nPrueba con conjunto grande de datos (100 libros):');
const librosPrueba = sorter.generarDatosPrueba(100);
sorter.analizarRendimiento(librosPrueba, 'titulo');