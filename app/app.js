var app = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);
app.factory("services", ['$http', function($http)
{
    var serviceBase = 'services/'
    var obj = {};
    obj.getCustomers = function()
    {
        return $http.get(serviceBase + 'customers');
    }
    obj.getCustomer = function(customerID)
    {
        return $http.get(serviceBase + 'customer?id=' + customerID);
    }

    obj.insertCustomer = function(customer)
    {
        return $http.post(serviceBase + 'insertCustomer', customer).then(function(results)
        {
            return results;
        });
    };

    obj.updateCustomer = function(id, customer)
    {
        return $http.post(serviceBase + 'updateCustomer',
        {
            id: id,
            customer: customer
        }).then(function(status)
        {
            return status.data;

        });
    };

    obj.deleteCustomer = function(id)
    {
        return $http.delete(serviceBase + 'deleteCustomer?id=' + id).then(function(status)
        {
            return status.data;
        });
    };

    obj.getProducts = function()
    {
        return $http.get(serviceBase + 'products');
    }

    obj.getProduct = function(productID)
    {
        return $http.get(serviceBase + 'product?id=' + productID);
    }


    obj.insertProduct = function(product)
    {
        console.log(serviceBase + 'insertProduct', product);
        return $http.post(serviceBase + 'insertProduct', product).then(function(results)
        {
            return results;
        });
    };

    obj.updateProduct = function(id, product)
    {
        return $http.post(serviceBase + 'updateProduct',
        {
            id: id,
            product: product
        }).then(function(status)
        {
            return status.data;
        })
    }

    obj.deleteProduct = function(id, product)
    {
        return $http.delete(serviceBase + 'deleteProduct?id=' + id).then(function(status)
        {
            return status.data;
        })
    }

    obj.getExercises = function()
    {
        return $http.get('exercises.json').success(function(data)
        {
            return data.data;
        })
    }


    obj.getWorkouts = function()
    {
        return $http.get(serviceBase + 'workouts');
    }


    obj.getWorkout = function(workoutID)
    {
        return $http.get(serviceBase + 'workout?id=' + workoutID);
    }


    obj.insertWorkout = function(workout)
    {
        return $http.post(serviceBase + 'insertWorkout', workout).then(function(results)
        {
            return results;
        });
    };

    obj.insertExercise = function(exercise)
    {

      console.log(serviceBase + 'insertExercise', exercise);
        return $http.post(serviceBase + 'insertExercise', exercise).then(function(results)
        {
            return results;
            console.log(results);
        });
    };


    obj.insertExerciseData = function(exerciseData)
    {

      console.log(serviceBase + 'insertExerciseData', exerciseData);
        return $http.post(serviceBase + 'insertExerciseData', exerciseData).then(function(results)
        {
            console.log(results);
            return results;
        });
    };


    return obj;

}]);





app.controller('listCtrl', function($scope, services)
{
    services.getCustomers().then(function(data)
    {
        $scope.customers = data.data;
        console.log(data);
    });
});

app.controller('editCtrl', function($scope, $rootScope, $location, $routeParams, services, customer)
{
    var customerID = ($routeParams.customerID) ? parseInt($routeParams.customerID) : 0;
    $rootScope.title = (customerID > 0) ? 'Edit Customer' : 'Add Customer';
    $scope.buttonText = (customerID > 0) ? 'Update Customer' : 'Add New Customer';
    var original = customer.data;
    original._id = customerID;
    $scope.customer = angular.copy(original);
    $scope.customer._id = customerID;

    $scope.isClean = function()
    {
        return angular.equals(original, $scope.customer);
    }

    $scope.deleteCustomer = function(customer)
    {
        $location.path('/');
        if (confirm("Are you sure to delete customer number: " + $scope.customer._id) == true)
            services.deleteCustomer(customer.customerNumber);
    };

    $scope.saveCustomer = function(customer)
    {
        $location.path('/');
        if (customerID <= 0)
        {
            services.insertCustomer(customer);
        }
        else
        {
            services.updateCustomer(customerID, customer);
        }
    };
});





// product list

app.controller('productListCtrl', function($scope, services, $log)
{


    $scope.filteredProducts = [], $scope.currentPage = 1, $scope.numPerPage = 10, $scope.maxSize = 10;

    services.getProducts().then(function(data)
    {
        $scope.products = data.data;

        console.log(data.data);

        $scope.totalItems = data.data.length;



        $scope.$watch("currentPage + numPerPage", function()
        {
            var begin = (($scope.currentPage - 1) * $scope.numPerPage),
                end = begin + $scope.numPerPage;

            $scope.filteredProducts = $scope.products.slice(begin, end);
        });
    });
})


app.filter('searchExercises', function()
{
    return function(items, searchExerciseTerm)
    {
        var filtered = [];
        // var letterMatch = new RegExp(searchExerciseTerm, 'i');
        if (items)
        {
            for (var i = 0; i < items.length; i++)
            {
                var item = items[i];
                // var letterLength = 0;

                if (typeof searchExerciseTerm != 'undefined')
                {
                    // letterLength = searchExerciseTerm.length;

                    console.log(searchExerciseTerm)

                    if (item.exerciseName.toLowerCase().indexOf(searchExerciseTerm.toLowerCase()) > -1)
                    {
                        filtered.push(item);
                    }
                }
                else
                {
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



app.factory('exerciseListMethodFactory', function($scope, services, $log)
{
    return {
        exerciseListMethod: function()
        {
            services.getExercises().then(function(data)
            {

                $scope.filters = {};

                $scope.exercises = data.data;

                console.log($scope.exercises)

                $scope.exercises.sort(function(a, b)
                {
                    var textA = a.muscleGroup.toUpperCase();
                    var textB = b.muscleGroup.toUpperCase();
                    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                })



                var prevProp = '';
                var currentProp = '';
                $scope.muscleGroupsFilter = [];

                for (var key in data.data)
                {
                    if (data.data.hasOwnProperty(key))
                    {
                        var obj = data.data[key];
                        for (var prop in obj)
                        {
                            // important check that this is objects own property 
                            // not from prototype prop inherited
                            if (obj.hasOwnProperty(prop))
                            {

                                if (prop == 'muscleGroup')
                                {

                                    prevProp = obj[prop];

                                    if (prevProp != currentProp)
                                    {
                                        $scope.muscleGroupsFilter.push(
                                        {
                                            'muscleGroup': obj[prop]
                                        })
                                    }

                                    currentProp = obj[prop];

                                }
                            }
                        }
                    }
                }

                console.log($scope.muscleGroupsFilter);
            });
        }
    }
})


app.controller('exerciseListCtrl', function($scope, services, $log)
{
    $scope.filteredExercises = [], $scope.currentPage = 1, $scope.numPerPage = 10, $scope.maxSize = 10;

    services.getExercises().then(function(data)
    {

        $scope.filters = {};

        $scope.exercises = data.data;

        console.log($scope.exercises)

        $scope.exercises.sort(function(a, b)
        {
            var textA = a.muscleGroup.toUpperCase();
            var textB = b.muscleGroup.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        })



        var prevProp = '';
        var currentProp = '';
        $scope.muscleGroupsFilter = [];

        for (var key in data.data)
        {
            if (data.data.hasOwnProperty(key))
            {
                var obj = data.data[key];
                for (var prop in obj)
                {
                    // important check that this is objects own property 
                    // not from prototype prop inherited
                    if (obj.hasOwnProperty(prop))
                    {

                        if (prop == 'muscleGroup')
                        {

                            prevProp = obj[prop];

                            if (prevProp != currentProp)
                            {
                                $scope.muscleGroupsFilter.push(
                                {
                                    'muscleGroup': obj[prop]
                                })
                            }

                            currentProp = obj[prop];

                        }
                    }
                }
            }
        }

        console.log($scope.muscleGroupsFilter);
    });
});



app.controller('workoutListCtrl', ['$scope', '$controller', 'services', function($scope, $controller, services, $log)
{


    services.getWorkouts().then(function(data)
        {
            $scope.workouts = data.data;

            console.log($scope.workouts);

            $scope.dataArray = [];

            $scope.exerciseTest = [];

            $scope.exercise_data = [];

            var count = 0;
            var innerCount = 0;
            var innerCount1 = 0;
            var oneRm = 0;
            var reps = 0;
            var totalReps = 0;
            var oneRepMax = 0;
            var averageWeight = 0;
            var averageReps = 0;

            for (var key in data.data)
            {
                if (data.data.hasOwnProperty(key))
                {
                    var obj = data.data[key];
                    // console.log(obj);
                    for (var prop in obj)
                    {
                        // important check that this is objects own property 
                        // not from prototype prop inherited
                        if (obj.hasOwnProperty(prop))
                        {
                            if (prop == 'exercises')
                            {
                                // console.log(obj['exercises']);

                                var obj2 = obj['exercises'];

                                for (var property in obj2)
                                {

                                    //console.log(innerCount);
                                    $scope.exerciseTest[innerCount] = obj2[property];
                                    $scope.exerciseTest[innerCount] = obj2['onerm'];

                                    //console.log( $scope.exerciseTest[innerCount]);
                                    //console.log(obj2[property]);
                                    innerCount++;




                                    var obj3 = obj2[property];

                                    for (var property2 in obj3)
                                    {
                                        var totalReps = 0;
                                        var totalSets = 0;
                                        var totalWeight = 0;


                                        //console.log(obj3);
                                        //console.log(property2 + obj3[property2]);


                                         console.log(property2)

                                        if (property2 == 'exercise_data')
                                        {

                                            var obj4 = obj3[property2];

                                            for (var property2 in obj4)
                                            {
                                                // console.log(obj4[property2]);



                                                var reps = obj4[property2]['reps'];
                                                totalReps += parseInt(reps);


                                                //console.log(property2.length);
                                                var sets = obj4[property2]['sets'];
                                                totalSets += property2.length;

                                                var averageReps = totalReps / totalSets;


                                                var weight = obj4[property2]['weight'];
                                                totalWeight += parseInt(weight);

                                                var averageWeight = totalWeight / totalSets;

                                                var oneRepMax = parseInt(averageWeight / (1.0278 - (0.0278 * averageReps)));

                                                //console.log(oneRm);

                                                //console.log($scope.exerciseTest[innerCount] = obj2[property]);

                                                $scope.exercise_data[innerCount1] = obj4[property2];

                                                innerCount1++;


                                            }

                                            // console.log(obj3['exercise_data']);
                                            // $scope.exercise_data[innerCount1] = obj3[property2];
                                            // innerCount1++;
                                        }

                                        else {

                                         
                                         

                                            // var obj4 = obj3[property2];

                                            // for (var property2 in obj4)
                                            // {
                                            //     // console.log(obj4[property2]);



                                            //     var reps = obj4[property2]['reps'];
                                            //     totalReps += parseInt(reps);


                                            //     //console.log(property2.length);
                                            //     var sets = obj4[property2]['sets'];
                                            //     totalSets += property2.length;

                                            //     var averageReps = totalReps / totalSets;


                                            //     var weight = obj4[property2]['weight'];
                                            //     totalWeight += parseInt(weight);

                                            //     var averageWeight = totalWeight / totalSets;

                                            //     var oneRepMax = parseInt(averageWeight / (1.0278 - (0.0278 * averageReps)));

                                            //     //console.log(oneRm);

                                            //     //console.log($scope.exerciseTest[innerCount] = obj2[property]);

                                            //     $scope.exercise_data[innerCount1] = obj4[property2];

                                            //     innerCount1++;
                                            //   }
                                            

                                            // console.log(obj3['exercise_data']);
                                            // $scope.exercise_data[innerCount1] = obj3[property2];
                                            // innerCount1++;
                                        

                                        }



                                        obj3['totalReps'] = totalReps;
                                        obj3['totalSets'] = totalSets;
                                        obj3['averageReps'] = averageReps;
                                        obj3['totalWeight'] = totalWeight;
                                        obj3['averageWeight'] = averageWeight;
                                        obj3['oneRepMax'] = oneRepMax;


                                    }




                                }

                            }
                        }
                    }
                }
                count++;
            }



           
            // console.log($scope.exerciseTest);


        }) // get workouts and split exercises into seperate object exerciseTest


    $scope.insertExercise = function(exercise) {
        services.insertExercise(exercise);
        console.log(exercise);
    }

    $scope.insertExerciseData = function(exerciseData) {
        services.insertExerciseData(exerciseData);
        console.log(exerciseData);
    }

    $scope.saveExerciseData = function(topIndex, parentIndex, index) {
       console.log(index);
         var exercise_id = $scope.workouts[topIndex].exercises[parentIndex].exercise_id;
         $scope.workouts[topIndex].exercises[parentIndex].exercise_data[index].exercise_id = exercise_id;

         services.insertExerciseData($scope.workouts[topIndex].exercises[parentIndex].exercise_data[index]).then(function(results){
            console.log(results);
            var unique_id = results.data.unique_id;
            console.log(unique_id)
           // $scope.workouts[topIndex].exercises[parentIndex].exercise_data[index].set_id = unique_id;
         });
    }

    $scope.addItem = function(index, newExerciseName)
    {

        var workout_id = $scope.workouts[index].workoutNumber;

        // console.log(newExerciseName);

        var exerciseLength = $scope.workouts[index].exercises.length;

        console.log(workout_id);
      

        $scope.workouts[index].exercises.push(
        {
            exerciseName: newExerciseName,
            workoutNumber: workout_id,
            exercise_data: []
        });



          $scope.insertExercise($scope.workouts[index].exercises[exerciseLength]);

        // Clear input fields after push
        $scope.newExerciseName = "";

        // console.log($scope.workouts[index]);


    };



    $scope.addSet = function(parentIndex, index)
    {
         var workout_id = $scope.workouts[parentIndex].workoutNumber;
        // console.log($scope.workouts[parentIndex].exercises[index]);
        $scope.workouts[parentIndex].exercises[index].exercise_data.push(
        {
            reps: '20',
            set_id: '0'
        });


    }


    // $scope.updateExerciseCalculations = function(parentIndex, index)
    // {
    //     $scope.totalReps(parentIndex,index);
    //     $scope.totalSets(parentIndex,index);
    //     //$scope.averageReps(parentIndex, index); 
    //     //$scope.workouts[parentIndex].exercises[index].totalReps + parseInt(reps);
    // }


   

    $scope.totalReps = function(parentIndex, index)
    {
        // console.log('total reps called');

        // console.log($scope.workouts[parentIndex].exercises[index]);
        var total = 0;
        for (var i = 0; i < $scope.workouts[parentIndex].exercises[index].exercise_data.length; i++)
        {
            // console.log($scope.workouts[parentIndex].exercises[index].exercise_data);
            var data = $scope.workouts[parentIndex].exercises[index].exercise_data[i];

            // console.log(data.reps);

            total += (parseInt(data.reps));
        }

        $scope.workouts[parentIndex].exercises[index].totalReps = total;

       
      // $scope.averageReps(parentIndex,index);

        var getAverageReps = total / $scope.workouts[parentIndex].exercises[index].exercise_data.length;
        // console.log(getAverageReps);
        $scope.workouts[parentIndex].exercises[index].averageReps = getAverageReps;

        $scope.totalWeight(parentIndex, index);

        $scope.averageWeight(parentIndex, index);

        var oneRepMax = $scope.oneRepMax(total, parentIndex, index);

        $scope.workouts[parentIndex].exercises[index].oneRepMax = oneRepMax;


          return parseInt(total);

    }



    $scope.totalSets = function(parentIndex, index)
    {

        var total = $scope.workouts[parentIndex].exercises[index].exercise_data.length;
        $scope.workouts[parentIndex].exercises[index].sets = total;
        return total;

       
         
    }


    $scope.totalWeight = function(parentIndex, index)
    {

        // console.log('total reps called');

        // console.log($scope.workouts[parentIndex].exercises[index]);
        var total = 0;
        for (var i = 0; i < $scope.workouts[parentIndex].exercises[index].exercise_data.length; i++)
        {
            // console.log($scope.workouts[parentIndex].exercises[index].exercise_data);
            var data = $scope.workouts[parentIndex].exercises[index].exercise_data[i];

           // console.log(data.weight);

            total += (parseInt(data.weight));
        }

        // console.log(total);
       $scope.workouts[parentIndex].exercises[index].totalWeight = total;

       return total;
    }

    $scope.averageWeight = function(parentIndex, index) {
        var totalSets = $scope.totalSets(parentIndex, index);
        var totalWeight = $scope.totalWeight(parentIndex, index);
        var averageWeight = totalWeight / totalSets;

        $scope.workouts[parentIndex].exercises[index].averageWeight = averageWeight;
       // console.log($scope.workouts[parentIndex].exercises[index]);

        return averageWeight;
    }


    $scope.oneRepMax = function(totalReps, parentIndex,index) {
      
      var getAverageReps = totalReps / $scope.workouts[parentIndex].exercises[index].exercise_data.length;

      var oneRepMax = parseInt($scope.averageWeight(parentIndex, index) / (1.0278 - (0.0278 * getAverageReps)));

      return oneRepMax;

     // console.log(oneRepMax);
    }


     $scope.saveWorkout = function(workout)
    {
        if (workoutID <= 0)
        {
            services.insertWorkout(workout);
        }
        else
        {
            services.updateWorkout(workoutID, workout);
        }
    };

}])


// workout new / edit / delete 

app.controller('workoutEditCtrl', function($scope, $rootScope, $location, $routeParams, services, workout)
{

    console.log(workout);

    var workoutID = ($routeParams.workoutID) ? parseInt($routeParams.workoutID) : 0;
    $rootScope.title = (workoutID > 0) ? 'Edit workout' : 'Add workout';
    $scope.buttonText = (workoutID > 0) ? 'Update workout' : 'Add New workout';
    var original = workout.data;
    original._id = workoutID;
    workout.data.workoutStock = parseFloat(workout.data.workoutStock, 10);
    $scope.workout = angular.copy(original);
    $scope.workout._id = workoutID;



    $scope.isClean = function()
    {
        return angular.equals(original, $scope.workout);
    }

    $scope.deleteWorkout = function(workout)
    {
        $location.path('/workouts');
        if (confirm("Are you sure to delete workout number: " + $scope.workout._id) == true)
            services.deleteWorkout(workout.workoutNumber);
    };

    $scope.saveWorkout = function(workout)
    {
        $location.path('/workouts');
        if (workoutID <= 0)
        {
            services.insertWorkout(workout);
        }
        else
        {
            services.updateWorkout(workoutID, workout);
        }
    };

    console.log(workout.data);
});




// product new / edit / delete 

app.controller('productEditCtrl', function($scope, $rootScope, $location, $routeParams, services, product)
{
    var productID = ($routeParams.productID) ? parseInt($routeParams.productID) : 0;
    $rootScope.title = (productID > 0) ? 'Edit product' : 'Add product';
    $scope.buttonText = (productID > 0) ? 'Update product' : 'Add New product';
    var original = product.data;
    original._id = productID;
    product.data.productStock = parseFloat(product.data.productStock, 10);
    $scope.product = angular.copy(original);
    $scope.product._id = productID;

    $scope.isClean = function()
    {
        return angular.equals(original, $scope.product);
    }

    $scope.deleteProduct = function(product)
    {
        $location.path('/products');
        if (confirm("Are you sure to delete product number: " + $scope.product._id) == true)
            services.deleteProduct(product.productNumber);
    };

    $scope.saveProduct = function(product)
    {
        $location.path('/products');
        if (productID <= 0)
        {
            services.insertProduct(product);
        }
        else
        {
            services.updateProduct(productID, product);
        }
    };

    console.log(product.data.productStock);
});

app.config(['$routeProvider',
    function($routeProvider)
    {
        $routeProvider.
        when('/',
            {
                title: 'Customers',
                templateUrl: 'partials/customers.html',
                controller: 'listCtrl'
            })
            .when('/edit-customer/:customerID',
            {
                title: 'Edit Customers',
                templateUrl: 'partials/edit-customer.html',
                controller: 'editCtrl',
                resolve:
                {
                    customer: function(services, $route)
                    {
                        var customerID = $route.current.params.customerID;
                        return services.getCustomer(customerID);
                    }
                }
            })
            .when('/products',
            {
                title: 'Products',
                templateUrl: 'partials/products.html',
                controller: 'productListCtrl',
                resolve:
                {
                    products: function(services, $route)
                    {
                        return services.getProducts();
                    }
                }
            })
            .when('/exercises',
            {
                title: 'Exercises',
                templateUrl: 'partials/exercises.html',
                controller: 'exerciseListCtrl',
                resolve:
                {
                    exercises: function(services, $route)
                    {
                        return services.getExercises();
                    }
                }
            })
            .when('/workouts',
            {
                title: 'Workouts',
                templateUrl: 'partials/workouts.html',
                controller: 'workoutListCtrl',
                resolve:
                {
                    workouts: function(services, $route)
                    {
                        return services.getWorkouts();
                    }
                }
            })
            .when('/edit-product/:productID',
            {
                title: 'Edit Product',
                templateUrl: 'partials/edit-product.html',
                controller: 'productEditCtrl',
                resolve:
                {
                    product: function(services, $route)
                    {
                        var productID = $route.current.params.productID;
                        return services.getProduct(productID);
                        console.log(productID);
                    }
                }
            })
            .when('/edit-workout/:workoutID',
            {
                title: 'Edit Workout',
                templateUrl: 'partials/edit-workout.html',
                controller: 'workoutEditCtrl',
                resolve:
                {
                    workout: function(services, $route)
                    {
                        var workoutID = $route.current.params.workoutID;
                        return services.getWorkout(workoutID);
                        console.log(workoutID);
                    }
                }
            })
            .otherwise(
            {
                redirectTo: '/'
            });
    }
]);
app.run(['$location', '$rootScope', function($location, $rootScope)
{
    $rootScope.$on('$routeChangeSuccess', function(event, current, previous)
    {
        $rootScope.title = current.$$route.title;
        console.log(current.$$route.title);
    });
}]);