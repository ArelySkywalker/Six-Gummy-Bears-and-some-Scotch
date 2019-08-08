function getBaseUrl() {
	const str = window.location.href;

	var base = new String(str).substring(str.lastIndexOf('/') + 1); 
	if(base.lastIndexOf(".") !== -1) {
		base = base.substring(0, base.lastIndexOf("."));
	}
	return base;
}

function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	return vars;
}

function getUrlParam(parameter, defaultvalue){
	var urlparameter = defaultvalue;
	if(window.location.href.indexOf(parameter) > -1){
		urlparameter = getUrlVars()[parameter];
	}
	return urlparameter;
}


export { getUrlVars, getUrlParam };