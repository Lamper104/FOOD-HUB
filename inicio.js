//iniciar sesion  botoniniciosesion
let botis =document.getElementById("botoniniciosesion");

botis.addEventListener("click",function(){

Swal.fire({
  title: 'Iniciaste sesión!',
  text: "Volver al inicio?",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Confirmar'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      'Confirmado!',
      'Pulsa el otro boton Para volver al Inicio con tu cuenta',
      'success'
    )
  }
})
});

//iniciar sesion  botonregistrarse
let botr =document.getElementById("botonregistrarse");

botr.addEventListener("click",function(){

Swal.fire({
  title: 'Estás registrado!',
  text: "Volver al inicio?",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Confirmar'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      'Confirmado!',
      'Pulsa el otro boton Para volver al Inicio con tu cuenta',
      'success'
    )
  }
})
});