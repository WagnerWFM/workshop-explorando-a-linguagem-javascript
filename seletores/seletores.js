// Colocan dentro de uma function executa o código javascrip depois de toda a página estiver
// totalmente carregada. RECOMENDADO!

// verifica se todos os campos de usuários estão marcados.
$(function(){
	var selecaoTodosUsuarios = $('#selecao-todos-usuarios');	//input check que deve selecionar todos os usuários.
	var selecaoUsuarios = $('.js-selecao-usuario');	// retorna um array de todos os checkbox que possuem o .class=".js-selecao-usuario"

	selecaoUsuarios.on('click', function(){
		var totalUsuariosSelecionados = selecaoUsuarios.filter(':checked').length;	// filtra os checkbox de cada usuário que está com a propriedade checked(marcado) e retorna a quantidade.
		var checked = selecaoUsuarios.length === totalUsuariosSelecionados;	// ex: selecaoUsuarios = 3 campo que existem, e totalUsuariosSelecionados é igual 3 também, então todos os usários estão marcados.
		selecaoTodosUsuarios.prop('checked', checked);	//cheked: retorna truel ou false.checked é o input de #selecao-todos-usuarios. 

		// console.log('total user selecionados:', totalUsuariosSelecionados );
	});

	// Verifica se o primeiro checkbox (que seleciona todos os usuários) está marcado, caso esteja marca todos
	// os campos (checkbox dos usuários).
	// selecaoUsuarios retorna um array de todos os checkbox dos usuários, selecaoTodosUsuarios, retorna a propriedade checked dele,
	// se está ou não marcada, caso esteja marcado, seta true na propriedade checked dos elementos do array (cada elemento do array são
	// os campos dos usuários )
	selecaoTodosUsuarios.on('click', function(){
		selecaoUsuarios.prop('checked', selecaoTodosUsuarios.prop('checked'));
	});

});	
