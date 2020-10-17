
function validar(){
  let usuario=document.getElementById('email').value;
  let clave= document.getElementById('clave').value;
  let expresion=/\w+@+\w+\.+[a-z]/;
  
  if(usuario===""||clave===""){
      alert("Todos los campos son obligatorios! y no deben estar vacíos!..");
      return false;
    }else if(!expresion.test(usuario)){
          alert("datos inválidos el nombre de usuario debe contener lo siguiente: 'nombreUsuario@correo.extension' ejemplo: 'pepito@gmail.com'");
        return false;
    }else{
        alert("Datos guardados correctamente!");
  }
}