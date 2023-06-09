//boton1

let p1 =document.getElementById("promo1");

  p1.addEventListener("click",function(){

const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Estas seguro de obtener este cupón?',
    text: "Solo podrás usar un cupón por pedido",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, obtenerlo!',
    cancelButtonText: 'No, cancelar',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'Confimrado!',
        'Tu pedido de cupón se confirmó, aprovéchalo!',
        'success'
      )
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelado',
        'Tu pedido de cupón se ha cancelado',
        'error'
      )
    }
  })
});


let p2 =document.getElementById("promo2");

  p2.addEventListener("click",function(){

const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Estas seguro de obtener este cupón?',
    text: "Solo podrás usar un cupón por pedido",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, obtenerlo!',
    cancelButtonText: 'No, cancelar',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'Confimrado!',
        'Tu pedido de cupón se confirmó, aprovéchalo!',
        'success'
      )
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelado',
        'Tu pedido de cupón se ha cancelado',
        'error'
      )
    }
  })
});



let p3 =document.getElementById("promo3");

  p3.addEventListener("click",function(){

const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Estas seguro de obtener este cupón?',
    text: "Solo podrás usar un cupón por pedido",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, obtenerlo!',
    cancelButtonText: 'No, cancelar',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'Confimrado!',
        'Tu pedido de cupón se confirmó, aprovéchalo!',
        'success'
      )
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelado',
        'Tu pedido de cupón se ha cancelado',
        'error'
      )
    }
  })
});



let p4 =document.getElementById("promo4");

  p4.addEventListener("click",function(){

const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Estas seguro de obtener este cupón?',
    text: "Solo podrás usar un cupón por pedido",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, obtenerlo!',
    cancelButtonText: 'No, cancelar',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'Confimrado!',
        'Tu pedido de cupón se confirmó, aprovéchalo!',
        'success'
      )
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelado',
        'Tu pedido de cupón se ha cancelado',
        'error'
      )
    }
  })
});





let p5 =document.getElementById("promo5");

  p5.addEventListener("click",function(){

const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Estas seguro de obtener este cupón?',
    text: "Solo podrás usar un cupón por pedido",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, obtenerlo!',
    cancelButtonText: 'No, cancelar',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'Confimrado!',
        'Tu pedido de cupón se confirmó, aprovéchalo!',
        'success'
      )
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelado',
        'Tu pedido de cupón se ha cancelado',
        'error'
      )
    }
  })
});





let p6 =document.getElementById("promo6");

  p6.addEventListener("click",function(){

const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Estas seguro de obtener este cupón?',
    text: "Solo podrás usar un cupón por pedido",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, obtenerlo!',
    cancelButtonText: 'No, cancelar',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'Confimrado!',
        'Tu pedido de cupón se confirmó, aprovéchalo!',
        'success'
      )
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelado',
        'Tu pedido de cupón se ha cancelado',
        'error'
      )
    }
  })
});





let p7 =document.getElementById("promo7");

  p7.addEventListener("click",function(){

const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Estas seguro de obtener este cupón?',
    text: "Solo podrás usar un cupón por pedido",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, obtenerlo!',
    cancelButtonText: 'No, cancelar',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'Confimrado!',
        'Tu pedido de cupón se confirmó, aprovéchalo!',
        'success'
      )
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelado',
        'Tu pedido de cupón se ha cancelado',
        'error'
      )
    }
  })
});





let p8 =document.getElementById("promo8");

  p8.addEventListener("click",function(){

const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Estas seguro de obtener este cupón?',
    text: "Solo podrás usar un cupón por pedido",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, obtenerlo!',
    cancelButtonText: 'No, cancelar',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'Confimrado!',
        'Tu pedido de cupón se confirmó, aprovéchalo!',
        'success'
      )
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelado',
        'Tu pedido de cupón se ha cancelado',
        'error'
      )
    }
  })
});