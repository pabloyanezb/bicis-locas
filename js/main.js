function validateForm(){
	/* Escribe tú código aquí */
	var nombre = document.getElementsByTagName('input')[0];
	var apellido = document.getElementsByTagName('input')[1];
	var correo = document.getElementsByTagName('input')[2].value;
	var contra = document.getElementById('input-password').value;
	var select = document.getElementsByTagName('select')[0].value;

	// Verifica si los campos están vacíos
	if (nombre.value == '' || apellido== '' || correo== '' || contra == ''){
		// var span_name = document.createElement('span');
		// span_name.innerHTML = 'Debes llenar TODOS los campos';
		// nombre.parentNode.appendChild(span_name);
	}
	// Validación nombre
	if (nombre.value == '' ){
		var span_name = document.createElement('span');
		span_name.innerHTML = 'Debes ingresar un nombre';
		nombre.parentNode.appendChild(span_name);
	} else if(!nombre.value.match(/^[a-zA-Z]+$/)){
		var span_name = document.createElement('span');
		span_name.innerHTML = 'Debes usar solamente letras';
		nombre.parentNode.appendChild(span_name);
	} else if(nombre.value!=nombre.value.toUpperCase()){
		var span_name = document.createElement('span');
		span_name.innerHTML = 'Debe comenzar con mayúsculas';
		nombre.parentNode.appendChild(span_name);
	}
	// Validación apellido
	if (apellido.value == '' ){
		var span = document.createElement('span');
		span.innerHTML = 'Debes ingresar un apellido';
		apellido.parentNode.appendChild(span);
	} else if(!apellido.value.match(/^[a-zA-Z]+$/)){
		var span = document.createElement('span');
		span.innerHTML = 'Debes usar solamente letras';
		apellido.parentNode.appendChild(span);
	} else if(apellido.value!=apellido.value.toUpperCase()){
		var span = document.createElement('span');
		span.innerHTML = 'Debe comenzar con mayúsculas';
		apellido.parentNode.appendChild(span);
	}
	// Verifica si el nombre y apellido sólo contienen A-Z
	if (!nombre.match(/^[a-zA-Z]+$/) || !apellido.match(/^[a-zA-Z]+$/)){
		// alert('Nombre y Apellido sólamente aceptan caracteres de la A-Z');
		return;
	}
	// Verifica si en nombre y apellido la primera letra es mayúscula
	if (nombre!=nombre.toUpperCase() || apellido!=apellido.toUpperCase()){
		alert('Nombre y apellido deben empezar con una letra mayúscula');
		return;
	}
	// Valida si el campo de e-mail tiene formato válido. ej:name@domain.com
	if (!correo.match(/^\w+@\w+\.\w+$/)){
		alert('El e-mail tiene un formato inválido');
		return;
	}
	// El campo password debe tener al menos 6 caracteres
	if (contra.length < 6 ){
		alert('La contraseña debe tener al menos 6 caracteres');
		return;
	}
	// El campo password no puede ser igual a "password" ó "123456" ó "098754"
	if (contra=='password' || contra=='123456' || contra=='0987654'){
		alert('El campo password no puede ser igual a "password" ó "123456" ó "098754"');
		return;
	}
	// El valor seleccionado de bicis, debe ser una de las opciones presentadas
	if ( select == 0){
		alert('Debes seleccionar una opción de bici');
		return;
	}
}
