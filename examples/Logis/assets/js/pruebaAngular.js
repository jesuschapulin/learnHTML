var ANG = angular.module("app", []).config(
		function($sceProvider) {
			$sceProvider.enabled(false);
		});

ANG.controller("controllerPrueba", function($scope, $http, $sce){
	
	$scope.response=[];
	$scope.getjson = function(){
		console.log("cargando json: ");
		$http.get("http://127.0.0.1:9999/service/getartsPage/medicina/10").then(function(response){
			$scope.response = response.data;
			console.log($scope.response);
		}).catch(function(err){
			console.log(err.message);
		});
	};
	
	(function($){
		$.noConflict();
		$(document).ready(function(){
				
				
		});
	})(jQuery);

});
function getParametroURL(parametro){
	var windows=""+window.parent.location;
	console.log("window:::"+windows.split("="));
	var parametros = window.parent.location.search.substring(1).split('&');

	for (var i = 0; i < parametros.length; i++){
		if (parametros[i].indexOf(parametro + '=') != -1){
			return decodeURI(parametros[i].split('=')[1]);
		}
	}
	return "";
}
