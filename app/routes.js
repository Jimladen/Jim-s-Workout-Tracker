app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
                title: 'Home',
                templateUrl: 'partials/home.html',
                controller: 'workoutListCtrl'
            })
            .when('/edit-customer/:customerID', {
                title: 'Edit Customers',
                templateUrl: 'partials/edit-customer.html',
                controller: 'editCtrl',
                resolve: {
                    customer: function(services, $route) {
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
                    exercises: function(services, $route) {
                        return services.getExercises();
                    }
                }
            })
            .when('/workouts', {
                title: 'Workouts',
                templateUrl: 'partials/workouts.html',
                controller: 'workoutListCtrl',
                resolve: {
                    workouts: function(services, $route) {
                        return services.getWorkouts();
                    }
                }
            })
            .when('/edit-product/:productID', {
                title: 'Edit Product',
                templateUrl: 'partials/edit-product.html',
                controller: 'productEditCtrl',
                resolve: {
                    product: function(services, $route) {
                        var productID = $route.current.params.productID;
                        return services.getProduct(productID);
                        console.log(productID);
                    }
                }
            })
            .when('/start-workout/:workoutID', {
                title: 'Start Workout',
                templateUrl: 'partials/start-workout.html',
                controller: 'trackWorkoutCtrl',
                resolve: {
                    workout: function(services, $route) {
                        var workoutID = $route.current.params.workoutID;
                         console.log(workoutID);
                        return services.getWorkout(workoutID);
                       
                    }
                }
            })
            .otherwise({
                redirectTo: '/'
            });
    }
]);
app.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
        $rootScope.title = current.$$route.title;
        console.log(current.$$route.title);
    });
}]);