function runFiveMiles() {
    console.log('Go for a five-mile run');
  } 

function liftWeights() {
    console.log('Pump iron');
  }
  
function swimFortyLaps() {
    console.log('Swim 40 laps');
  } 

function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
  } 

function Monday() {
      exerciseRoutine(liftWeights);
  }

function Tuesday() {
exerciseRoutine(function() {
      console.log('Stretch! Work that core!')
  });
}

// using arrow function

exerciseRoutine(() => {console.log('Stretch! Work that core!');
    });

// shorter arrow function!

exerciseRoutine(() => console.log('Stretch! Work that core!'));

function morningRoutine(exercise) {
    let breakfast;
  
    if (exercise === liftWeights) {
      breakfast = 'protein bar';
    } else if (exercise === swimFortyLaps) {
      breakfast = 'kale smoothie';
    } else {
      breakfast = 'granola';
    }
  
    exerciseRoutine(exercise);
  
        return function() {
      console.log(`Nom nom nom, this ${breakfast} is delicious!`);
    }
  } 

  const afterExercise = morningRoutine(liftWeights);

  afterExercise();

  // learn challenges 

function receivesAFunction(callback) {
      return callback();
  }

receivesAFunction(function spy() {console.log("I am spying.")});


function returnsANamedFunction() {
    const fn = function insideFunction() {
        console.log("I have a name.")
    };
    return fn;
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("Ich bin anonymous.")
    };
 }