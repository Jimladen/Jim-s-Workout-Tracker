app.controller('trackWorkoutCtrl', ['$scope', '$controller', 'services', '$rootScope', '$location', '$routeParams', 'workout', 'workoutService', 
    function($scope, $controller, services, $rootScope, $location, $routeParams, workout, workoutService) {

    var workoutID = ($routeParams.workoutID) ? parseInt($routeParams.workoutID) : 0;

    
    services.getWorkout(workoutID).then(function(result) {
         console.log(result.data);
            var data = result.data;
             
             $scope.workoutName = data[0].workoutName;
             $scope.workout = data;
             $scope.exercises = data[0].exercises;
             console.log($scope.exercises);
             console.log($scope.workout);

             var today = new Date(); 
            var dd = today.getDate(); 
            var mm = today.getMonth()+1;//January is 0! 
            var yyyy = today.getFullYear(); 
            if(dd<10){dd='0'+dd} 
            if(mm<10){mm='0'+mm} 
            var phpDate = yyyy + '-' + mm + '-' + dd;
            var workoutData = {
                date: phpDate,
                workoutNumber: workoutID
            }
            //console.log(workoutData);
             services.insertWorkoutLog(workoutData).then(function(result) {
                //console.log(result);
                $scope.workout[0].workoutNumberLog = result.data.unique_id;

                var exercisesLength = $scope.exercises.length;
                //console.log(exercisesLength);
             // for (i = 0; i < exercisesLength; i++) {

             //    var exercise = $scope.workout[0].exercises[i];
             //    console.log(exercise);
             //    exercise.workoutNumberLog =  $scope.workout[0].workoutNumberLog;
             //    services.insertExerciseLog(exercise).then(function(results){
             //        console.log(exercise);
             //         exercise.exercise_id = results.data.unique_id;
             //    });
             // }

             });


          
        })

    var type = 'log';



    $scope.addItem = function(newExerciseName) {

        var exerciseData = $scope.workout[0];
        console.log(exerciseData);

        workoutService.addExercise(exerciseData, newExerciseName, type).then(function(results){
            console.log(results);
            
            exerciseData.exercises[results.exerciseIndex].exercise_id = results.unique_id;

        });

        // Clear input fields after push
        $scope.newExerciseName = "";
        $scope.searchExerciseTerm = "";

        // console.log($scope.workouts[index]);
    };


    $scope.deleteExercise = function(index) {

       var id = $scope.workout[0].exercises[index].exercise_id;


        console.log(index);
       
        console.log(id);

        // services.deleteExercise(id).then(function() {
        //     $scope.exercises.splice(index, 1);
        // });
        
        workoutService.deleteExercise(id, type).then(function(results){
            console.log(results);
            $scope.exercises.splice(index, 1);
        })
    }



    $scope.insertExerciseData = function(exerciseData) {
        services.insertExerciseData(exerciseData);
        console.log(exerciseData);
    }

    $scope.saveExerciseData = function(parentIndex, index) {

        var set_id = $scope.exercises[parentIndex].exercise_data[index].set_id;


        console.log(set_id);

        if (set_id != 0) {
            services.updateExerciseDataLog(set_id, $scope.exercises[parentIndex].exercise_data[index])
        } else {

            services.insertExerciseDataLog($scope.exercises[parentIndex].exercise_data[index]).then(function(results) {
                console.log(results);
                var unique_id = results.data.unique_id;
                console.log(unique_id)
                $scope.exercises[parentIndex].exercise_data[index].set_id = unique_id;
            });
        }
    }

    $scope.saveAllExerciseData = function(parentIndex, index) {

        console.log('saveall');

        for (var key in $scope.workouts[parentIndex].exercises[index].exercise_data) {
            if ($scope.workouts[parentIndex].exercises[index].exercise_data.hasOwnProperty(key)) {


                if ($scope.workouts[parentIndex].exercises[index].exercise_data[key].set_id == 0) {
                    services.insertExerciseData($scope.workouts[parentIndex].exercises[index].exercise_data[key]).then(function(results) {
                        console.log(results);
                        var unique_id = results.data.unique_id;
                        var exercise_id = $scope.workouts[parentIndex].exercises[index].exercise_id;
                        console.log(exercise_id);
                        $scope.workouts[parentIndex].exercises[index].exercise_data[key].exercise_id = exercise_id;

                        console.log(unique_id);
                    });
                } else {
                    var set_id = $scope.workouts[parentIndex].exercises[index].exercise_data[key].set_id;
                    services.updateExerciseData(set_id, $scope.workouts[parentIndex].exercises[index].exercise_data[key])
                }
                console.log($scope.workouts[parentIndex].exercises[index].exercise_data[key]);
            }
        }

    }



    $scope.addSet = function(index) {
        var workout_id = $scope.workoutNumber;
        var exercise_id = $scope.exercises[index].exercise_id;
        // console.log($scope.workouts[parentIndex].exercises[index]);
        $scope.exercises[index].exercise_data.push({
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



    $scope.totalReps = function(index) {
       //console.log('total reps called');

        //console.log($scope.exercises[index]);
        var total = 0;
        for (var i = 0; i < $scope.exercises[index].exercise_data.length; i++) {
            //console.log($scope.exercises[index].exercise_data);
            var data = $scope.exercises[index].exercise_data[i];

           // console.log(data.reps);

            total += (parseInt(data.reps));
        }

        if (!total) {
            total = 0;
        }

        $scope.exercises[index].totalReps = total;


        // $scope.averageReps(parentIndex,index);

        var getAverageReps = total / $scope.exercises[index].exercise_data.length;
        getAverageReps = getAverageReps.toFixed(0);
        // console.log(getAverageReps);
        $scope.exercises[index].averageReps = getAverageReps;

        $scope.totalWeight(index);

        $scope.averageWeight(index);

        var oneRepMax = $scope.oneRepMax(total,  index);

        if (!oneRepMax) {
            oneRepMax = 0;
        }

        $scope.exercises[index].oneRepMax = oneRepMax;

        var targetWeight = $scope.targetWeight(total, index);

        if (!targetWeight) {
            targetWeight = 0;
        }

        $scope.exercises[index].targetWeight = targetWeight;


        return parseInt(total);

    }



    $scope.totalSets = function(index) {

        var total = $scope.exercises[index].exercise_data.length;
        $scope.exercises[index].sets = total;

        if (!total) {
            total = 0;
        }
        return total;



    }


    $scope.totalWeight = function(index) {

        // console.log('total reps called');

        // console.log($scope.workouts[parentIndex].exercises[index]);
        var total = 0;
        for (var i = 0; i < $scope.exercises[index].exercise_data.length; i++) {
            // console.log($scope.workouts[parentIndex].exercises[index].exercise_data);
            var data = $scope.exercises[index].exercise_data[i];

            // console.log(data.weight);

            total += (parseInt(data.weight));
        }

        if (!total) {
            total = 0;
        }

        // console.log(total);
        $scope.exercises[index].totalWeight = total;

        return total;
    }

    $scope.averageWeight = function( index) {
        var totalSets = $scope.totalSets( index);
        var totalWeight = $scope.totalWeight(index);
        var averageWeight = totalWeight / totalSets;

        $scope.exercises[index].averageWeight = averageWeight;
        // console.log($scope.workouts[parentIndex].exercises[index]);

        return averageWeight;
    }


    // one rep max function
    $scope.oneRepMax = function(totalReps,index) {

        var getAverageReps = totalReps / $scope.exercises[index].exercise_data.length;

        var oneRepMax = parseInt($scope.averageWeight(index) / (1.0278 - (0.0278 * getAverageReps)));

        return oneRepMax;

        // console.log(oneRepMax);
    }


    // target weight 85% of 1RM - TO DO: changeable through settings page 
    $scope.targetWeight = function(totalReps, index) {

        var getAverageReps = totalReps / $scope.exercises[index].exercise_data.length;

        var targetWeight = parseInt($scope.averageWeight(index) / (1.0278 - (0.0278 * getAverageReps)) * 0.90);

        return targetWeight;

        // console.log(oneRepMax);
    }



      /* 

      ITEMS SPECIFIC TO WORKOUT EDIT CONTROLLER

      */






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