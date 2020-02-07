function validateForm(){
	/* Escribe tú código aquí */
	var nombre = document.getElementsByTagName('input')[0];
	var apellido = document.getElementsByTagName('input')[1];
	var correo = document.getElementsByTagName('input')[2];
	var contra = document.getElementById('input-password');
	var select = document.getElementsByTagName('select')[0];

	//Función auxiliar
	function alertar(msj,elem){
		var span = document.createElement('span');
		span.innerHTML = msj;
		elem.parentNode.appendChild(span);
	}
	// Validación nombre
	if (nombre.value == '' ){
		alertar('Debes ingresar un nombre', nombre);
	} else if(!nombre.value.match(/^[a-zA-Z]+$/)){
		alertar('Debes usar solamente letras', nombre);
	} else if(nombre.value[0]!=nombre.value[0].toUpperCase()){
		alertar('Debe comenzar con mayúsculas', nombre);
	}
	// Validación apellido
	if (apellido.value == '' ){
		alertar('Debes ingresar un apellido', apellido);
	} else if(!apellido.value.match(/^[a-zA-Z]+$/)){
		alertar('Debes usar solamente letras', apellido);
	} else if(apellido.value[0]!=apellido.value[0].toUpperCase()){
		alertar('Debe comenzar con mayúsculas', apellido);
	}
	// Validación e-mail
	if (correo.value == '' ){	
		alertar('Debes ingresar un correo', correo);
	} else if(!correo.value.match(/^\w+@\w+\.\w+$/)){
		alertar('Debes ingresar un e-mail con un formato válido. ej:name@domain.com', correo);
	}
	//Validación password
	if (contra.value == '' ){
		alertar('Debes ingresar una contraseña', contra);
	} else if(contra.value.length < 6 ){
		alertar('La contraseña debe tener al menos 6 caracteres', contra);
	} else if(contra.value=='password' || contra.value=='123456' || contra.value=='0987654'){
		alertar('El campo password no puede ser igual a "password" ó "123456" ó "098754"',contra);
	}
	// Validación selección de bicis
	if ( select.value == 0){
		alertar('Debes seleccionar una opción de bici', select);
	}
}
