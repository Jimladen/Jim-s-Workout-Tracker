app.controller('trackWorkoutCtrl', ['$scope', '$controller', 'services', '$rootScope', '$location', '$routeParams', 'workout', 'workoutService',
    function($scope, $controller, services, $rootScope, $location, $routeParams, workout, workoutService) {

        var workoutID = ($routeParams.workoutID) ? parseInt($routeParams.workoutID) : 0;


        var type = 'log';


        console.log($location)

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0! 
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        var phpDate = yyyy + '-' + mm + '-' + dd;

        $scope.date = dd + '-' + mm + '-' + yyyy;

        if ($location.path().indexOf('history/view-workout/') > -1) {
             services.getTrackedWorkout(workoutID).then(function(result) {
                console.log(result.data);
                var data = result.data;

                $scope.workoutName = data[0].workoutName;
                $scope.workout = data;
                $scope.exercises = data[0].exercises;
                console.log($scope.exercises);
                console.log($scope.workout);

                });
        } else {
            services.getWorkout(workoutID).then(function(result) {
                console.log(result.data);
                var data = result.data;

                $scope.workoutName = data[0].workoutName;
                $scope.workout = data;
                $scope.exercises = data[0].exercises;
                console.log($scope.exercises);
                console.log($scope.workout);
                var workoutData = {
                        date: phpDate,
                        workoutNumber: workoutID
                    }
                    //console.log(workoutData);
                services.insertWorkoutLog(workoutData).then(function(result) {
                    //console.log(result);
                    $scope.workout[0].workoutNumberLog = result.data.unique_id;

                    var exercisesLength = $scope.exercises.length;
                    console.log(exercisesLength);
                    for (i = 0; i < exercisesLength; i++) {

                        var exercise = $scope.workout[0].exercises[i];
                        console.log(exercise);
                        exercise.workoutNumberLog = $scope.workout[0].workoutNumberLog;
                        services.insertExerciseLog(exercise).then(function(results) {
                            console.log(exercise);
                            exercise.exercise_id = results.data.unique_id;
                        });
                    }
                });
            })
        }


        $scope.addItem = function(newExerciseName) {
            var exerciseData = $scope.workout[0];
            console.log(exerciseData);

            workoutService.addExercise(exerciseData, newExerciseName, type).then(function(results) {
                console.log(results);

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

            workoutService.deleteExercise(id, type).then(function(results) {
                console.log(results);
                $scope.exercises.splice(index, 1);
            })
        }



        $scope.saveExerciseData = function(parentIndex, index) {

            var set_id_log = $scope.workout[0].exercises[parentIndex].exercise_data[index].set_id_log;
            var exerciseData = $scope.workout[0].exercises[parentIndex].exercise_data[index];
            exerciseData.workoutNumberLog = $scope.workout[0].workoutNumberLog;


             var workoutNumberLog = $scope.workout[0].workoutNumberLog;
             var exercise_id = $scope.exercises[index].exercise_id;
             var oneRepMax = $scope.exercises[index].oneRepMax;



            if (!set_id_log) {
                set_id_log = 0;
            }
            console.log(set_id_log);
            workoutService.saveExerciseData(set_id_log, exerciseData, type).then(function(results) {
                console.log(results);
                if (!isNaN(results)) {
                    exerciseData.set_id_log = results;
                    services.updateOneRepMax(workoutNumberLog, exercise_id, oneRepMax).then(function(results) {
                        console.log(results);
                    })
                }
            });
        }



        $scope.addSet = function(index) {
            var workoutNumberLog = $scope.workout[0].workoutNumberLog;
            var exercise_id = $scope.exercises[index].exercise_id;
            // console.log($scope.workouts[parentIndex].exercises[index]);
            $scope.exercises[index].exercise_data.push({
                reps: '6',
                weight: '0',
                set_id: '0',
                exercise_id: exercise_id,
                workoutNumberLog: workoutNumberLog
            });


        }

        $scope.deleteSet = function(parentIndex, index) {
            console.log('delete set');
            var id = $scope.workout[0].exercises[parentIndex].exercise_data[index].set_id_log;
            console.log($scope.workout[0].exercises[parentIndex].exercise_data[index]);
            if (id) {
                console.log('has id');
                services.deleteExerciseDataLog(id).then(function(results) {
                    console.log(results);
                    $scope.workout[0].exercises[parentIndex].exercise_data.splice(index, 1);
                });
            } else {
                $scope.workout[0].exercises[parentIndex].exercise_data.splice(index, 1);
            }

        }



        $scope.totalReps = function(index) {
            //console.log('total reps called');

            //console.log($scope.exercises[index]);

            var exerciseData = $scope.exercises[index].exercise_data;

            var total = workoutService.totalReps(exerciseData);

            $scope.exercises[index].totalReps = total;


            // $scope.averageReps(parentIndex,index);

            var getAverageReps = total / exerciseData.length;
            getAverageReps = getAverageReps.toFixed(0);
            // console.log(getAverageReps);
            $scope.exercises[index].averageReps = getAverageReps;



            //$scope.totalWeight(index);

            //$scope.averageWeight(index);

            workoutService.totalWeight(exerciseData);
            workoutService.averageWeight(exerciseData);

            // var oneRepMax = $scope.oneRepMax(total,  index);

            var oneRepMax = workoutService.oneRepMax(exerciseData);

           

            if (!oneRepMax) {
                oneRepMax = 0;
            }

            $scope.exercises[index].oneRepMax = oneRepMax;

            console.log($scope.exercises[index].oneRepMax)



            var targetWeight = workoutService.targetWeight(exerciseData);

            //var targetWeight = $scope.targetWeight(total, index);

            if (!targetWeight) {
                targetWeight = 0;
            }

            $scope.exercises[index].targetWeight = targetWeight;


            return parseInt(total);

        }

    }
])
