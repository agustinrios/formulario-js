function validar() {
	//guardar valores
	var nombre, apellido, correo, telefono, usuario, contraseña, expresion;
	nombre = document.getElementById("nombre").value;
	apellido = document.getElementById("apellido").value;
	correo = document.getElementById("correo").value;
	telefono = document.getElementById("telefono").value;
	usuario = document.getElementById("usuario").value;
	contraseña = document.getElementById("contraseña").value;

	expresion = /\w+@\w+\.+[a-z]/
     
     //campos con informacion
	if (nombre === "" ) {
		alert("el campo nombre esta vacio");
		return false;
	}
	else if (apellido === "" ) {
		alert("el campo apellido esta vacio");
		return false;
	}
	else if (correo === "" ) {
		alert("el campo correo esta vacio");
		return false;
	}
	else if (telefono === "" ) {
		alert("el campo telefono esta vacio");
		return false;
	}
	else if (usuario === "" ) {
		alert("el campo usuario esta vacio");
		return false;
	}
	else if (contraseña === "" ) {
		alert("el campo contraseña esta vacio");
		return false;
	}
    
    //caracteres

    else if (nombre.length>30) {
		alert("el nombre es muy largo");
		return false;
	}
	else if (apellido.length>30) {
		alert("el apellido es muy largo");
		return false;
	}
	else if (correo.length>60) {
		alert("el correo es muy largo");
		return false;
	}
	else if (!expresion.test(correo)) {
		alert("el correo no es valido");
		return false;
	}
	else if (telefono.length>10) {
		alert("el telefono es muy largo");
		return false;
	}
	else if (isNaN(telefono)) {
		alert("el telefono ingresado no es valido");
		return false;
	}
	else if (usuario.length>20) {
		alert("el usuario es muy largo");
		return false;
	}
	else if (contraseña.length>20) {
		alert("la contraseña es muy larga");
		return false;
	}
}

