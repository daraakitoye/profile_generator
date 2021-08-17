const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = {
  1: "What's your name? Nicknames are also acceptable :) ",
  2: "What's an activity you like doing? ",
  3: "What do you listen to while doing that? ",
  4: "Which meal is your favourite (eg: dinner, brunch, etc.) ",
  5: "What's your favourite thing to eat for that meal? ",
  6: "Which sport is your absolute favourite? ",
  7: "What is your superpower? In a few words, tell us what you are amazing at! "
};


const survey = () => {
  rl.question(`${questions[1]}`, (answer1) => {
    console.log();

    rl.question(`${questions[2]}`, (answer2) => {
      console.log();

      rl.question(`${questions[3]}`, (answer3) => {
        console.log()

        rl.question(`${questions[4]}`, (answer4) => {
          console.log();

          rl.question(`${questions[5]}`, (answer5) => {
            console.log();

            rl.question(`${questions[6]}`, (answer6) => {
              console.log();

              rl.question(`${questions[7]}`, (answer7) => {
                console.log()
                rl.close();
                console.log(`My New Profile: \nHi! My name is ${answer1}. \nAn activity I like is ${answer2} and I like to listen to ${answer3} while doing it. 
                My favourite meal is ${answer4}. My favourite thing to eat for ${answer4} is ${answer5}. 
                My absolute favourite sport is ${answer6}. If I had to pick a superpower I'd pick ${answer7}.`);
              });
            });
          });
        });
      });
    });
  });

};

survey();

