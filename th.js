$(document).ready (function () {
	$("li").hover (function() {
		var div = $("div#bottom-panel-img");
		if (this.id=="menu-item-i") {
		    div.toggleClass("hov-on-I");
		} else if (this.id=="menu-item-wish") {
		    div.toggleClass("hov-on-wish");
		} else if (this.id=="menu-item-it") {
		    div.toggleClass("hov-on-it");
		} else if (this.id=="menu-item-could") {
			div.toggleClass("hov-on-could");
		} else if (this.id=="menu-item-last") {
		    div.toggleClass("hov-on-last");
		} else if (this.id=="menu-item-forever") {
		    div.toggleClass("hov-on-forever");
		};
	});
	
});