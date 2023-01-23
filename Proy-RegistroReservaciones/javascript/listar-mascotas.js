const cuerpoTabla = document.querySelector('#listado-mascotas tbody');
const pCelular = document.getElementById('pCelular');
const pNombre = document.getElementById('pNombre');




const llenarTabla = () => {
    cuerpoTabla.innerHTML = '';

    mascotas.forEach(mascotaTemp => {
        let fila = cuerpoTabla.insertRow();

        fila.insertCell().textContent = mascotaTemp.nombre;
        fila.insertCell().textContent = mascotaTemp.animal;
        fila.insertCell().textContent = mascotaTemp.edad;
        fila.insertCell().textContent = mascotaTemp.genero;
        fila.insertCell().textContent = mascotaTemp.calificacion;
        fila.insertCell().textContent = "buton";
        fila.insertCell().textContent = "check";
    })

    document.getElementById("imgPerfil").src = "img/RolandoQuirósArtavia.jpg";
    document.getElementById("pNombre").innerText = "Rolando";
    document.getElementById("pCelular").innerText = "7011-2347";


    const tablaMascotas = document.getElementById("listado-mascotas");
    let filas = tablaMascotas.getElementsByTagName('tbody')[0];

    document.getElementById('numMascotas').innerText = filas.children.length;

};