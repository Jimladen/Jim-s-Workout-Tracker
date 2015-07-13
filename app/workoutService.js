app.service('workoutService', function(services){
    var _self = this;

    results = [];

    this.saveExerciseData = function(set_id, exerciseData, type) {
        if (set_id != 0) {
            console.log('set_id is not 0');
             console.log('type ' + type);
            if (type == 'edit') {
                console.log(type);
                services.updateExerciseData(set_id, exerciseData);
            }
            else if (type == 'log') {
                console.log(type);
                 return services.updateExerciseDataLog(set_id, exerciseData).then(function(results){
                    return results;
                 });
            }
            
        }
        else {
            console.log(set_id);
            if (type == 'edit') {
                return services.insertExerciseData(exerciseData).then(function(results) {
                    console.log(results);
                    var unique_id = results.data.unique_id;
                    console.log(unique_id)
                    return unique_id; 
                });
            }
            else {
                return services.insertExerciseDataLog(exerciseData).then(function(results) {
                    console.log(results);
                    var unique_id = results.data.unique_id;
                    console.log(unique_id)
                    return unique_id; 

                })
            }
        }
    } // saveExerciseData

    this.addExercise = function(exerciseData, newExerciseName, type) {
        var exerciseLength = exerciseData.exercises.length;
        var workout_id = exerciseData.workoutNumber;
        var workout_id_log = exerciseData.workoutNumberLog;
        console.log(workout_id);
        console.log(exerciseLength);
        console.log(exerciseData);
        console.log(type);
        if (!exerciseLength) {
            exerciseLength = 0;
        }
      

        if (type == 'edit') {
              exerciseData.exercises.push({
                exerciseName: newExerciseName,
                workoutNumber: workout_id,
                exercise_data: [],
            });
            return services.insertExercise(exerciseData.exercises[exerciseLength]).then(function(results){
                var data = {
                    unique_id : results.data.unique_id,
                    exerciseIndex : exerciseLength
                    }
                return data;
            })
        }
        else if (type == 'log') {
            exerciseData.exercises.push({
                exerciseName: newExerciseName,
                workoutNumber: workout_id,
                workoutNumberLog: workout_id_log,
                exercise_data: [],
            });
            return services.insertExerciseLog(exerciseData.exercises[exerciseLength]).then(function(results){
                var data = {
                    unique_id : results.data.unique_id,
                    exerciseIndex : exerciseLength
                    }
                return data;
            })
        }
    } // addExercise

    this.deleteExercise = function(id, type) {
        if (type == 'edit') {

        }
        else if(type == 'log') {
             return services.deleteExerciseLog(id).then(function(results) {
               return results; 
            });
        }
    }



    this.totalReps = function(exerciseData) {
         

        var total = 0;
        for (var i = 0; i < exerciseData.length; i++) {
            //console.log($scope.exercises[index].exercise_data);
            var data = exerciseData[i];

           // console.log(data.reps);

            total += (parseInt(data.reps));
        }

        if (!total) {
            total = 0;
        }

        //console.log(exerciseData);
        

        return total;
    }


    this.totalWeight = function(exerciseData) {

        var total = 0;
        for (var i = 0; i < exerciseData.length; i++) {
            // console.log($scope.workouts[parentIndex].exercises[index].exercise_data);
            var data = exerciseData[i];

            // console.log(data.weight);

            total += (parseInt(data.weight));
        }

        if (!total) {
            total = 0;
        }
        return total;
    }

    this.oneRepMax = function(exerciseData) {

        var getAverageReps = this.totalReps(exerciseData) / exerciseData.length;

        var oneRepMax = parseInt(this.averageWeight(exerciseData) / (1.0278 - (0.0278 * getAverageReps)));

        return oneRepMax;
    }


    this.totalSets = function(exerciseData) {

        var total = exerciseData.length;

        if (!total) {
            total = 0;
        }
        return total;
    }

    this.averageWeight = function(exerciseData) {
        var totalSets = this.totalSets(exerciseData);
        var totalWeight = this.totalWeight(exerciseData);
        var averageWeight = totalWeight / totalSets;

        return averageWeight;
    }


    this.targetWeight = function(exerciseData) {
        var getAverageReps = this.totalReps(exerciseData) / exerciseData.length;

        var targetWeight = parseInt(this.averageWeight(exerciseData) / (1.0278 - (0.0278 * getAverageReps)) * 0.90);

        return targetWeight;
    }


})
