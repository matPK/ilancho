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