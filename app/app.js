var app = angular.module('myApp', ['ngAnimate', 'ngRoute', 'ui.bootstrap']);


app.controller('listCtrl', function($scope, services) {
    services.getCustomers().then(function(data) {
        $scope.customers = data.data;
        console.log(data);
    });
});

app.controller('editCtrl', function($scope, $rootScope, $location, $routeParams, services, customer) {
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
        if (confirm("Are you sure to delete customer number: " + $scope.customer._id) == true)
            services.deleteCustomer(customer.customerNumber);
    };

    $scope.saveCustomer = function(customer) {
        $location.path('/');
        if (customerID <= 0) {
            services.insertCustomer(customer);
        } else {
            services.updateCustomer(customerID, customer);
        }
    };
});





// product list

app.controller('productListCtrl', function($scope, services, $log) {


    $scope.filteredProducts = [], $scope.currentPage = 1, $scope.numPerPage = 10, $scope.maxSize = 10;

    services.getProducts().then(function(data) {
        $scope.products = data.data;

        console.log(data.data);

        $scope.totalItems = data.data.length;



        $scope.$watch("currentPage + numPerPage", function() {
            var begin = (($scope.currentPage - 1) * $scope.numPerPage),
                end = begin + $scope.numPerPage;

            $scope.filteredProducts = $scope.products.slice(begin, end);
        });
    });
})


app.filter('searchExercises', function() {
    return function(items, searchExerciseTerm) {
        var filtered = [];
        // var letterMatch = new RegExp(searchExerciseTerm, 'i');
        if (items) {
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                // var letterLength = 0;

                if (searchExerciseTerm == '') {
                    console.log('is blank');
                    break;
                }
                if (searchExerciseTerm) {
                    // letterLength = searchExerciseTerm.length;
                   

                    if (item.exerciseName.toLowerCase().indexOf(searchExerciseTerm.toLowerCase()) > -1) {
                        filtered.push(item);
                    }
                } else {
                    filtered.push(item);
                }
                // if (letterMatch.test(item.exerciseName.substring(0, letterLength))) {
                //           filtered.push(item);
                //       }




            }
        }

        return filtered;

    };
});



app.factory('exerciseListMethodFactory', function($scope, services, $log) {
    return {
        exerciseListMethod: function() {
            services.getExercises().then(function(data) {

                $scope.filters = {};

                $scope.exercises = data.data;

                //console.log($scope.exercises)

                $scope.exercises.sort(function(a, b) {
                    var textA = a.muscleGroup.toUpperCase();
                    var textB = b.muscleGroup.toUpperCase();
                    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                })



                var prevProp = '';
                var currentProp = '';
                $scope.muscleGroupsFilter = [];

                for (var key in data.data) {
                    if (data.data.hasOwnProperty(key)) {
                        var obj = data.data[key];
                        for (var prop in obj) {
                            // important check that this is objects own property 
                            // not from prototype prop inherited
                            if (obj.hasOwnProperty(prop)) {

                                if (prop == 'muscleGroup') {

                                    prevProp = obj[prop];

                                    if (prevProp != currentProp) {
                                        $scope.muscleGroupsFilter.push({
                                            'muscleGroup': obj[prop]
                                        })
                                    }

                                    currentProp = obj[prop];

                                }
                            }
                        }
                    }
                }

               // console.log($scope.muscleGroupsFilter);
            });
        }
    }
})


app.controller('exerciseListCtrl', function($scope, services, $log) {
    $scope.filteredExercises = [], $scope.currentPage = 1, $scope.numPerPage = 10, $scope.maxSize = 10;

    services.getExercises().then(function(data) {

        $scope.filters = {};

        $scope.exercises = data.data;

        //console.log($scope.exercises)

        $scope.exercises.sort(function(a, b) {
            var textA = a.muscleGroup.toUpperCase();
            var textB = b.muscleGroup.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        })



        var prevProp = '';
        var currentProp = '';
        $scope.muscleGroupsFilter = [];

        for (var key in data.data) {
            if (data.data.hasOwnProperty(key)) {
                var obj = data.data[key];
                for (var prop in obj) {
                    // important check that this is objects own property 
                    // not from prototype prop inherited
                    if (obj.hasOwnProperty(prop)) {

                        if (prop == 'muscleGroup') {

                            prevProp = obj[prop];

                            if (prevProp != currentProp) {
                                $scope.muscleGroupsFilter.push({
                                    'muscleGroup': obj[prop]
                                })
                            }

                            currentProp = obj[prop];

                        }
                    }
                }
            }
        }

       // console.log($scope.muscleGroupsFilter);
    });
});



// product new / edit / delete 

app.controller('productEditCtrl', function($scope, $rootScope, $location, $routeParams, services, product) {
    var productID = ($routeParams.productID) ? parseInt($routeParams.productID) : 0;
    $rootScope.title = (productID > 0) ? 'Edit product' : 'Add product';
    $scope.buttonText = (productID > 0) ? 'Update product' : 'Add New product';
    var original = product.data;
    original._id = productID;
    product.data.productStock = parseFloat(product.data.productStock, 10);
    $scope.product = angular.copy(original);
    $scope.product._id = productID;

    $scope.isClean = function() {
        return angular.equals(original, $scope.product);
    }

    $scope.deleteProduct = function(product) {
        $location.path('/products');
        if (confirm("Are you sure to delete product number: " + $scope.product._id) == true)
            services.deleteProduct(product.productNumber);
    };

    $scope.saveProduct = function(product) {
        $location.path('/products');
        if (productID <= 0) {
            services.insertProduct(product);
        } else {
            services.updateProduct(productID, product);
        }
    };

    console.log(product.data.productStock);
});

