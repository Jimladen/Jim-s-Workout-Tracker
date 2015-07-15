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

                firstExerciseName = $scope.workouts[0].exercises[0].exerciseName;
                

                    var values = getChartData(result.data, firstExerciseName);
                    var dataPoints = values[0];
                    var dateValues = values[1];

                    console.log(dataPoints)

                    chartGraph(dateValues, dataPoints);
               

                 console.log(firstExerciseName);

            })
        }],
        link: function(scope) {
            console.log(scope);

            scope.$watch('ngModel', function() {
                    //console.log(dataPoints);

                    var data = scope.workouts;

                    var values = getChartData(data, scope.ngModel);
                    var dataPoints = values[0];
                    var dateValues = values[1];

                    console.log(dataPoints)

                    chartGraph(dateValues, dataPoints);
                })
                // console.log(dataPoints);

        }
    }
}]);


getChartData = function(data, exerciseNameModel) {

                    var dataPoints = [];
                    var dateValues = [];

                    for (i = 0; i < data.length; i++) {
                       

                        if (data[i].trackedWorkouts) {
                             console.log(data[i].trackedWorkouts);
                            for (j = 0; j < data[i].trackedWorkouts.length; j++) {
                                console.log(data[i].trackedWorkouts[j]);

                                var date = data[i].trackedWorkouts[j].date;

                                for (k = 0; k < data[i].trackedWorkouts[j].exercises.length; k++) {

                                    var exercise = data[i].trackedWorkouts[j].exercises[k]
                                    if (exercise.exerciseName == exerciseNameModel) {
                                        var oneRepMax = exercise.oneRepMax;
                                        console.log(exercise.oneRepMax);
                                        dataPoints.push(oneRepMax);
                                        dateValues.push(date);
                                    }
                                }
                            }
                        }
                    }

                    return [dataPoints, dateValues];
}


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
