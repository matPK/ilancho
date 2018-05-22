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
function Consiste(tem_erro, tag_id) {
	const tag = Get_Tag(tag_id);
	if (tem_erro(tag.value)) {
		tag.classList.add('is-invalid');
		tag.addEventListener('change', () => {
			tag.classList.remove('is-invalid');
		});
		return false;
	}
	return true;
}

function Consiste_Numerico(tag_id) {
	return Consiste(function(num){
		return (!$.isNumeric(num) || num == "");
	}, tag_id);
}

function Consiste_Select(tag_id) {
	return Consiste(function(val){
		return (!val || val == '' || val == 0 || val == 'X');
	}, tag_id);
}

function Consiste_Multiplo_De(tag_id, numero) {
	return Consiste(function(val){
		val = val.replace('.', '').replace(',', '.');
		return (val % 1 != 0) || (val % numero != 0);
	}, tag_id);
}

function Consiste_Sexo(tag_id) {
	return Consiste(function(sexo){
		return (sexo != "F" && sexo != "M");
	}, tag_id);
}

function Consiste_Facebook(tag_id) {
	return Consiste(function(facebook){
		return (facebook == "" || facebook.indexOf("facebook.com") < 0);
	}, tag_id);
}

function Consiste_Ano_Fundacao(tag_id) {
	return Consiste(function(ano_fundacao){
		return (ano_fundacao == "");
	}, tag_id);
}

function Consiste_Inscr_Estadual(tag_id) {
	return Consiste(function(inscr_estadual){
		return (inscr_estadual == "");
	}, tag_id);
}

function Consiste_Inscr_Municipal(tag_id) {
	return Consiste(function(inscr_municipal){
		return (inscr_estadual == "");
	}, tag_id);
}

function Consiste_Site(tag_id) {
	return Consiste(function(site){
		return (site.indexOf(".") < 0);
	}, tag_id);
}

function Consiste_Estado(tag_id) {
	return Consiste(function(estado){
		return (!estado || estado == "X" || estado == "0");
	}, tag_id);
}

function Consiste_CEP(tag_id) {
	return Consiste(function(cep){
		if (!cep || cep == '' || cep == 0) {
			return true;
		}
		cep = cep.replace(/-/g, "");	
		return (cep.length != 8 || !$.isNumeric(cep));
	}, tag_id);
}

function Consiste_CNPJ(tag_id) {
	return Consiste(function(cnpj){
		return !isCNPJValid(cnpj);
	}, tag_id);
}


function Consiste_Telefone(tag_id) {
	return Consiste(function(tel){
		tel = Only_Numbers(tel);
		return (tel == "" || tel.length < 8);
	}, tag_id);
}


function Consiste_CPF(tag_id) {
	return Consiste(function(cpf){
		return !Validar_CPF(cpf);
	}, tag_id);
}

function Consiste_Preenchido(tag_id, minimo = 0) {
	return Consiste(function(campo){
		return (campo == "" || !campo || campo.length < minimo);
	}, tag_id);
}

function Consiste_Menor_Que(tag_id, minimo) {
	return Consiste(function(valor){
		valor = valor.replace(',', '.');
		if (!valor) {
			valor = 0.00;
		}
		return (minimo > valor);
	}, tag_id);	
}

function Consiste_Email(tag_id) {
	return Consiste(function(email){
		return !Validate_Email(email);
	}, tag_id);
}

function Consiste_Senha(tag_id, should_confirm = true) {
	return Consiste(function(password){
		return ((!password || password.length < 6) | (
			should_confirm && !Consiste(function(password_confirmation){
				return (
					!password ||
					password.length < 6 ||
					!password_confirmation ||
					password_confirmation.length < 6 ||
					password != password_confirmation
				);
			}, tag_id + '_confirmation')
		));
	}, tag_id);
}

function Consiste_Data_Nasc(tag_id) {
	return (
		Consiste(function(dia){
			return (!dia || dia == '' || dia == 0);
		}, tag_id + '_dia') &
		Consiste(function(mes){
			return (!mes || mes == '' || mes == 0);
		}, tag_id + '_mes') &
		Consiste(function(ano){
			return (!ano || ano == '' || ano == 0);
		}, tag_id + '_ano')
	);
}