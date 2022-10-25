const spinnerCharacters = ['|','/','-','\\','|','/','-','\\',];
let timerValue = 0;
for (let i = 0 ; i < spinnerCharacters.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinnerCharacters[i]}   `); 
  }, timerValue);
  timerValue += 200;
}

// setTimeout(() => {
//   process.stdout.write('\r\\   '); 
// }, 1500);


