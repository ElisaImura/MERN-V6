function decline(element) {
    element.closest(".request").remove();
    var num_req = document.getElementById("num_req").innerText;
    num_req--;
    document.getElementById("num_req").innerText = num_req;
}

function accept(element) {
    element.closest(".request").remove();
    var num_req = document.getElementById("num_req").innerText;
    num_req--;
    document.getElementById("num_req").innerText = num_req;

    var num_con = document.getElementById("num_con").innerText;
    num_con++;
    document.getElementById("num_con").innerText = num_con;
}

function cerrarSesion(elementoBotonCerrar){
    console.log(elementoBotonCerrar);
    setTimeout(mostrarAlerta, 1000);
}

function abrirModal(elementoEditarPerfil){
    let modal = document.querySelector('.modal');
    modal.classList.remove('hidden');

    let contenedorPrincipal = document.querySelector('.content');
    contenedorPrincipal.classList.add('opacidad');

    let nombreUsuario = document.querySelector('#userName').innerText;
    let ciudad = document.querySelector('#ciudad').innerText;

    document.querySelector('#editar-nombre').value = nombreUsuario;
    document.querySelector('#editar-ciudad').value = ciudad;
}

function actualizarDatos(event){
    event.preventDefault();

    let nombreNuevo = document.querySelector('#editar-nombre').value;
    let ciudadNueva = document.querySelector('#editar-ciudad').value;

    if(nombreNuevo === "" || ciudadNueva === ""){
        document.querySelector('.error').innerText = "¡Por favor proporciona ambos nombre y ciudad!";
    }
    else{
        document.querySelector('.error').innerText = "";
        document.querySelector('#userName').innerText = nombreNuevo;
        document.querySelector('#ciudad').innerText = ciudadNueva;
    
        let modal = document.querySelector('.modal');
        modal.classList.add('hidden');
    
        let contenedorPrincipal = document.querySelector('.content');
        contenedorPrincipal.classList.remove('opacidad'); 
    }
}