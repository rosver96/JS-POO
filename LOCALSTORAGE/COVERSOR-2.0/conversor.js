// Importa las funciones de conversión de los módulos correspondientes
import { celsiusToFahrenheit } from './temperatura.js';
import { metrosToPies } from './distancia.js';
import { kilogramosToLibras } from './peso.js';

// Exporta las funciones de conversión para ser utilizadas en el programa principal
export { celsiusToFahrenheit, metrosToPies, kilogramosToLibras }

    const celsiusInput = document.getElementById('celsius');
    const fahrenheitOutput = document.getElementById('fahrenheit');
    const metrosInput = document.getElementById('metros');
    const piesOutput = document.getElementById('pies');
    const kilogramosInput = document.getElementById('kilogramos');
    const librasOutput = document.getElementById('libras');

    const btnTemperatura = document.getElementById('btn-temperatura');
    btnTemperatura.addEventListener('click', () => {
      const celsius = parseFloat(celsiusInput.value);
      const fahrenheit = celsiusToFahrenheit(celsius);
      fahrenheitOutput.value = fahrenheit.toFixed(2);
    });

    const btnDistancia = document.getElementById('btn-distancia');
    btnDistancia.addEventListener('click', () => {
      const metros = parseFloat(metrosInput.value);
      const pies = metrosToPies(metros);
      piesOutput.value = pies.toFixed(2);
    });

    const btnPeso = document.getElementById('btn-peso');
    btnPeso.addEventListener('click', () => {
      const kilogramos = parseFloat(kilogramosInput.value);
      const libras = kilogramosToLibras(kilogramos);
      librasOutput.value = libras.toFixed(2);
    });