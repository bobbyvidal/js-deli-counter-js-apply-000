katzDeliLine = [];
function takeANumber (katzDeliLine, number) 
{
  number = 1
  number = number +1
  katzDeliLine.push(number);
  return(`Welcome, #${number}.`)
}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return ("There is nobody waiting to be served!");
  }
  else
    return (`Currently serving ${katzDeliLine.shift()}.`)

}




function currentLine(katzDeliLine) {
  var line = []
  let i = 0;
  while (i < katzDeliLine.length) {
    line.push(` ` + (i+1) + `. ` + katzDeliLine[i]) + ` `
    i++;
  }
  if (katzDeliLine.length === 0 ) {
    return("The line is currently empty.");
  }
  else {
    return(`The line is currently:${line}`);
  }
}











