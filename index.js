function takeANumber(line, name) {
  var message = `Welcome, ${name}. You are number ${line.length + 1} in line.`;
  line.push(name);
  return message;
}
 function nowServing(line){
   var firstPerson = line.shift();
   var message = "";
   if (line.length === 0) {
     message = "There is nobody waiting to be served!";
   } else {
     message = firstPerson;
   }
   return message;
 }
