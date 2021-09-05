

function insertText(e,saludo) {
	console.log("saludo",saludo)
	console.log("aaa2",$('span[data-slate-zero-width="z"]'))	
	console.log("aaa",$('div[data-slate-object="block"]'))
	$('div[data-slate-object="block"]').click();
	
	
	$('span[data-slate-zero-width="z"]').text(""+saludo+", blep blop - https://bit.ly/3tgcCq1 ");
		var e = $.Event( "keypress", { which: 13 } );
	$('span[data-slate-zero-width="z"]').trigger(e);
	$('span[data-slate-zero-width="z"]').parent().trigger(e);
	$('span[data-slate-zero-width="z"]').parent().parent().trigger(e);
	$('span[data-slate-zero-width="z"]').parent().parent().parent().trigger(e);

	console.log("aaa2",$('span[data-slate-zero-width="z"]'))

	return "";
}

