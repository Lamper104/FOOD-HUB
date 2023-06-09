//Carrusel
var currentImageIndex = 0;
var carouselImages = document.querySelectorAll('#carouselExampleFade img');
var intervalId;

function startCarousel() {
  intervalId = setInterval(changeImage, 2000); // Cambia la imagen cada 3 segundos
}

function changeImage() {
  carouselImages[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
  carouselImages[currentImageIndex].classList.add('active');
}

function stopCarousel() {
  clearInterval(intervalId);
}

startCarousel();





//enviarcoment
let confirmas =document.getElementById("enviarcoment");

confirmas.addEventListener("click",function(){


Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Your work has been saved',
  showConfirmButton: false,
  timer: 1500
})
      });









/*
  //email
  const { value: email } = await Swal.fire({
    title: 'Input email address',
    input: 'email',
    inputLabel: 'Your email address',
    inputPlaceholder: 'Enter your email address'
  })
  
  if (email) {
    Swal.fire(`Entered email: ${email}`)
  }

  //password
  const { value: password } = await Swal.fire({
    title: 'Enter your password',
    input: 'password',
    inputLabel: 'Password',
    inputPlaceholder: 'Enter your password',
    inputAttributes: {
      maxlength: 10,
      autocapitalize: 'off',
      autocorrect: 'off'
    }
  })
  
  if (password) {
    Swal.fire(`Entered password: ${password}`)
  }


  //comentarios
  const { value: text } = await Swal.fire({
    input: 'textarea',
    inputLabel: 'Message',
    inputPlaceholder: 'Type your message here...',
    inputAttributes: {
      'aria-label': 'Type your message here'
    },
    showCancelButton: true
  })
  
  if (text) {
    Swal.fire(text)
  }


  //elegi la empanada
  const { value: fruit } = await Swal.fire({
    title: 'Select field validation',
    input: 'select',
    inputOptions: {
      'Fruits': {
        apples: 'Apples',
        bananas: 'Bananas',
        grapes: 'Grapes',
        oranges: 'Oranges'
      },
      'Vegetables': {
        potato: 'Potato',
        broccoli: 'Broccoli',
        carrot: 'Carrot'
      },
      'icecream': 'Ice cream'
    },
    inputPlaceholder: 'Select a fruit',
    showCancelButton: true,
    inputValidator: (value) => {
      return new Promise((resolve) => {
        if (value === 'oranges') {
          resolve()
        } else {
          resolve('You need to select oranges :)')
        }
      })
    }
  })
  
  if (fruit) {
    Swal.fire(`You selected: ${fruit}`)
  }



  */



                                     
