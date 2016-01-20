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
    timeSetting: timeSets.momtyping //typewriter's speed
  };
  


  writer = function()
  {
    char = settings.text.charAt(settings.index);

    if(char != ''){
      e = document.getElementById( settings.id );
      e.innerHTML += char;
      document.scrollTop = e.scrollHeight;
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
    settings = s;
    
  };

  this.type = function (settings){
    settingsCheck(settings);
    writer();

  };
  
  return this;
  
} () );

typeWriter.type({ timeSetting: 'fast', text:`End of passion play, crumbling away
I'm your source of self-destruction
Veins that pump with fear, it's sucking darkest clear
Leading on your deaths' construction

Taste me, you will see
More is all you need
Dedicated to
How I'm killing you

Come crawling faster
Obey your master
Your life burns faster
Obey your master, master

Master of puppets, I'm pulling your strings
Twisting your mind, and smashing your dreams
Blinded by me, you can't see a thing
Just call my name, cause I'll hear you scream
Master, master
Just call my name, cause I'll hear you scream
Master, master

Needlework the way, never betray
Life of death becoming clearer
Pain monopoly, ritual misery
Chop your breakfast on a mirror

Taste me, you will see
More is all you need
Dedicated to
How I'm killing you

Come crawling faster
Obey your master
Your life burns faster
Obey your master, master

Master of puppets, I'm pulling your strings
Twisting your mind, and smashing your dreams
Blinded by me, you can't see a thing
Just call my name, cause I'll hear you scream
Master, master
Just call my name, cause I'll hear you scream
Master, master, master

Master, master
Where's the dreams that I've been after?
Master, master
Promised only lies

Laughter, laughter
All I hear and see is laughter
Laughter, laughter
Laughing at my cries, fix me

Hell is worth all that, natural habitat
Just a rhyme without a reason
Never ending maze, drift on numbered days
Now your life is out of season

I will occupy
I will help you die
I will run through you
Now I rule you too

Come crawling faster
Obey your master
Your life burns faster
Obey your master, master

Master of puppets, I'm pulling your strings
Twisting your mind, and smashing your dreams
Blinded by me, you can't see a thing
Just call my name, cause I'll hear you scream
Master, master
Just call my name, cause I'll hear you scream
Master, master

Read more: Metallica - Master Of Puppets Lyrics | MetroLyrics
`});