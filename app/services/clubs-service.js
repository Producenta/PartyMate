var requester = require("../Helpers/requester");
var globalConstants = require("../globalConstants");

function getAllClubs() {

}


function getClubDetails(club) {
    if (!club.clubId) {
        club.clubId = club.Id;
    }
    var promise = new Promise(function(resolve, reject) {
        requester.get(globalConstants.baseUrl + "api/Clubs/Details/" + club.clubId)
            .then(function(resultDetails) {
                console.log("resultDetails");
                    console.dir(resultDetails);
                resolve(resultDetails);
            })
            .catch(function(err) {
                reject(err);
            });
    });

    return promise;
}

module.exports = {
    //getAll: getAllClubs,
    getClubDetails: getClubDetails
}
