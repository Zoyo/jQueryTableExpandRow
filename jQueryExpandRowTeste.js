jQuery(document).ready(function(){
	ativaFuncoesNaTabela();
	
	jQuery('.rowDetail').hide();
});

function movimentaLinhaAcima() {	
	var linhaSelecionada = jQuery('input[type=radio]').filter(':checked');
	
	if(linhaSelecionada.length == 0) {
		alert('Selecione alguém para movimentar sua anta');
		return;
	}
	
	var linhaMaster = linhaSelecionada.parents('tr');
	var linhaMasterAnterior = linhaMaster.prevUntil('.rowHeader').last().prev();
	
	if(linhaMasterAnterior.length < 1) {
		linhaMasterAnterior = linhaMaster.prev();
	}
	
	if(linhaMasterAnterior.length > 0) {	
		var linhaDetalhe = linhaMaster.nextUntil('.rowHeader');		
		var conteudoParaMovimentar = jQuery.merge(linhaMaster, linhaDetalhe);
		
		conteudoParaMovimentar.remove();
		conteudoParaMovimentar.insertBefore(linhaMasterAnterior);
		
		ativaFuncoesNaTabela();
	}
}

function movimentaLinhaAbaixo() {
	var linhaSelecionada = jQuery('input[type=radio').filter(':checked');
	
	if(linhaSelecionada.length == 0) {
		alert('Selecione alguém para movimentar sua anta');
	}
	
	var linhaMaster = linhaSelecionada.parents('tr');
	var linhaDetalhe = linhaMaster.nextUntil('.rowHeader');
	
	if(linhaDetalhe.length > 0) {
		var linhaMasterPosterior = linhaDetalhe.last().next();
	} else {
		var linhaMasterPosterior = linhaMaster.next();
	}
	
	if(linhaMasterPosterior.length > 0) {
		var conteudoParaMovimentar = jQuery.merge(linhaMaster, linhaDetalhe);
		
		var colocarDepoisDestaLinha = linhaMasterPosterior.nextUntil('.rowHeader').last();
		
		if(colocarDepoisDestaLinha.length < 1) {
			colocarDepoisDestaLinha = linhaMasterPosterior;
		}
		
		conteudoParaMovimentar.remove();
		conteudoParaMovimentar.insertAfter(colocarDepoisDestaLinha);
		
		ativaFuncoesNaTabela();
	}		
}

function ativaFuncoesNaTabela() {
	jQuery('.rowHeader').each(function(){
			var linhaAtual = jQuery(this);
			var tdClicavel = linhaAtual.children().eq(1);
			
			tdClicavel.css('cursor', 'hand');
			tdClicavel.unbind('click');
			tdClicavel.bind('click', function(e) {
					var signalClick = jQuery(this);
					e.preventDefault();
					
					if(signalClick.text() == '+') {
						signalClick.text('-');
						signalClick.parent().nextUntil('.rowHeader').show();
					} else {					
						signalClick.text('+');
						signalClick.parent().nextUntil('.rowHeader').hide();
					}
				});
		});
}