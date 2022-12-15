Swal.fire({
    title: 'Al darle a aceptar, confirmas tener mas de 18 años',
    confirmButtonText: 'Confirmo',
    denyButtonText: `No los tengo`,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Bienvenido', '')
    } 
  })