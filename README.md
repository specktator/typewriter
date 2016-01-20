# typewriter

typeWriter is a vanilla-javascript library for simulating keyboard typing effect.

[SEE DEMO](http://totallynoob.com/);

#usage: 

	settingsObejct = {
	    id: 'my-Element-Id', // @string, default value = 'typewriter'
	    text: `multiline
	      text to type`, //multiline text is acceptable- ES6
	    index:5 // starting character
	    timeSetting: 'fast' // @string , see default values timeSets
    };
	typeWriter.type(settingsObject);

NOTE: you can skip any property in settings except text.
NOTE2: run on document ready.

