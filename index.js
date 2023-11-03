const formTicket = document.getElementById("formTicket");
const nombre = document.getElementById ("nombre");
const apellido = document.getElementById("apellido")
const categoria = document.getElementById("categoria")
const email = document.getElementById("email");
const cantidad = document.getElementById("cantidad");
const BtnBorrar = document.getElementById("BtnBorrar");
const BtnResumen = document.getElementById("BtnResumen");
const totPagar = document.getElementById("totPagar");


BtnBorrar.addEventListener("click", ()=>{
    formTicket.reset();
    totPagar.textContent = "";
})


BtnResumen.addEventListener("click",()=>{
    let categoriaSelected = Number(categoria.value);
    let cantidadSelected = cantidad.value;
    monto = cantidadSelected * 200;
    montoDesc = aplicarDescuento(monto,categoriaSelected);
    totPagar.textContent = montoDesc;
})

function aplicarDescuento(monto, categoria){
    switch (categoria){
        case 1:
            return monto * 0.2;
        case 2:
            return monto * 0.6;
        case 3:
            return monto * 0.8;
    }
}