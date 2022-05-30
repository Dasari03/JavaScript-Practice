// Write a isValidPassword function
//It accepts 2 arguments: password and username
//Password must:
// - be at least 8 characters
// - cannot contain spaces
// - cannot contain the username
//If all requirements are met, return true.
//Otherwise: false

//isValidPassword('89FjjInms', 'dogLuvr'); //true
//isValidPassword('dogLuvr123!', 'dogLuvr') //false

function isValidPassword(password, id){
    if(password.length >= 8 && password.indexOf(' ') !== 1 && password.includes(id) !== true){
        return true;
    }
    return false;
}

const idPassword1 = isValidPassword('applesamsung', 'lenovo');
console.log(idPassword1);