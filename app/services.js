app.factory("services", ['$http', function($http) {
    var serviceBase = 'services/'
    var obj = {};

    obj.getProducts = function() {
        return $http.get(serviceBase + 'products');
    }

    obj.getProduct = function(productID) {
        return $http.get(serviceBase + 'product?id=' + productID);
    }


    obj.insertProduct = function(product) {
        console.log(serviceBase + 'insertProduct', product);
        return $http.post(serviceBase + 'insertProduct', product).then(function(results) {
            return results;
        });
    };

    obj.updateProduct = function(id, product) {
        return $http.post(serviceBase + 'updateProduct', {
            id: id,
            product: product
        }).then(function(status) {
            return status.data;
        })
    }

    obj.deleteProduct = function(id, product) {
        return $http.delete(serviceBase + 'deleteProduct?id=' + id).then(function(status) {
            return status.data;
        })
    }


    /* 
        Get Exercise 
    */

    obj.getExercises = function() {
        return $http.get('exercises.json').success(function(data) {
            return data.data;
        })
    }




    /* 
         Workout functions
    */

    obj.getWorkouts = function() {
        return $http.get(serviceBase + 'workouts');
    }

    obj.insertWorkout = function(workout) {
        return $http.post(serviceBase + 'insertWorkout', workout).then(function(results) {
            return results;
        });
    };

    obj.deleteWorkout = function(id) {
        return $http.delete(serviceBase + 'deleteWorkout?id=' + id).then(function(status) {
            return status.data;
        })
    }

    obj.updateWorkoutName = function(workoutName, workoutNumber) {
        console.log(workoutName);

        return $http.post(serviceBase + 'updateWorkoutName', {
            workoutNumber: workoutNumber,
            workoutName: workoutName
        }).then(function(results) {
            console.log(results);
            return results;

        });
    }

    obj.updateWorkout = function(id, workoutName) {
        return $http.post(serviceBase + 'updateWorkout', {
            workoutNumber: id,
            workoutName: workoutName
        }).then(function(status) {
            return status.data;
        })
    }

    obj.insertExercise = function(exercise) {

        console.log(serviceBase + 'insertExercise', exercise);
        return $http.post(serviceBase + 'insertExercise', exercise).then(function(results) {
            return results;
            console.log(results);
        });
    };

    obj.updateExerciseData = function(id, exercise) {
        console.log(exercise)
        console.log(id);

        return $http.post(serviceBase + 'updateExerciseData', {
            id: id,
            exercise: exercise
        }).then(function(status) {
            console.log(status.data);
            return status.data;
        })
    }


    obj.insertExerciseData = function(exerciseData) {

        console.log(serviceBase + 'insertExerciseData', exerciseData);
        return $http.post(serviceBase + 'insertExerciseData', exerciseData).then(function(results) {
            console.log(results);
            return results;
        });
    };


    obj.deleteExerciseData = function(id) {
        return $http.delete(serviceBase + 'deleteExerciseData?id=' + id).then(function(status) {
            return status.data;
        })
    }


    obj.deleteExercise = function(id) {
        return $http.delete(serviceBase + 'deleteExercise?id=' + id).then(function(status) {
            return status.data;
        })
    }




    /* 
        Workout log
    */

    obj.getWorkout = function(workoutID) {
        return $http.get(serviceBase + 'workout?id=' + workoutID);
    }

    obj.insertWorkoutLog = function(workoutData) {
        console.log(workoutData);
        return $http.post(serviceBase + 'insertWorkoutLog', workoutData).then(function(results) {
            return results;
        });
    };


    obj.insertExerciseLog = function(exercise) {

        console.log(serviceBase + 'insertExerciseLog', exercise);
        return $http.post(serviceBase + 'insertExerciseLog', exercise).then(function(results) {
            console.log(results);
            return results;
        });
    };

    obj.deleteExerciseLog = function(id) {
        return $http.delete(serviceBase + 'deleteExerciseLog?id=' + id).then(function(status) {
            return status.data;
        })
    }


    obj.updateExerciseDataLog = function(id, exercise) {
        console.log(exercise)
        console.log(id);

        return $http.post(serviceBase + 'updateExerciseDataLog', {
            id: id,
            exercise: exercise
        }).then(function(status) {
            console.log(status.data);
            return status.data;
        })
    }


    obj.insertExerciseDataLog = function(exerciseData) {

        console.log(serviceBase + 'insertExerciseDataLog', exerciseData);
        return $http.post(serviceBase + 'insertExerciseDataLog', exerciseData).then(function(results) {
            console.log(results);
            return results;
        });
    };

    obj.deleteExerciseDataLog = function(id) {
        return $http.delete(serviceBase + 'deleteExerciseDataLog?id=' + id).then(function(status) {
            return status.data;
        })
    }





    return obj;

}]);
