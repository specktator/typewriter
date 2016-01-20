# typewriter

typeWriter is a vanilla-javascript library for simulating keyboard typing effect.

[SEE DEMO](http://specktator.github.io/typewriter/demo/demo.html);

#usage: 

	settingsObejct = {
	    id: 'my-Element-Id', // @string, default value = 'typewriter'
	    text: `multiline
	      text to type`, //multiline text is acceptable- ES6
	    index:5 // starting character - by default is 0
	    timeSetting: 'fast', // @string , see default values timeSets
	    autoScroll:false  // auto scrolling is by default enabled
    };
	typeWriter.type(settingsObject);

__NOTE__: you can skip any property in settings except text.

__NOTE2__: run on document ready.

#Use cases:

__typewriter.js__ can be used as:
* module to auto type song's lyrics
* helper module for applications targeted to people with disabilities
* simple typing effect on a website

#How does it work
Simply picks a random integer between two numbers and prints one-by-one the letters of the provided text, until the text length is exhausted.

#Custom settings
`timeSetting` property presets are 'breeze', 'fast', 'slow' and 'momstyping' (faster to slower scale). User-defined `timeSetting` can be set in the following way:

	typewriter.type({
		...
		timeSetting:[max_miliseconds, min_miliseconds]
		...
		});

