app.controller('workoutListCtrl', ['$scope', '$controller', 'services', 'workoutService',  function($scope, $controller, services, workoutService) {



    services.getWorkouts().then(function(result) {
            var data = result.data;
             $scope.workouts = data;
             console.log($scope.workouts);
        })

    var type = 'edit';

    $scope.insertExercise = function(exercise) {
      services.insertExercise(exercise).then(function(results) {
          var data = results.data.unique_id;
           console.log(data);
      })
    }


    $scope.deleteExercise = function(parentIndex, index) {

       var id = $scope.workouts[parentIndex].exercises[index].exercise_id;


        console.log('delete exercise');
       
        console.log(id);

        services.deleteExercise(id).then(function() {
            $scope.workouts[parentIndex].exercises.splice(index, 1);
        });

    }



    // $scope.insertExerciseData = function(exerciseData) {
    //     services.insertExerciseData(exerciseData);
    //     console.log(exerciseData);
    // }

    // $scope.saveExerciseData = function(topIndex, parentIndex, index) {

    //     var set_id = $scope.workouts[topIndex].exercises[parentIndex].exercise_data[index].set_id;


    //     console.log(set_id);

    //     if (set_id != 0) {
    //         services.updateExerciseData(set_id, $scope.workouts[topIndex].exercises[parentIndex].exercise_data[index])
    //     } else {

    //         services.insertExerciseData($scope.workouts[topIndex].exercises[parentIndex].exercise_data[index]).then(function(results) {
    //             console.log(results);
    //             var unique_id = results.data.unique_id;
    //             console.log(unique_id)
    //             $scope.workouts[topIndex].exercises[parentIndex].exercise_data[index].set_id = unique_id;
    //         });
    //     }
    // }


     $scope.saveExerciseData = function(topIndex, parentIndex, index) {

        var set_id = $scope.workouts[topIndex].exercises[parentIndex].exercise_data[index].set_id;
        var exerciseData = $scope.workouts[topIndex].exercises[parentIndex].exercise_data[index];

        workoutService.saveExerciseData(set_id, exerciseData, type).then(function(results){
            exerciseData.set_id = results;
        });


        // if (set_id != 0) {
        //     services.updateExerciseData(set_id, $scope.workouts[topIndex].exercises[parentIndex].exercise_data[index])
        // } else {

        //     services.insertExerciseData($scope.workouts[topIndex].exercises[parentIndex].exercise_data[index]).then(function(results) {
        //         console.log(results);
        //         var unique_id = results.data.unique_id;
        //         console.log(unique_id)
        //         $scope.workouts[topIndex].exercises[parentIndex].exercise_data[index].set_id = unique_id;
        //     });
        // }
    }



    // $scope.saveAllExerciseData = function(parentIndex, index) {

    //     console.log('saveall');

    //     for (var key in $scope.workouts[parentIndex].exercises[index].exercise_data) {
    //         if ($scope.workouts[parentIndex].exercises[index].exercise_data.hasOwnProperty(key)) {


    //             if ($scope.workouts[parentIndex].exercises[index].exercise_data[key].set_id == 0) {
    //                 services.insertExerciseData($scope.workouts[parentIndex].exercises[index].exercise_data[key]).then(function(results) {
    //                     console.log(results);
    //                     var unique_id = results.data.unique_id;
    //                     var exercise_id = $scope.workouts[parentIndex].exercises[index].exercise_id;
    //                     console.log(exercise_id);
    //                     $scope.workouts[parentIndex].exercises[index].exercise_data[key].exercise_id = exercise_id;

    //                     console.log(unique_id);
    //                 });
    //             } else {
    //                 var set_id = $scope.workouts[parentIndex].exercises[index].exercise_data[key].set_id;
    //                 services.updateExerciseData(set_id, $scope.workouts[parentIndex].exercises[index].exercise_data[key])
    //             }
    //             console.log($scope.workouts[parentIndex].exercises[index].exercise_data[key]);
    //         }
    //     }

    // }



    $scope.addSet = function(parentIndex, index) {
        var workout_id = $scope.workouts[parentIndex].workoutNumber;
        var exercise_id = $scope.workouts[parentIndex].exercises[index].exercise_id;
        // console.log($scope.workouts[parentIndex].exercises[index]);
        $scope.workouts[parentIndex].exercises[index].exercise_data.push({
            reps: '6',
            weight: '0',
            set_id: '0',
            exercise_id: exercise_id
        });


    }

    $scope.deleteSet = function(topIndex, parentIndex, index) {
        console.log('delete set');
        var id = $scope.workouts[topIndex].exercises[parentIndex].exercise_data[index].set_id;

        console.log(index);
        services.deleteExerciseData(id).then(function() {
            $scope.workouts[topIndex].exercises[parentIndex].exercise_data.splice(index, 1);
        });

    }



    $scope.totalReps = function(parentIndex, index) {
        // console.log('total reps called');

        // console.log($scope.workouts[parentIndex].exercises[index]);
        var total = 0;
        for (var i = 0; i < $scope.workouts[parentIndex].exercises[index].exercise_data.length; i++) {
            // console.log($scope.workouts[parentIndex].exercises[index].exercise_data);
            var data = $scope.workouts[parentIndex].exercises[index].exercise_data[i];

            // console.log(data.reps);

            total += (parseInt(data.reps));
        }

        if (!total) {
            total = 0;
        }

        $scope.workouts[parentIndex].exercises[index].totalReps = total;


        // $scope.averageReps(parentIndex,index);

        var getAverageReps = total / $scope.workouts[parentIndex].exercises[index].exercise_data.length;
        getAverageReps = getAverageReps.toFixed(0);
        // console.log(getAverageReps);
        $scope.workouts[parentIndex].exercises[index].averageReps = getAverageReps;

        $scope.totalWeight(parentIndex, index);

        $scope.averageWeight(parentIndex, index);

        var oneRepMax = $scope.oneRepMax(total, parentIndex, index);

        if (!oneRepMax) {
            oneRepMax = 0;
        }

        $scope.workouts[parentIndex].exercises[index].oneRepMax = oneRepMax;

        var targetWeight = $scope.targetWeight(total, parentIndex, index);

        if (!targetWeight) {
            targetWeight = 0;
        }

        $scope.workouts[parentIndex].exercises[index].targetWeight = targetWeight;


        return parseInt(total);

    }



    $scope.totalSets = function(parentIndex, index) {

        var total = $scope.workouts[parentIndex].exercises[index].exercise_data.length;
        $scope.workouts[parentIndex].exercises[index].sets = total;

        if (!total) {
            total = 0;
        }
        return total;



    }


    $scope.totalWeight = function(parentIndex, index) {

        // console.log('total reps called');

        // console.log($scope.workouts[parentIndex].exercises[index]);
        var total = 0;
        for (var i = 0; i < $scope.workouts[parentIndex].exercises[index].exercise_data.length; i++) {
            // console.log($scope.workouts[parentIndex].exercises[index].exercise_data);
            var data = $scope.workouts[parentIndex].exercises[index].exercise_data[i];

            // console.log(data.weight);

            total += (parseInt(data.weight));
        }

        if (!total) {
            total = 0;
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


    // one rep max function
    $scope.oneRepMax = function(totalReps, parentIndex, index) {

        var getAverageReps = totalReps / $scope.workouts[parentIndex].exercises[index].exercise_data.length;

        var oneRepMax = parseInt($scope.averageWeight(parentIndex, index) / (1.0278 - (0.0278 * getAverageReps)));

        return oneRepMax;

        // console.log(oneRepMax);
    }


    // target weight 85% of 1RM - TO DO: changeable through settings page 
    $scope.targetWeight = function(totalReps, parentIndex, index) {

        var getAverageReps = totalReps / $scope.workouts[parentIndex].exercises[index].exercise_data.length;

        var targetWeight = parseInt($scope.averageWeight(parentIndex, index) / (1.0278 - (0.0278 * getAverageReps)) * 0.90);

        return targetWeight;

        // console.log(oneRepMax);
    }



      /* 

      ITEMS SPECIFIC TO WORKOUT EDIT CONTROLLER

      */


    //   $scope.addItem = function(index, newExerciseName) {

    //     var workout_id = $scope.workouts[index].workoutNumber;
    //     console.log($scope.workouts[index].exercises);

    //     var exerciseLength = $scope.workouts[index].exercises.length;

    //     if (!exerciseLength) {
    //         exerciseLength = 0;
    //     }

    //     console.log(workout_id);

    //     $scope.workouts[index].exercises.push({
    //         exerciseName: newExerciseName,
    //         workoutNumber: workout_id,
    //         exercise_data: [],
    //     });

    //     $scope.insertExercise($scope.workouts[index].exercises[exerciseLength]);

    //     // Clear input fields after push
    //     $scope.newExerciseName = "";
    //     $scope.searchExerciseTerm = "";

    //     // console.log($scope.workouts[index]);
    // };


    $scope.addItem = function(index, newExerciseName, type) {

        
        var exerciseData = $scope.workouts[index];
        console.log(exerciseData);

        workoutService.addExercise(exerciseData, newExerciseName).then(function(results){
            console.log(results);
            
            exerciseData.exercises[results.exerciseIndex].exercise_id = results.unique_id;

        });

        // Clear input fields after push
        $scope.newExerciseName = "";
        $scope.searchExerciseTerm = "";

        // console.log($scope.workouts[index]);
    };



    $scope.addNewWorkout = function(index) {

        var workout = ({
            workoutName: 'New Workout',
            workoutNumber: '0',
            exercises: []
        });

        console.log(workout);

        services.insertWorkout(workout).then(function(results) {
            console.log(results);

            var unique_id = results.data.unique_id;
            $scope.workouts.push({
                workoutName: 'New Workout',
                workoutNumber: unique_id,
                exercises: []
            })
        })
    }

    $scope.saveWorkoutName = function(index) {
        console.log(index);

        var workoutName = $scope.workouts[index].workoutName;
        var workoutNumber = $scope.workouts[index].workoutNumber;

        services.updateWorkoutName(workoutName, workoutNumber);
    }

    

    $scope.deleteWorkout = function(index) {


        var id = $scope.workouts[index].workoutNumber;
        services.deleteWorkout(id).then(function() {
            $scope.workouts.splice(index, 1);
        });
    }




}])