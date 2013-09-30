jQuery(document).ready(function(){
	jQuery('.rowHeader').each(function(){
			var linhaAtual = jQuery(this);
			var tdClicavel = linhaAtual.children().first();
			
			tdClicavel.css('cursor', 'hand');			
			tdClicavel.click(function(e) {
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
	
	jQuery('.rowDetail').hide();
});