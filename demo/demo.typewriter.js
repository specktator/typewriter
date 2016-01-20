/*

Copyright 2015 Christos Dimas <specktator@totallynoob.com>

This file is part of typeWriter.

femto is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

femto is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with femto.  If not, see <http://www.gnu.org/licenses/>.
Source: https://github.com/specktator/scraper

Github:  https://github.com/specktator/typewriter 
*/
  
/* usage: typeWriter.type(settingsObject);
  settingsObejct = {
        id: 'idOfTheElement', // @string, default value = 'typewriter'
        text: `multiline
          text to type`, //multiline text is acceptable- ES6
        index:5 // starting character
        timeSetting: 'fast' // @string , see default values timeSets
        };
  NOTE: you can skip any property in settings except text.
  NOTE2: run on document ready.
*/

typeWriter = (function(){
  var defSettings, settings, timeSets;
 
  /* name : [max ms, min ms] */
  timeSets= {
    'breeze': [50,5],
    'fast': [100,50],
    'slow': [150,100],
    'momtyping': [350,100]
  };
  
  defSettings = {
    text: 'No text inserted.', // multiline text with `` is legit for usage - ES6
    index: 0, // The index of the first character to start typing
    id: 'typewriter', //default element id to put the text into
    timeSetting: timeSets.momtyping, //typewriter's speed
    autoScroll: true // enable / disable autoscrolling
  };
  


  writer = function()
  {
    char = settings.text.charAt(settings.index);

    if(char != ''){
      e = document.getElementById( settings.id );
      e.innerHTML += char;
      if(settings.autoScroll === true){
        document.scrollTop = e.scrollHeight;
      }
      settings.index += 1;
      var t = setTimeout('writer()', Math.floor( (Math.random() * settings.timeSetting[0]) + settings.timeSetting[1]));
    };

  };

  settingsCheck = function (s){
    
    if ( typeof s == "undefined" ){
      s = defSettings;
      console.log("No settings defined! Trying default ...");
    }
    if ( typeof s.text === "undefined"){
      s.text = defSettings.text;
      console.log("No text defined!");
    }
    if ( typeof s.index === "undefined" || s.index != parseInt(s.index) ){
      s.index = defSettings.index;
    }
    if ( typeof s.id === "undefined"){
      s.id = defSettings.id;
    }
    if ( typeof s.timeSetting === "undefined"){
      s.timeSetting = defSettings.timeSetting;
    }
    if ( typeof s.timeSetting === "string" ){
      s.timeSetting = eval("timeSets."+s.timeSetting);
    }
    if ( typeof s.autoScroll === "undefined" ){
      s.autoScroll = defSettings.autoScroll;
    }
    settings = s;
    
  };

  this.type = function (settings){
    settingsCheck(settings);
    writer();

  };
  
  return this;
  
} () );

typeWriter.type({ autoScroll: true, timeSetting: 'breeze', text:`

We are proud individuals living on the city
But the flames couldn't go much higher
We find gods and religions to
To paint us with salvation
But no one
No nobody
Can give you the power

To rise over love
And over hate
Through this iron sky
That's fast becoming our minds
Over fear and into freedom

Oh, that's life
Left dripping down the walls
Of a dream that cannot breathe
In this harsh reality
Mass confusion spoon fed to the blind
Serves now to define our cold society

From which we'll rise over love
Over hate
From this iron sky
That's fast becoming our minds
Over fear and into freedom

You just got to hold on!
You just got to hold on!

Oh oh oh oh

(To those who can hear me, I say, do not despair
The misery that is now upon us is but the passing of greed
The bitterness of men who fear the way of human progress
The hate of men will pass, and dictators die
And the power they took from the people will return to the people
And so long as men die, liberty will never perish
Don't give yourselves to these unnatural men
Machine men with machine minds and machine hearts!
You are not machines, you are not cattle, you are men!
You, the people, have the power to make this life free and beautiful
To make this life a wonderful adventure
Let us use that power!
Let us all unite!)

And we'll rise over love
And over hate
Through this iron sky
That's fast becoming our minds
Over fear
And into freedom
Into freedom!

From which we'll rise over love
And over hate
Through this iron sky
That's fast becoming our minds
Over fear and into freedom
Freedom!

Oh, from which we'll rise over love
And over hate
Through this iron sky
That's fast becoming our minds
Over fear and into freedom
Freedom!

Freedom!
Rain on me!
Rain on me!

Paolo Nutini - Iron Sky Lyrics
`});