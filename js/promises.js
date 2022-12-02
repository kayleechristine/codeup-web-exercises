"use strict";
(function(){

    // Chaining Promises
    function getLastCommit(username) {
        return fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': 'GITHUB_ID'}}).then(response => {
            return response.json().then((data) => {
                console.log(data[0].created_at);
            });
        });
    }
    getLastCommit("kayleechristine");

    // Custom Promises
    function wait(millisec) {
        return new Promise((resolve) => {
            setTimeout(resolve, millisec);
        }).then(() => console.log(`You\'ll see this after ${millisec / 1000}s.`));
    }

    wait(1500);
    wait(3000);
    wait(5000);

})();