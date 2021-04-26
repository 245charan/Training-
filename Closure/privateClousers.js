var GamePoints = (function() {
    var points = 60000;
    function changeBy(amount) {
        points += amount;
    }
    return {
        reward: function() {
            changeBy(5000);
        },
        penalty: function() {
            changeBy(-5000);
        },
        score: function() {
            return points;
        }
    };
})();

console.log(GamePoints.score()); 
console.log(GamePoints.score()); 
GamePoints.penalty();
GamePoints.penalty();
console.log(GamePoints.score()); 

GamePoints.changeBy(10000) // can not access