var app = angular.module('miTienda',[ ]);

app.controller('tiendaCtrl', ['$scope','$http', function($scope,$http){

	//$scope.articulo = articulo;

	$scope.articulos = {};

	$http.get('fuentes/app7.json').then(function(datos) {

		$scope.articulos = datos.data.articulos;

	})

/* -----FUNCIONES ANTIGUAS ----------
	$scope.botonVisible = function() {
		if($scope.articulo.stock > 0) {
			return false;
		} else {
			return true;
		}
	}

	$scope.comprarArticulo = function() {
		--$scope.articulo.stock;
	}

	$scope.masQuince = function() {
		return($scope.articulo.stock >= 15);
	}

	$scope.menosQuinceHay = function() {
		return($scope.articulo.stock < 15 && $scope.articulo.stock > 0);
	}
*/

	$scope.botonVisible = function(art) {
		if(art.stock > 0) {
			return false;
		} else {
			return true;
		}
	}

	$scope.comprarArticulo = function(art) {
		--art.stock;
	}

	$scope.masQuince = function(art) {
		return(art.stock >= 15);
	}

	$scope.menosQuinceHay = function(art) {
		return(art.stock < 15 && art.stock > 0);
	}

}]);