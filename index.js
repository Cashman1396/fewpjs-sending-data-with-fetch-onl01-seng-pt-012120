// Add your code here
<<<<<<< HEAD
function submitData( name, email ) {
=======
unction submitData( name, email ) {
>>>>>>> b7a6cba27f215644f27d1817da9e9c0e7f3e29d9
  return fetch( 'http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify( {
        name,
        email
      } )
    } )
    .then( function ( response ) {
      return response.json()
    } )
    .then( function ( object ) {
      document.body.innerHTML = object[ "id" ]
    } )
    .catch( function ( error ) {
      document.body.innerHTML = error.message
    } )
  }
