var app = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);
app.factory("services", ['$http', function($http) {
  var serviceBase = 'services/'
    var obj = {};
    obj.getCustomers = function(){
        return $http.get(serviceBase + 'customers');
    }
    obj.getCustomer = function(customerID){
        return $http.get(serviceBase + 'customer?id=' + customerID);
    }

    obj.insertCustomer = function (customer) {
    return $http.post(serviceBase + 'insertCustomer', customer).then(function (results) {
        return results;
    });
	};

	obj.updateCustomer = function (id,customer) {
	    return $http.post(serviceBase + 'updateCustomer', {id:id, customer:customer}).then(function (status) {
	        return status.data;
			
	    });
	};

	obj.deleteCustomer = function (id) {
	    return $http.delete(serviceBase + 'deleteCustomer?id=' + id).then(function (status) {
	        return status.data;
	    });
	};

  obj.getProducts = function() {
    return $http.get(serviceBase + 'products');
  }

  obj.getProduct = function(productID){
        return $http.get(serviceBase + 'product?id=' + productID);
    }


  obj.insertProduct = function (product) {
    return $http.post(serviceBase + 'insertProduct', product).then(function (results) {
        return results;
    });
  };

  obj.updateProduct = function(id,product){
    return $http.post(serviceBase + 'updateProduct', {id:id, product:product}).then(function(status){
      return status.data;
    })
  }

  obj.deleteProduct = function(id,product){
    return $http.delete(serviceBase + 'deleteProduct?id=' + id).then(function (status) {
      return status.data;
    })
  }

 obj.getExercises = function() {
    return $http.get('exercises.json').success(function(data) {
      return data.data;
    })
  }
  

    return obj;   
}]);





app.controller('listCtrl', function ($scope, services) {
    services.getCustomers().then(function(data){
        $scope.customers = data.data;
			console.log(data);
    });
});

app.controller('editCtrl', function ($scope, $rootScope, $location, $routeParams, services, customer) {
    var customerID = ($routeParams.customerID) ? parseInt($routeParams.customerID) : 0;
    $rootScope.title = (customerID > 0) ? 'Edit Customer' : 'Add Customer';
    $scope.buttonText = (customerID > 0) ? 'Update Customer' : 'Add New Customer';
      var original = customer.data;
      original._id = customerID;
      $scope.customer = angular.copy(original);
      $scope.customer._id = customerID;

      $scope.isClean = function() {
        return angular.equals(original, $scope.customer);
      }

      $scope.deleteCustomer = function(customer) {
        $location.path('/');
        if(confirm("Are you sure to delete customer number: "+$scope.customer._id)==true)
        services.deleteCustomer(customer.customerNumber);
      };

      $scope.saveCustomer = function(customer) {
        $location.path('/');
        if (customerID <= 0) {
            services.insertCustomer(customer);
        }
        else {
            services.updateCustomer(customerID, customer);
        }
    };
});





// product list

app.controller ('productListCtrl', function ($scope, services, $log){


  $scope.filteredProducts = []
  ,$scope.currentPage = 1
  ,$scope.numPerPage = 10
  ,$scope.maxSize = 10;

  services.getProducts().then(function(data) {
    $scope.products = data.data;

  console.log(data.data);

  $scope.totalItems = data.data.length;



  $scope.$watch("currentPage + numPerPage", function() {
      var begin = (($scope.currentPage - 1) * $scope.numPerPage)
      , end = begin + $scope.numPerPage;

      $scope.filteredProducts = $scope.products.slice(begin, end);
    });
  });
})

app.controller('exerciseListCtrl', function ($scope, services, $log) {
   $scope.filteredExercises = []
  ,$scope.currentPage = 1
  ,$scope.numPerPage = 10
  ,$scope.maxSize = 10;

  services.getExercises().then(function(data){
    $scope.exercises = data.data;


    console.log(data.data);

    $scope.totalItems = data.data.length;

     $scope.$watch("currentPage + numPerPage", function() {
      var begin = (($scope.currentPage - 1) * $scope.numPerPage)
      , end = begin + $scope.numPerPage;

      $scope.filteredExercises = $scope.exercises.slice(begin, end);
    });

  })
})

// product new / edit / delete 

app.controller('productEditCtrl', function ($scope, $rootScope, $location, $routeParams, services, product) {
    var productID = ($routeParams.productID) ? parseInt($routeParams.productID) : 0;
    $rootScope.title = (productID > 0) ? 'Edit product' : 'Add product';
    $scope.buttonText = (productID > 0) ? 'Update product' : 'Add New product';
      var original = product.data;
      original._id = productID;
      product.data.productStock = parseFloat(product.data.productStock,10);
      $scope.product = angular.copy(original);
      $scope.product._id = productID;

      $scope.isClean = function() {
        return angular.equals(original, $scope.product);
      }

      $scope.deleteProduct = function(product) {
        $location.path('/products');
        if(confirm("Are you sure to delete product number: "+$scope.product._id)==true)
        services.deleteProduct(product.productNumber);
      };

      $scope.saveProduct = function(product) {
        $location.path('/products');
        if (productID <= 0) {
            services.insertProduct(product);
        }
        else {
            services.updateProduct(productID, product);
        }
    };

    console.log(product.data.productStock);
});

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        title: 'Customers',
        templateUrl: 'partials/customers.html',
        controller: 'listCtrl'
      })
      .when('/edit-customer/:customerID', {
        title: 'Edit Customers',
        templateUrl: 'partials/edit-customer.html',
        controller: 'editCtrl',
        resolve: {
          customer: function(services, $route){
            var customerID = $route.current.params.customerID;
            return services.getCustomer(customerID);
          }
        }
      })
      .when('/products', {
        title: 'Products',
        templateUrl: 'partials/products.html',
        controller: 'productListCtrl',
        resolve: {
          products: function(services, $route) {
            return services.getProducts();
          }
        }
      })
      .when('/exercises', {
        title: 'Exercises',
        templateUrl: 'partials/exercises.html',
        controller: 'exerciseListCtrl',
        resolve: {
          exercises: function(services, $route){
            return services.getExercises();
          }
        }
      })
      .when('/edit-product/:productID', {
        title: 'Edit Product',
        templateUrl: 'partials/edit-product.html',
        controller: 'productEditCtrl',
        resolve: {
          product: function(services, $route){
            var productID = $route.current.params.productID;
            return services.getProduct(productID);
            console.log(productID);
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
}]);
app.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
		    console.log(current.$$route.title);
    });
}]);