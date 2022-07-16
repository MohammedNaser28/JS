let calc = function(score, totlascore) {
  let percent = (score / totlascore) * 100;
  let letterGrade = ''
  if (percent >= 90) {
    letterGrade = 'A'
  }else if (percent >= 80) {
    letterGrade = 'B'
  }else if (percent >=70){
    letterGrade = 'C'
  }else if( percent>=60) {
    letterGrade = 'D'
  }else {
    letterGrade = 'F'
  }
  return `You goat a ${letterGrade} (${percent}%)`
}


console.log(calc(140,140));
