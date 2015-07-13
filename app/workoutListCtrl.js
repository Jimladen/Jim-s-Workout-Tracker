app.controller('workoutListCtrl', ['$scope', '$controller', 'services', 'workoutService', '$location', function($scope, $controller, services, workoutService, $location)
{



    services.getWorkouts().then(function(result)
    {
        var data = result.data;
        $scope.workouts = data;
        console.log($scope.workouts);
    })

    services.getWorkoutsHistory().then(function(result) {
        var data = result 
    })

    var type = 'edit';

    $scope.insertExercise = function(exercise)
    {
        services.insertExercise(exercise).then(function(results)
        {
            var data = results.data.unique_id;
            console.log(data);
        })
    }


    $scope.deleteExercise = function(parentIndex, index)
    {

        var id = $scope.workouts[parentIndex].exercises[index].exercise_id;


        console.log('delete exercise');

        console.log(id);

        services.deleteExercise(id).then(function()
        {
            $scope.workouts[parentIndex].exercises.splice(index, 1);
        });

    }



    $scope.saveExerciseData = function(topIndex, parentIndex, index)
    {

        var set_id = $scope.workouts[topIndex].exercises[parentIndex].exercise_data[index].set_id;
        var exerciseData = $scope.workouts[topIndex].exercises[parentIndex].exercise_data[index];

        workoutService.saveExerciseData(set_id, exerciseData, type).then(function(results)
        {
            exerciseData.set_id = results;
        });

    }





    $scope.addSet = function(parentIndex, index)
    {
        var workout_id = $scope.workouts[parentIndex].workoutNumber;
        var exercise_id = $scope.workouts[parentIndex].exercises[index].exercise_id;
        // console.log($scope.workouts[parentIndex].exercises[index]);
        $scope.workouts[parentIndex].exercises[index].exercise_data.push(
        {
            reps: '6',
            weight: '0',
            set_id: '0',
            exercise_id: exercise_id
        });


    }

    $scope.deleteSet = function(topIndex, parentIndex, index)
    {
        console.log('delete set');
        var id = $scope.workouts[topIndex].exercises[parentIndex].exercise_data[index].set_id;

        console.log(index);
        services.deleteExerciseData(id).then(function()
        {
            $scope.workouts[topIndex].exercises[parentIndex].exercise_data.splice(index, 1);
        });

    }


    $scope.totalReps = function(parentIndex, index)
    {
        //console.log('total reps called');

        //console.log($scope.exercises[index]);

        var exerciseData = $scope.workouts[parentIndex].exercises[index].exercise_data;
        var exercises = $scope.workouts[parentIndex].exercises[index];

        //console.log(exerciseData);

        var total = workoutService.totalReps(exerciseData);

        // console.log(total);

        exerciseData.totalReps = total;


        // $scope.averageReps(parentIndex,index);

        var getAverageReps = total / exerciseData.length;
        getAverageReps = getAverageReps.toFixed(0);
        // console.log(getAverageReps);
        exercises.averageReps = getAverageReps;



        //$scope.totalWeight(index);

        //$scope.averageWeight(index);

        workoutService.totalWeight(exerciseData);
        workoutService.averageWeight(exerciseData);

        // var oneRepMax = $scope.oneRepMax(total,  index);

        var oneRepMax = workoutService.oneRepMax(exerciseData);

        if (!oneRepMax)
        {
            oneRepMax = 0;
        }

        exercises.oneRepMax = oneRepMax;

        var targetWeight = workoutService.targetWeight(exerciseData);

        //var targetWeight = $scope.targetWeight(total, index);

        if (!targetWeight)
        {
            targetWeight = 0;
        }

        exercises.targetWeight = targetWeight;


        return parseInt(total);

    }



    $scope.addItem = function(index, newExerciseName)
    {


        var exerciseData = $scope.workouts[index];
        console.log(exerciseData);

        workoutService.addExercise(exerciseData, newExerciseName, type).then(function(results)
        {
            console.log(results);

            exerciseData.exercises[results.exerciseIndex].exercise_id = results.unique_id;

        });

        // Clear input fields after push
        $scope.newExerciseName = "";
        $scope.searchExerciseTerm = "";

        // console.log($scope.workouts[index]);
    };



    $scope.addNewWorkout = function(index)
    {

        var workout = (
        {
            workoutName: 'New Workout',
            workoutNumber: '0',
            exercises: []
        });

        console.log(workout);

        services.insertWorkout(workout).then(function(results)
        {
            console.log(results);

            var unique_id = results.data.unique_id;
            $scope.workouts.push(
            {
                workoutName: 'New Workout',
                workoutNumber: unique_id,
                exercises: []
            })
        })
    }

    $scope.saveWorkoutName = function(index)
    {
        console.log(index);

        var workoutName = $scope.workouts[index].workoutName;
        var workoutNumber = $scope.workouts[index].workoutNumber;

        services.updateWorkoutName(workoutName, workoutNumber);
    }



    $scope.deleteWorkout = function(index)
    {
        var id = $scope.workouts[index].workoutNumber;
        services.deleteWorkout(id).then(function()
        {
            $scope.workouts.splice(index, 1);
        });
    }




}])