/* SCRIPTS PARA SIMULAR EL FUNCIONAMIENTO (SOLO SIMULAR) */

/* Botón asignar pasaje */
const btnsAdd = document.querySelectorAll('.button__add');

btnsAdd.forEach((btnAdd) => {
    btnAdd.addEventListener('click', (e) => {
        console.log(btnAdd);
        if (!btnAdd.closest(".passenger-list__an-item").classList.contains('selected')) {
            btnAdd.innerHTML = "Desasignar pasaje";
            btnAdd.closest(".passenger-list__an-item").classList.add('selected');
        } else {
            btnAdd.innerHTML = "Asignar pasaje";
            btnAdd.closest(".passenger-list__an-item").classList.remove('selected');
        }
    });
});


/* Cargar Auto en la lista */
function loadCar() {
    document.getElementById('loadedcars').insertAdjacentHTML('beforeend', `<li><p class="patente" contenteditable="true">HRV316</p><p class="marca" contenteditable="true">Renault</p>
    <p class="modelo" contenteditable="true">Clio</p><i class="delete-car"></i></li>`)
}


/* Eliminar Auto de la lista */
const btnsDeleteCar = document.querySelectorAll('.delete-car');

btnsDeleteCar.forEach((btnDeleteCar) => {
    btnDeleteCar.addEventListener('click', (e) => {
        btnDeleteCar.closest("li").remove();
    });
});