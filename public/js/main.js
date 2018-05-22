function Get_Tag(tag_id) {
	return document.body.querySelector('#' + tag_id);
}

function Validate_Email(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

function Validar_CPF(c){
    c = Only_Numbers(c);

    let i;
    s = c;
    c = s.substr(0, 9);
    let dv = s.substr(9, 2);
    let d1 = 0;

    for (i = 0; i < 9; i++) {
        d1 += c.charAt(i) * (10 - i);
    }
    if (d1 == 0){
        return false;
    }
    d1 = 11 - (d1 % 11);
    if (d1 > 9) {
    	d1 = 0;
    }
    if (dv.charAt(0) != d1){
        return false;
    }

    d1 *= 2;

    for (i = 0; i < 9; i++) {
        d1 += c.charAt(i)*(11-i);
    }

    d1 = 11 - (d1 % 11);

    if (d1 > 9) {
    	d1 = 0;
    }

    if (dv.charAt(1) != d1) {
        return false;
    }

    return true;
}

function isCNPJValid(cnpj) {
	cnpj = Only_Numbers(cnpj);

	if (cnpj == '') {
		return false;
	}
	if (cnpj.length != 14) {
		return false;
	}
	// Elimina CNPJs invalidos conhecidos
	if (
		cnpj == '00000000000000' ||
		cnpj == '11111111111111' ||
		cnpj == '22222222222222' ||
		cnpj == '33333333333333' ||
		cnpj == '44444444444444' ||
		cnpj == '55555555555555' ||
		cnpj == '66666666666666' ||
		cnpj == '77777777777777' ||
		cnpj == '88888888888888' ||
		cnpj == '99999999999999'
	) {
		return false;
	}

	// Valida DVs
	tamanho = cnpj.length - 2
	numeros = cnpj.substring(0, tamanho);
	digitos = cnpj.substring(tamanho);
	soma = 0;
	pos = tamanho - 7;

	for (i = tamanho; i >= 1; i--) {
		soma += numeros.charAt(tamanho - i) * pos--;
		if (pos < 2) {
			pos = 9;
		}
	}

	resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
	if (resultado != digitos.charAt(0)) {
		return false;
	}

	tamanho = tamanho + 1;
	numeros = cnpj.substring(0, tamanho);
	soma = 0;
	pos = tamanho - 7;

	for (i = tamanho; i >= 1; i--) {
		soma += numeros.charAt(tamanho - i) * pos--;
		if (pos < 2) {
			pos = 9;
		}
	}

	resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

	if (resultado != digitos.charAt(1)) {
		return false;
	}

	return true
}

function My_Get_Item(key) {
	const spoil_time = localStorage.getItem(key + '_validade');
	const now = new Date();
	if (spoil_time < now.getTime()) {
		localStorage.removeItem(key);
	}
	return localStorage.getItem(key);
}

function My_Set_Item(key, value) {
	const now = new Date();
	const spoil_time = now.getTime() + 300000; //5 minutos

	localStorage.setItem(key, value);
	localStorage.setItem(key + '_validade', spoil_time);
}

function My_Unset_Item(key) {
	localStorage.removeItem(key);
	localStorage.removeItem(key + '_validade');
}

function My_Is_True(key) {
	const item = My_Get_Item(key);
	return Boolean(parseInt(item));
}

function Only_Numbers(string) {
	return string.replace(/[^\d]+/g, '');
}