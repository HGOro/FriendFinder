var friends = require("../data/friends");
   // console.log(friends);
module.exports = function(app){
    app.get("/api/friends",function(req,res){
    //    console.log(friends);
        res.json(friends);
    });

    app.post("/api/friends", function(req, res){
     //   console.log(req.body);
        
     /*
        capture the new friend and save to a variable
        loop through current friends and loop their each of the friends scores
        compare current friend score to new friend score
        */

        var newFriend = req.body;
        var newfriendScore = req.body.scores;
        var lowestDiff = 1000;
        var bestMatch = null;

        //loop through all the friends from the friends array (friends.js)
        for(var i = 0; i< friends.length; i++){
            //save current values to variables for easy use
            var currentFriend = friends[i];
            var currentFriendScores = friends[i].scores

            var currentDiff = 0;

            //loop through current friend's scores array in the first loop
            for(var j = 0; j<currentFriendScores.length;j++){
                //Math.abs(scoreA-scoreB);
                var scoreA = parseInt(currentFriendScores[i]);
                var scoreB = parseInt(newfriendScore[i]);
                //math.abs converts negative ints to positive
                var currentDiff = currentDiff + Math.abs(scoreA-scoreB);
            }

            //check if the current friends currentDiff(total scores value) is lower than the lowest Diff
            if(currentDiff <lowestDiff){
                lowestMatch = currentDiff;
                bestMatch = currentFriend;
            }
        }

        friends.push(newFriend);

        res.json(bestMatch);
        //console.log(bestMatch)

    });
}
