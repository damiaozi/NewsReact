function obj2params(obj) {
	let result = '';
	for (let item in obj) {
		result += '&' + item + '=' + encodeURIComponent(obj[item]);

	}
	if (result) {
		result = result.slice(1);
	}
	return result;
}

export function get(url, params, callback) {
	params = obj2params(params);
	if (params) {
		url += (url.indexOf('?') === -1 ? '?' : '&') + params;
	}
	fetch(url).then(function(response) {
			return response.json();
		}).then(function(jsondata) {
			callback(jsondata, null);
		})
		.catch(function(error) {
			console.log(error);
			callback(null, error);
		});
}


export function post(url, params) {

}


export function getJsonp(url, params) {

}