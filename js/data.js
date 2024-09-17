// Obtener el texto guardado de localStorage
const storedText = localStorage.getItem('textData');

// Mostrar el texto en el elemento con id 'displayText'
document.getElementById('data').textContent = storedText || 'No hay datos guardados.';