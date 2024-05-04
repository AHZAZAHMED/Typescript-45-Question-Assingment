var currentUsers = ["AHZAZ", "Ali", "Ahzaz", "Hammad", "Ahsan"];
var newUsers = ["AHZAZ", "Usman", "Ahsan", "Hammad", "haseeb"];
for (var i = 0; i < newUsers.length; i++) {
    var Userfound = true;
    var newUserName = newUsers[i].toLowerCase();
    for (var z = 0; z < currentUsers.length; z++) {
        var currentUsersName = currentUsers[z].toLowerCase();
        if (newUserName === currentUsersName) {
            Userfound = false;
            break;
        }
    }
    if (Userfound) {
        console.log("".concat(newUsers[i], ": This user name is available."));
    }
    else {
        console.log("".concat(newUsers[i], ": Sorry this user name is not available."));
    }
}
