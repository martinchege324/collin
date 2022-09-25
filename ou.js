$(function(){
	// adds "current" class to navigation link when it matches the current pages url.
	if(/path=([^&]+\.pcf)/.test(window.location.href)){
		url= unescape(window.location.href.match(/path=([^&]+)/)[1]).replace(/\.pcf$/, '.html');
	}else{
		url = window.location.pathname;
	}
	
	$('ul.nav.nav-stacked li a[href="' + url + '"]').addClass('current');
	
	// populates search input field when "q" querystring variable exists.
	var regEx = /[?&]q=([^&]+)/; // regEx to match "q" querystring variable.
	if(regEx.test(window.location.href)){
		$('#search').val(window.location.href.match(regEx)[1]);
	}
});