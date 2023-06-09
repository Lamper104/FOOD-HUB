//SE HA CONFIRMADO TU PEDIDO
let b =document.getElementById("botonConfirma");

b.addEventListener("click",function(){
  Swal.fire(
    //position: 'center',
    'Felicidades!',
    'Se ha confirmado tu pedido!',
    'success'
    //icon: success',
    //title: 'Ingreso exitosamente',
    //showCancelButton: false,
   // timer: 1000;

  )
});






/*iniciar sesión: pedidos
let boton =document.getElementById ("botonp1")

    boton.addEventListener("click",function(){

        let usuario = document.getElementById ("imput1").value //para que solo entre lo que pone el usuario
        let pass = document.getElementById ("imput2").value

        sessionStorage.setItem("nu",usuario)
        sessionStorage.setItem("pa",pass)

        alert("Ingreso Exitoso")
    });
   //console.log(sessionStorage.getItem("nu")) //cuando borro lo de arriba esto sigue estando y guarda el usuraio
   //console.log(sessionStorage.getItem("pa"))
*/


    //Se ha confirmado tu pedido de empanadasliveAlertPlaceholder
    let p1 =document.getElementById("empabotonconfirme");

    p1.addEventListener("click",function(){
      Swal.fire(
        //position: 'center',
        'Se ha confirmado tu pedido de Empanadas!',
        'Dirigete a los medios de pago para confirmar definitivamente el pedido',
        'success'
        //icon: success',
        //title: 'Ingreso exitosamente',
        //showCancelButton: false,
       // timer: 1000;
    
      )
    });

    //pizzbotonconfirme
    let p2 =document.getElementById("pizzbotonconfirme");

    p2.addEventListener("click",function(){
      Swal.fire(
        //position: 'center',
        'Se ha confirmado tu pedido de Pizas!',
        'Dirigete a los medios de pago para confirmar definitivamente el pedido',
        'success'
        //icon: success',
        //title: 'Ingreso exitosamente',
        //showCancelButton: false,
       // timer: 1000;
    
      )
    });


    //burrbotonconfirme
    let p3 =document.getElementById("burrbotonconfirme");

    p3.addEventListener("click",function(){
      Swal.fire(
        //position: 'center',
        'Se ha confirmado tu pedido de Wraps y Burritos!',
        'Dirigete a los medios de pago para confirmar definitivamente el pedido',
        'success'
        //icon: success',
        //title: 'Ingreso exitosamente',
        //showCancelButton: false,
       // timer: 1000;
    
      )
    });


    //tartbotonconfirme
    let p4 =document.getElementById("tartbotonconfirme");

    p4.addEventListener("click",function(){
      Swal.fire(
        //position: 'center',
        'Se ha confirmado tu pedido de Tartas!',
        'Dirigete a los medios de pago para confirmar definitivamente el pedido',
        'success'
        //icon: success',
        //title: 'Ingreso exitosamente',
        //showCancelButton: false,
       // timer: 1000;
    
      )
    });



    //botonbanco
    let banco =document.getElementById("botonbanco");

    banco.addEventListener("click",function(){

    Swal.fire({
      title: 'Ingrese la cuenta bancaria',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(`//apibanco@bind.com.ar/${login}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.json()
          })
          .catch(error => {
            Swal.showValidationMessage(
              `Request failed: ${error}`
            )
          })
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url
        })
      }
    })
  });

  //botonefectivo
  let caja =document.getElementById("botonefectivo");

  caja.addEventListener("click",function(){

  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Se ha confirmado tu pedido en efectivo',
    showConfirmButton: false,
    timer: 1500
  })
});

//confirmar pedido : pedidos abajo de todo

let confir =document.getElementById("botonconfirmar");

confir.addEventListener("click",function(){

Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Has iniciado sesión correctamente!',
  text: "El pedido te llegará lo antes posible",
  showConfirmButton: false,
  timer: 1500
})
});


//cancelar pedido
let bc =document.getElementById("botonCancela");

bc.addEventListener("click",function(){
  Swal.fire({
    title: 'Estas seguro de cancelar el pedido?',
    text: "No vas a poder revertirlo",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Tu pedido ha sido Cancelado!',
        'Puedes intentar otra vez, sino contactanos',
        'success'
      )
    }
  })
}); 


    //Se ha confirmado tu pedido de bebidas
    let b1 =document.getElementById("botbotonconfirme");

    b1.addEventListener("click",function(){
      Swal.fire(
        //position: 'center',
        'Se ha confirmado tu pedido de Bebidas sin alcohol!',
        'Dirigete a los medios de pago para confirmar definitivamente el pedido',
        'success'
        //icon: success',
        //title: 'Ingreso exitosamente',
        //showCancelButton: false,
       // timer: 1000;
    
      )
    });


    //alchbotonconfirme
    let b2 =document.getElementById("alchbotonconfirme");

    b2.addEventListener("click",function(){
      Swal.fire(
        //position: 'center',
        'Se ha confirmado tu pedido de Bebidas con alcohol!',
        'Dirigete a los medios de pago para confirmar definitivamente el pedido',
        'success'
        //icon: success',
        //title: 'Ingreso exitosamente',
        //showCancelButton: false,
       // timer: 1000;
    
      )
    });


    //extbotonconfirme
    let b3 =document.getElementById("extbotonconfirme");

    b3.addEventListener("click",function(){
      Swal.fire(
        //position: 'center',
        'Se ha confirmado tu pedido de Aperitivos Extra!',
        'Dirigete a los medios de pago para confirmar definitivamente el pedido',
        'success'
        //icon: success',
        //title: 'Ingreso exitosamente',
        //showCancelButton: false,
       // timer: 1000;
    
      )
    });


    //veggiebotonconfirme
    let b4 =document.getElementById("veggiebotonconfirme");

    b4.addEventListener("click",function(){
      Swal.fire(
        //position: 'center',
        'Se ha confirmado tu pedido de Veggie Burger!',
        'Dirigete a los medios de pago para confirmar definitivamente el pedido',
        'success'
        //icon: success',
        //title: 'Ingreso exitosamente',
        //showCancelButton: false,
       // timer: 1000;
    
      )
    });


    //pedidopagar
    let p =document.getElementById("pedidopagar");

    p.addEventListener("click",function(){
      Swal.fire(
        //position: 'center',
        'Se ha confirmado tu pedido completo!',
        'Dirigete a los medios de pago para confirmar definitivamente el pedido',
        'success'
        //icon: success',
        //title: 'Ingreso exitosamente',
        //showCancelButton: false,
       // timer: 1000;
    
      )
    });