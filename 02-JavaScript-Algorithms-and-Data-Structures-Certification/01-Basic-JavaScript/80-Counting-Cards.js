var count = 0;

function cc(card) {
  // Only change code below this line
  if (card >= 2 && card <= 6) {
    count++;
    return `${count} Bet`;
  } else if (card >= 7 && card <= 9) {
    count = count + 0;
     if (count <=0 ) {
      return `${count} Hold`;
    } else {
        return `${count} Bet`;
    }
  } else if (card === 10 || card === 'J' || card === 'Q' || card === 'K' ||card === 'A' ) {
    count--;
    if (count <=0 ) {
      return `${count} Hold`;
    } else {
        return `${count} Bet`;
    }
  }

  return "Change Me";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
