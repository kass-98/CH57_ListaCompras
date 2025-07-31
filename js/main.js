const btnAgregar = document.getElementById("btnAgregar");
const btnClear = document.getElementById("btnClear");
const txtName = document.getElementById("Name");
const txtNumber = document.getElementById("Number");

const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
const tablaListaCompras = document.getElementById("tablaListaCompras");
const cuerpoTabla = tablaListaCompras.getElementsByTagName("tbody").item(0);

let cont = 0;

function validarCantidad(){
    if(txtNumber.value.length==0){
        return false;
    }
    if(isNaN(txtNumber.value)){
        return false;
    }
    if(Number(txtNumber.value)<=0){
        return false;
    }
    return true;
}
//3.
function getPrecio(){
    return Math.round(Math.random() * 10000) /100;
} //get precio

btnAgregar.addEventListener("click", function(event){
    event.preventDefault();
    let isValid = true;
    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";
    txtName.style.border="";
    txtNumber.style.border="";
   
    if(txtName.value.length<3){
        txtName.style.border="thin red solid";
        alertValidacionesTexto.innerHTML="<strong>El nombre del producto no es correcto</strong>";
        alertValidaciones.style.display="block";
    }
    if(! validarCantidad()){
        txtNumber.style.border="thin red solid";
        alertValidacionesTexto.innerHTML += "<strong>La cantidad no es correcta</strong>";
        alertValidaciones.style.display="block";
        isValid =false;
    }

    if(isValid){
        cont++;
        let precio = getPrecio();
        let row=`<tr>
                    <td>${cont}</td>
                    <td>${txtName.value}</td>
                    <td>${txtNumber.value}</td>
                    <td>${precio}</td>
                </tr>
        `;
        cuerpoTabla.insertAdjacentHTML("beforeend", row);
        txtName.value ="";
        txtNumber.value="";
        txtName.focus();
    }

});

