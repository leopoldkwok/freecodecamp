function countOnline(usersObj) {
    let result = 0;
    // Only change code below this line
    for(let user in usersObj) {
      if (usersObj[user].online === true) {
        result++;
      }
    }
    return result;
    // Only change code above this line
  }
  
  