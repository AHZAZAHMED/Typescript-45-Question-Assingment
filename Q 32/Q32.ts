let currentUsers : string[] = ["AHZAZ","Ali","Ahzaz","Hammad","Ahsan"];
let newUsers : string[] = ["AHZAZ","Usman","Ahsan","Hammad","haseeb"];

for(let i = 0;i < newUsers.length; i++){

    let Userfound = true;
    let newUserName = newUsers[i].toLowerCase();

    for(let z = 0;z < currentUsers.length; z++){
        let currentUsersName = currentUsers[z].toLowerCase();

        if(newUserName === currentUsersName){
            Userfound = false;
            break;
        }
    }
    if(Userfound){
        console.log(`${newUsers[i]}: This user name is available.`);
    } else{
        console.log(`${newUsers[i]}: Sorry this user name is not available.`);
    }
}