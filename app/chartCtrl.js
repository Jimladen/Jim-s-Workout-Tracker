app.controller('chartCtrl', ['$scope', '$controller', 'services', 'workoutService', '$location', '$routeParams', function($scope, $controller, services, workoutService, $location, $routeParams) {

    console.log($location.path())


    services.getWorkouts().then(function(result) {
        var data = result.data;
        // console.log(data);

        var workoutLength = data.length;
        for (i = 0; i < workoutLength; i++) {

            data[i].totalTrackedWorkouts = 0;

            if (data[i].trackedWorkouts) {
                var totalWorkouts = data[i].trackedWorkouts.length;
                data[i].totalTrackedWorkouts = totalWorkouts;
            }
        }

        $scope.workouts = data;
        console.log($scope.workouts);
        $scope.exerciseNameModel = $scope.workouts[0].exercises[0].exerciseName;
    })

    

    $scope.updateNameModel = function(parentIndex, index) {
        $scope.exerciseNameModel = $scope.workouts[parentIndex].exercises[index].exerciseName;
    }


}])



app.directive('ngExerciseName', function() {
    return {
        controller: function($scope) {}
    }
});


app.directive('chartPlugin', ['$compile', function($compile) {
    return {
        restrict: 'A',
        require: '^ngModel',
        scope: {
            ngModel: '='
        },
        template: '<h2>1RM for {{ngModel}}</h4> <canvas id="myChart" width="400" height="400"></canvas>',
        controller: ['$scope', 'services', function($scope, services) {

            services.getWorkouts().then(function(result) {
                var data = result.data;
                console.log(data);

                $scope.workouts = result.data;



            })
        }],
        link: function(scope) {
            console.log(scope);

            scope.$watch('ngModel', function() {
                    //console.log(dataPoints);


                    var dataPoints = [];
                    var dateValues = [];
                    var data = scope.workouts;

                    for (i = 0; i < data.length; i++) {
                        console.log(data[i].trackedWorkouts);

                        if (data[i].trackedWorkouts) {
                            for (j = 0; j < data[i].trackedWorkouts.length; j++) {
                                console.log(data[i].trackedWorkouts[j]);

                                var date = data[i].trackedWorkouts[j].date;

                                for (k = 0; k < data[i].trackedWorkouts[j].exercises.length; k++) {

                                    var exercise = data[i].trackedWorkouts[j].exercises[k]
                                    if (exercise.exerciseName == scope.ngModel) {
                                        var oneRepMax = exercise.oneRepMax;
                                        console.log(exercise.oneRepMax);
                                        dataPoints.push(oneRepMax);
                                        dateValues.push(date);
                                    }
                                }
                            }
                        }
                    }



                    var dataPoints = dataPoints;
                    var dateValues = dateValues;

                    console.log(dataPoints)

                    chartGraph(dateValues, dataPoints);
                })
                // console.log(dataPoints);

        }
    }
}]);


var chartGraph = function(dateValues, dataPoints) {
    console.log(dateValues, dataPoints);
    var data = {
        labels: dateValues,
        datasets: [{
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: dataPoints
        }]
    };
    var ctx = document.getElementById("myChart").getContext("2d");
    var myLineChart = new Chart(ctx).Line(data);
}
