document.addEventListener('DOMContentLoaded', function () {
    // Tu código JavaScript aquí
    // Obtener referencias a los elementos del DOM
    const valorUsuarioTextarea = document.getElementById('valorUsuario');
    const encriptarBtn = document.getElementById('encriptar');
    const desencriptarBtn = document.getElementById('desencriptar');
    const resultadoDiv = document.getElementById('mostrarValorUsuario');
    const copiarBtn = document.getElementById('copiar');


    // Agregar eventos de clic a los botones
    encriptarBtn.addEventListener('click', () => {

        const textoOriginal = valorUsuarioTextarea.value;
        const textoEncriptado = encriptarTexto(textoOriginal);
        resultadoDiv.value = textoEncriptado;


    });

    desencriptarBtn.addEventListener('click', () => {
        const textoEncriptado = valorUsuarioTextarea.value;
        const textoDesencriptado = desencriptarTexto(textoEncriptado);

        
        resultadoDiv.value = textoDesencriptado;

        /*  resultadoDiv.textContent = textoDesencriptado;  */
    });

    // Función para encriptar texto
            
    document.getElementById("encriptar").addEventListener("click", function () {
        var valorUsuario = document.getElementById("valorUsuario").value;
        if (valorUsuario.trim() === "") {
            document.getElementById("munieco").style.visibility = "visible";
            document.getElementById("noFueEncontrado").style.visibility = "visible";
            document.getElementById("mensaje").style.visibility = "visible";
            document.getElementById("copiar").style.visibility = "hidden";
        } else {
            document.getElementById("munieco").style.visibility = "hidden";
            document.getElementById("noFueEncontrado").style.visibility = "hidden";
            document.getElementById("mensaje").style.visibility = "hidden";
            document.getElementById("copiar").style.visibility = "visible";

            // Aquí deberías realizar la encriptación y mostrar el resultado
            document.getElementById("mostrarValorUsuario").value = encriptarTexto(valorUsuario);
        }
    });

    function encriptarTexto(texto) {
        // Implementa la lógica de encriptación aquí
        // Ejemplo simple: revertir el texto
        return texto.split('').reverse().join('');
    }

    function encriptarTexto(texto) {
        return texto.replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');

    }

    // Función para desencriptar texto
    function desencriptarTexto(texto) {
        return texto.replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    }


    // Función para copiar texto al portapapeles
    copiarBtn.addEventListener('click', () => {
        const textoResultado = resultadoDiv.value;
        navigator.clipboard.writeText(textoResultado).then(() => {
            console.log("Entonces...")
        }).catch((err) => {
            console.error('Error al copiar texto:', err);
        });
    });

});


