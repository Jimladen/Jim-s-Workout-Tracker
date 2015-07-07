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

    obj.getExercises = function() {
        return $http.get('exercises.json').success(function(data) {
            return data.data;
        })
    }


    obj.getWorkouts = function() {
        return $http.get(serviceBase + 'workouts');
    }

     obj.getWorkout = function(workoutID) {
        return $http.get(serviceBase + 'workout?id=' + workoutID);
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


    return obj;

}]);
