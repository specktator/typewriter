# typewriter
typeWriter is a javascript library for simulating keyboard typing effect.

usage: typeWriter.type(settingsObject);
  settingsObejct = {
        id: 'idOfTheElement', // @string, default value = 'typewriter'
        text: `multiline
          text to type`, //multiline text is acceptable- ES6
        index:5 // starting character
        timeSetting: 'fast' // @string , see default values timeSets
        };
OTE: you can skip any property in settings except text.
NOTE2: run on document ready.

