
/*
Easter Egg:
mainFullscreen() will maximize the current area.
mainFullscreen( false ) will return it to normal.
 */

(function() {
  var quotes;

  quotes = ["Metal Gear?", "This isn't a car", "It's like the reverse corkscrew, but you spin me", "Certified Penetration Tester", "\"I'm still nippy :(\"", "\"I should add that to the site footer.\"", "ok hello", "Software Developers were seen shouting at a bus", "Get out of the lift", "Achieved with CSS3", "I would", "it is a mystery", "sometimes I wonder if science thinks about me as much as I think about it idk", "hue", "And away we go", "mvp", "rip in peace", "You are the Dancing Queen<br />Lettuce Scream<br />Holy Submarine", "( ͡° ͜ʖ ͡°)", "Reticulating Splines", "You wouldn't download a website", "sitty thing??", "Work harder. Get a car.", "I solemnly swear I am up to no good.", "Game of the Year", "Britishname Complicated", "nyello", "i lied", "That's moderately Raven", "Snaaaaaaaake!", "Not enough minerals", "Spawn more Overlords", "ayyyyyy", "But what is the plural of Haggis?", "You're not even a real journalism.", "[website intensifies]", "*Angrily fixes Bow Tie*", "And the crowd goes mild", "well, yes", "Why does my tea taste like flowers?", "&gt; tfw your almonds aren't activated", "You have to be there to be not square", "\"I'm happy with my Fisher Price sized Return key\"", "smell my hair", "Best Chick Flick: Chicken Run", "how do u face ur problem if ur problem is ur face??", "why fall in love when u can fall asleep", "*you're", "with great power comes great electricity bill", "7/11 was a part time job", "there was an attempt", "u did a do", "Be aware of me!", "The Alright Wall Of China", "You've still got spots!", "It was me. I let the dogs out.", "Humanity was born without claws, without fangs, without scales.<br />So we forged them in fire and crafted them of steel.", "Oh yes, lot's of yeah.", "Ah, the Rolls Royce. Truly the Rolls Royce of automobiles.", "Geth do not *intentionally* infiltrate.", "/dev/null", "kill yourself or die trying", "well hello there", "not so fast mister", "yes i'll hold", "now playing", "music enabled for 009", "Have you tried turning it off and on again?", "You wouldn't shoot a policeman", "0118 999 881 999 119 725.. 3", "I'll just put it here with the rest of the fire.", "Fire - exclamation mark - fire - exclamation mark - help me - exclamation mark.<br />Looking forward to hearing from you.", "I don't know if it's the loss of blood or the melting plastic from the monitor, but I feel great!", "Good morning, that's a nice tnetennba.", "I'm not a window cleaner!", "\"My mum's on Friendface. She has put down her current mood as 'sensual'.\"", "Elevator's not worthy.", "woomy", "They say taupe is very soothing.", "This city deserves a better class of criminal.", "The Lamborghini, then. Much more subtle.", "I would lose weight but I hate losing", "He kissed my bottom, Your Honor.", "\"Wow, this is the kind of car you see on commercials.\"", "Shut up Judge!", "Gay probe coming to save me. Got it.", "No amount of careful design by NASA can get around a determined arsonist with a tank of pure oxygen.", "Everything you type is being broadcast live all over the world.<br />Look! A pair of boobs! -> (.Y.)", "\"Brought product to surface of Mars. It stopped working. 0/10.\"", "Yes, of course duct tape works in a near-vacuum. Duct tape works anywhere. Duct tape is magic and should be worshipped.", "As with most of life's problems, this one can be solved by a box of pure radiation.", "Only an idiot would keep that thing near the Hab. So anyway, I brought it back to the Hab.", "Problem is (follow me closely here, the science is pretty complicated), if I cut a hole in the Hab, the air won't stay inside anymore.", "All the subtlety and finesse of a napalm enema.", "\"I'm running away with your wife!\", \"Great!\"", "If you see my wife, tell her I said \"Hello\".", "\"I'm not a vegetarian because I love animals, I'm vegetarian because I hate plants.\"", "Make up looks pretty on the outside, but it doesn't hide the ugly on the inside.<br />Unless you eat it.", "Education is important but big biceps are importanter.", "Just because you're trash doesn't mean you can't do great things. It's garbage can, not garbage cannot.", "\"Oh, it doesn't like being stuck in the past.\"", "I haven't eated since the last time I eated.", "\"There's actually more cells in our brains than there are brains in our entire body\"", "<code>Bug 000871 [projectiles] - babies fall to death when born on stairs</code>", "<code>This is a menacing iron spike. This object menaces with spikes of iron.</code>", "<code>Bug 5971: Fat dwarves eating causes lag</code>", "<code>Bug 6817: 'Behold, mortal. I am a diving being.'</code>", "<code>'I died.' 'The Weather looks to be fine today.' 'I heard that I died.'</code>", "<code>'In a time before time, I killed me.' -Human with nothing else to gossip about</code>", "Skunk (ˈskəŋk): Black and white fart squirrel", "We don't have time to be sexy", "Now in colour", "\"Come with me if you want to leave.\"", "Cameras are like shotguns. The closer the target, the greater the damage.", "Unregistered Hypercam 2", "These are the voyages of the Starprise Entership", "Profound. But fundamentally bollocks."];

  document.getElementById("main--footer--quote").innerHTML = quotes[Math.floor(Math.random() * quotes.length)];

  window.mainFullscreen = function(active) {
    var eMain;
    if (active == null) {
      active = true;
    }
    eMain = document.getElementById("main--main");
    if (active) {
      eMain.style.position = "absolute";
      eMain.style.top = 0;
      eMain.style.left = 0;
      eMain.style.right = 0;
      eMain.style.bottom = 0;
      eMain.style.margin = 0;
      return eMain.style.background = "white";
    } else {
      eMain.style.position = null;
      eMain.style.top = null;
      eMain.style.left = null;
      eMain.style.right = null;
      eMain.style.bottom = null;
      eMain.style.margin = null;
      return eMain.style.background = null;
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VzL2xheW91dHMvbWFpbi9tYWluLmpzIiwic291cmNlcyI6WyJyZXNvdXJjZXMvbGF5b3V0cy9tYWluL21haW4uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0FBQUE7QUFBQSxNQUFBOztFQU1BLE1BQUEsR0FBUyxDQUNSLGFBRFEsRUFFUixrQkFGUSxFQUdSLGtEQUhRLEVBSVIsOEJBSlEsRUFLUix3QkFMUSxFQU1SLDJDQU5RLEVBT1IsVUFQUSxFQVFSLGlEQVJRLEVBU1IscUJBVFEsRUFVUixvQkFWUSxFQVdSLFNBWFEsRUFZUixpQkFaUSxFQWFSLCtFQWJRLEVBY1IsS0FkUSxFQWVSLGdCQWZRLEVBZ0JSLEtBaEJRLEVBaUJSLGNBakJRLEVBa0JSLG1FQWxCUSxFQW1CUixhQW5CUSxFQW9CUixzQkFwQlEsRUFxQlIsaUNBckJRLEVBc0JSLGVBdEJRLEVBdUJSLHlCQXZCUSxFQXdCUixzQ0F4QlEsRUF5QlIsa0JBekJRLEVBMEJSLHlCQTFCUSxFQTJCUixRQTNCUSxFQTRCUixRQTVCUSxFQTZCUix5QkE3QlEsRUE4QlIsZUE5QlEsRUErQlIscUJBL0JRLEVBZ0NSLHNCQWhDUSxFQWlDUixTQWpDUSxFQWtDUixtQ0FsQ1EsRUFtQ1Isb0NBbkNRLEVBb0NSLHVCQXBDUSxFQXFDUix5QkFyQ1EsRUFzQ1IseUJBdENRLEVBdUNSLFdBdkNRLEVBd0NSLHFDQXhDUSxFQXlDUix3Q0F6Q1EsRUEwQ1IsdUNBMUNRLEVBMkNSLHFEQTNDUSxFQTRDUixlQTVDUSxFQTZDUiwrQkE3Q1EsRUE4Q1IscURBOUNRLEVBK0NSLHlDQS9DUSxFQWdEUixTQWhEUSxFQWlEUiwrQ0FqRFEsRUFrRFIsMEJBbERRLEVBbURSLHNCQW5EUSxFQW9EUixZQXBEUSxFQXFEUixpQkFyRFEsRUFzRFIsMkJBdERRLEVBdURSLHlCQXZEUSxFQXdEUixnQ0F4RFEsRUF5RFIsMkhBekRRLEVBMERSLHdCQTFEUSxFQTJEUiw0REEzRFEsRUE0RFIseUNBNURRLEVBNkRSLFdBN0RRLEVBOERSLDZCQTlEUSxFQStEUixrQkEvRFEsRUFnRVIsb0JBaEVRLEVBaUVSLGVBakVRLEVBa0VSLGFBbEVRLEVBbUVSLHVCQW5FUSxFQW9FUiw2Q0FwRVEsRUFxRVIsZ0NBckVRLEVBc0VSLDhCQXRFUSxFQXVFUixrREF2RVEsRUF3RVIsMkhBeEVRLEVBeUVSLG1HQXpFUSxFQTBFUix3Q0ExRVEsRUEyRVIsMkJBM0VRLEVBNEVSLDZFQTVFUSxFQTZFUix3QkE3RVEsRUE4RVIsT0E5RVEsRUErRVIsa0NBL0VRLEVBZ0ZSLGdEQWhGUSxFQWlGUiwwQ0FqRlEsRUFrRlIsdUNBbEZRLEVBbUZSLGtDQW5GUSxFQW9GUiwwREFwRlEsRUFxRlIsZ0JBckZRLEVBc0ZSLHNDQXRGUSxFQXVGUixzR0F2RlEsRUF3RlIsc0dBeEZRLEVBeUZSLG1FQXpGUSxFQTBGUix5SEExRlEsRUEyRlIscUZBM0ZRLEVBNEZSLDRGQTVGUSxFQTZGUix3SUE3RlEsRUE4RlIsaURBOUZRLEVBK0ZSLGtEQS9GUSxFQWdHUixnREFoR1EsRUFpR1Isd0ZBakdRLEVBa0dSLDBHQWxHUSxFQW1HUix3REFuR1EsRUFvR1IseUdBcEdRLEVBcUdSLGtEQXJHUSxFQXNHUiw4Q0F0R1EsRUF1R1Isd0ZBdkdRLEVBd0dSLGtGQXhHUSxFQXlHUixzRkF6R1EsRUEwR1Isc0RBMUdRLEVBMkdSLCtEQTNHUSxFQTRHUixxRkE1R1EsRUE2R1IsNkZBN0dRLEVBOEdSLCtDQTlHUSxFQStHUiwrQkEvR1EsRUFnSFIsZUFoSFEsRUFpSFIsd0NBakhRLEVBa0hSLDJFQWxIUSxFQW1IUix5QkFuSFEsRUFvSFIsa0RBcEhRLEVBcUhSLHVDQXJIUTs7RUF3SFQsUUFBUSxDQUFDLGNBQVQsQ0FBeUIscUJBQXpCLENBQWdELENBQUMsU0FBakQsR0FDQyxNQUFRLENBQUEsSUFBSSxDQUFDLEtBQUwsQ0FBWSxJQUFJLENBQUMsTUFBTCxDQUFBLENBQUEsR0FBZ0IsTUFBTSxDQUFDLE1BQW5DLENBQUE7O0VBRVQsTUFBTSxDQUFDLGNBQVAsR0FBd0IsU0FBRSxNQUFGO0FBQ3ZCLFFBQUE7O01BRHlCLFNBQVM7O0lBQ2xDLEtBQUEsR0FBUSxRQUFRLENBQUMsY0FBVCxDQUF3QixZQUF4QjtJQUNSLElBQUcsTUFBSDtNQUNDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBWixHQUF1QjtNQUN2QixLQUFLLENBQUMsS0FBSyxDQUFDLEdBQVosR0FBa0I7TUFDbEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFaLEdBQW1CO01BQ25CLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBWixHQUFvQjtNQUNwQixLQUFLLENBQUMsS0FBSyxDQUFDLE1BQVosR0FBcUI7TUFDckIsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFaLEdBQXFCO2FBQ3JCLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBWixHQUF5QixRQVAxQjtLQUFBLE1BQUE7TUFTQyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVosR0FBdUI7TUFDdkIsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFaLEdBQWtCO01BQ2xCLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBWixHQUFtQjtNQUNuQixLQUFLLENBQUMsS0FBSyxDQUFDLEtBQVosR0FBb0I7TUFDcEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFaLEdBQXFCO01BQ3JCLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBWixHQUFxQjthQUNyQixLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVosR0FBeUIsS0FmMUI7O0VBRnVCO0FBakl4QiIsInNvdXJjZXNDb250ZW50IjpbIiMjI1xuRWFzdGVyIEVnZzpcbm1haW5GdWxsc2NyZWVuKCkgd2lsbCBtYXhpbWl6ZSB0aGUgY3VycmVudCBhcmVhLlxubWFpbkZ1bGxzY3JlZW4oIGZhbHNlICkgd2lsbCByZXR1cm4gaXQgdG8gbm9ybWFsLlxuIyMjXG5cbnF1b3RlcyA9IFtcblx0XCJNZXRhbCBHZWFyP1wiXG5cdFwiVGhpcyBpc24ndCBhIGNhclwiXG5cdFwiSXQncyBsaWtlIHRoZSByZXZlcnNlIGNvcmtzY3JldywgYnV0IHlvdSBzcGluIG1lXCJcblx0XCJDZXJ0aWZpZWQgUGVuZXRyYXRpb24gVGVzdGVyXCJcblx0XCJcXFwiSSdtIHN0aWxsIG5pcHB5IDooXFxcIlwiXG5cdFwiXFxcIkkgc2hvdWxkIGFkZCB0aGF0IHRvIHRoZSBzaXRlIGZvb3Rlci5cXFwiXCJcblx0XCJvayBoZWxsb1wiXG5cdFwiU29mdHdhcmUgRGV2ZWxvcGVycyB3ZXJlIHNlZW4gc2hvdXRpbmcgYXQgYSBidXNcIlxuXHRcIkdldCBvdXQgb2YgdGhlIGxpZnRcIlxuXHRcIkFjaGlldmVkIHdpdGggQ1NTM1wiXG5cdFwiSSB3b3VsZFwiXG5cdFwiaXQgaXMgYSBteXN0ZXJ5XCJcblx0XCJzb21ldGltZXMgSSB3b25kZXIgaWYgc2NpZW5jZSB0aGlua3MgYWJvdXQgbWUgYXMgbXVjaCBhcyBJIHRoaW5rIGFib3V0IGl0IGlka1wiXG5cdFwiaHVlXCJcblx0XCJBbmQgYXdheSB3ZSBnb1wiXG5cdFwibXZwXCJcblx0XCJyaXAgaW4gcGVhY2VcIlxuXHRcIllvdSBhcmUgdGhlIERhbmNpbmcgUXVlZW48YnIgLz5MZXR0dWNlIFNjcmVhbTxiciAvPkhvbHkgU3VibWFyaW5lXCJcblx0XCIoIM2hwrAgzZzKliDNocKwKVwiXG5cdFwiUmV0aWN1bGF0aW5nIFNwbGluZXNcIlxuXHRcIllvdSB3b3VsZG4ndCBkb3dubG9hZCBhIHdlYnNpdGVcIlxuXHRcInNpdHR5IHRoaW5nPz9cIlxuXHRcIldvcmsgaGFyZGVyLiBHZXQgYSBjYXIuXCJcblx0XCJJIHNvbGVtbmx5IHN3ZWFyIEkgYW0gdXAgdG8gbm8gZ29vZC5cIlxuXHRcIkdhbWUgb2YgdGhlIFllYXJcIlxuXHRcIkJyaXRpc2huYW1lIENvbXBsaWNhdGVkXCJcblx0XCJueWVsbG9cIlxuXHRcImkgbGllZFwiXG5cdFwiVGhhdCdzIG1vZGVyYXRlbHkgUmF2ZW5cIlxuXHRcIlNuYWFhYWFhYWFrZSFcIlxuXHRcIk5vdCBlbm91Z2ggbWluZXJhbHNcIlxuXHRcIlNwYXduIG1vcmUgT3ZlcmxvcmRzXCJcblx0XCJheXl5eXl5XCJcblx0XCJCdXQgd2hhdCBpcyB0aGUgcGx1cmFsIG9mIEhhZ2dpcz9cIlxuXHRcIllvdSdyZSBub3QgZXZlbiBhIHJlYWwgam91cm5hbGlzbS5cIlxuXHRcIlt3ZWJzaXRlIGludGVuc2lmaWVzXVwiXG5cdFwiKkFuZ3JpbHkgZml4ZXMgQm93IFRpZSpcIlxuXHRcIkFuZCB0aGUgY3Jvd2QgZ29lcyBtaWxkXCJcblx0XCJ3ZWxsLCB5ZXNcIlxuXHRcIldoeSBkb2VzIG15IHRlYSB0YXN0ZSBsaWtlIGZsb3dlcnM/XCJcblx0XCImZ3Q7IHRmdyB5b3VyIGFsbW9uZHMgYXJlbid0IGFjdGl2YXRlZFwiXG5cdFwiWW91IGhhdmUgdG8gYmUgdGhlcmUgdG8gYmUgbm90IHNxdWFyZVwiXG5cdFwiXFxcIkknbSBoYXBweSB3aXRoIG15IEZpc2hlciBQcmljZSBzaXplZCBSZXR1cm4ga2V5XFxcIlwiXG5cdFwic21lbGwgbXkgaGFpclwiXG5cdFwiQmVzdCBDaGljayBGbGljazogQ2hpY2tlbiBSdW5cIlxuXHRcImhvdyBkbyB1IGZhY2UgdXIgcHJvYmxlbSBpZiB1ciBwcm9ibGVtIGlzIHVyIGZhY2U/P1wiXG5cdFwid2h5IGZhbGwgaW4gbG92ZSB3aGVuIHUgY2FuIGZhbGwgYXNsZWVwXCJcblx0XCIqeW91J3JlXCJcblx0XCJ3aXRoIGdyZWF0IHBvd2VyIGNvbWVzIGdyZWF0IGVsZWN0cmljaXR5IGJpbGxcIlxuXHRcIjcvMTEgd2FzIGEgcGFydCB0aW1lIGpvYlwiXG5cdFwidGhlcmUgd2FzIGFuIGF0dGVtcHRcIlxuXHRcInUgZGlkIGEgZG9cIlxuXHRcIkJlIGF3YXJlIG9mIG1lIVwiXG5cdFwiVGhlIEFscmlnaHQgV2FsbCBPZiBDaGluYVwiXG5cdFwiWW91J3ZlIHN0aWxsIGdvdCBzcG90cyFcIlxuXHRcIkl0IHdhcyBtZS4gSSBsZXQgdGhlIGRvZ3Mgb3V0LlwiXG5cdFwiSHVtYW5pdHkgd2FzIGJvcm4gd2l0aG91dCBjbGF3cywgd2l0aG91dCBmYW5ncywgd2l0aG91dCBzY2FsZXMuPGJyIC8+U28gd2UgZm9yZ2VkIHRoZW0gaW4gZmlyZSBhbmQgY3JhZnRlZCB0aGVtIG9mIHN0ZWVsLlwiXG5cdFwiT2ggeWVzLCBsb3QncyBvZiB5ZWFoLlwiXG5cdFwiQWgsIHRoZSBSb2xscyBSb3ljZS4gVHJ1bHkgdGhlIFJvbGxzIFJveWNlIG9mIGF1dG9tb2JpbGVzLlwiXG5cdFwiR2V0aCBkbyBub3QgKmludGVudGlvbmFsbHkqIGluZmlsdHJhdGUuXCJcblx0XCIvZGV2L251bGxcIlxuXHRcImtpbGwgeW91cnNlbGYgb3IgZGllIHRyeWluZ1wiXG5cdFwid2VsbCBoZWxsbyB0aGVyZVwiXG5cdFwibm90IHNvIGZhc3QgbWlzdGVyXCJcblx0XCJ5ZXMgaSdsbCBob2xkXCJcblx0XCJub3cgcGxheWluZ1wiXG5cdFwibXVzaWMgZW5hYmxlZCBmb3IgMDA5XCJcblx0XCJIYXZlIHlvdSB0cmllZCB0dXJuaW5nIGl0IG9mZiBhbmQgb24gYWdhaW4/XCJcblx0XCJZb3Ugd291bGRuJ3Qgc2hvb3QgYSBwb2xpY2VtYW5cIlxuXHRcIjAxMTggOTk5IDg4MSA5OTkgMTE5IDcyNS4uIDNcIlxuXHRcIkknbGwganVzdCBwdXQgaXQgaGVyZSB3aXRoIHRoZSByZXN0IG9mIHRoZSBmaXJlLlwiXG5cdFwiRmlyZSAtIGV4Y2xhbWF0aW9uIG1hcmsgLSBmaXJlIC0gZXhjbGFtYXRpb24gbWFyayAtIGhlbHAgbWUgLSBleGNsYW1hdGlvbiBtYXJrLjxiciAvPkxvb2tpbmcgZm9yd2FyZCB0byBoZWFyaW5nIGZyb20geW91LlwiXG5cdFwiSSBkb24ndCBrbm93IGlmIGl0J3MgdGhlIGxvc3Mgb2YgYmxvb2Qgb3IgdGhlIG1lbHRpbmcgcGxhc3RpYyBmcm9tIHRoZSBtb25pdG9yLCBidXQgSSBmZWVsIGdyZWF0IVwiXG5cdFwiR29vZCBtb3JuaW5nLCB0aGF0J3MgYSBuaWNlIHRuZXRlbm5iYS5cIlxuXHRcIkknbSBub3QgYSB3aW5kb3cgY2xlYW5lciFcIlxuXHRcIlxcXCJNeSBtdW0ncyBvbiBGcmllbmRmYWNlLiBTaGUgaGFzIHB1dCBkb3duIGhlciBjdXJyZW50IG1vb2QgYXMgJ3NlbnN1YWwnLlxcXCJcIlxuXHRcIkVsZXZhdG9yJ3Mgbm90IHdvcnRoeS5cIlxuXHRcIndvb215XCJcblx0XCJUaGV5IHNheSB0YXVwZSBpcyB2ZXJ5IHNvb3RoaW5nLlwiXG5cdFwiVGhpcyBjaXR5IGRlc2VydmVzIGEgYmV0dGVyIGNsYXNzIG9mIGNyaW1pbmFsLlwiXG5cdFwiVGhlIExhbWJvcmdoaW5pLCB0aGVuLiBNdWNoIG1vcmUgc3VidGxlLlwiXG5cdFwiSSB3b3VsZCBsb3NlIHdlaWdodCBidXQgSSBoYXRlIGxvc2luZ1wiXG5cdFwiSGUga2lzc2VkIG15IGJvdHRvbSwgWW91ciBIb25vci5cIlxuXHRcIlxcXCJXb3csIHRoaXMgaXMgdGhlIGtpbmQgb2YgY2FyIHlvdSBzZWUgb24gY29tbWVyY2lhbHMuXFxcIlwiXG5cdFwiU2h1dCB1cCBKdWRnZSFcIlxuXHRcIkdheSBwcm9iZSBjb21pbmcgdG8gc2F2ZSBtZS4gR290IGl0LlwiXG5cdFwiTm8gYW1vdW50IG9mIGNhcmVmdWwgZGVzaWduIGJ5IE5BU0EgY2FuIGdldCBhcm91bmQgYSBkZXRlcm1pbmVkIGFyc29uaXN0IHdpdGggYSB0YW5rIG9mIHB1cmUgb3h5Z2VuLlwiXG5cdFwiRXZlcnl0aGluZyB5b3UgdHlwZSBpcyBiZWluZyBicm9hZGNhc3QgbGl2ZSBhbGwgb3ZlciB0aGUgd29ybGQuPGJyIC8+TG9vayEgQSBwYWlyIG9mIGJvb2JzISAtPiAoLlkuKVwiXG5cdFwiXFxcIkJyb3VnaHQgcHJvZHVjdCB0byBzdXJmYWNlIG9mIE1hcnMuIEl0IHN0b3BwZWQgd29ya2luZy4gMC8xMC5cXFwiXCJcblx0XCJZZXMsIG9mIGNvdXJzZSBkdWN0IHRhcGUgd29ya3MgaW4gYSBuZWFyLXZhY3V1bS4gRHVjdCB0YXBlIHdvcmtzIGFueXdoZXJlLiBEdWN0IHRhcGUgaXMgbWFnaWMgYW5kIHNob3VsZCBiZSB3b3JzaGlwcGVkLlwiXG5cdFwiQXMgd2l0aCBtb3N0IG9mIGxpZmUncyBwcm9ibGVtcywgdGhpcyBvbmUgY2FuIGJlIHNvbHZlZCBieSBhIGJveCBvZiBwdXJlIHJhZGlhdGlvbi5cIlxuXHRcIk9ubHkgYW4gaWRpb3Qgd291bGQga2VlcCB0aGF0IHRoaW5nIG5lYXIgdGhlIEhhYi4gU28gYW55d2F5LCBJIGJyb3VnaHQgaXQgYmFjayB0byB0aGUgSGFiLlwiXG5cdFwiUHJvYmxlbSBpcyAoZm9sbG93IG1lIGNsb3NlbHkgaGVyZSwgdGhlIHNjaWVuY2UgaXMgcHJldHR5IGNvbXBsaWNhdGVkKSwgaWYgSSBjdXQgYSBob2xlIGluIHRoZSBIYWIsIHRoZSBhaXIgd29uJ3Qgc3RheSBpbnNpZGUgYW55bW9yZS5cIlxuXHRcIkFsbCB0aGUgc3VidGxldHkgYW5kIGZpbmVzc2Ugb2YgYSBuYXBhbG0gZW5lbWEuXCJcblx0XCJcXFwiSSdtIHJ1bm5pbmcgYXdheSB3aXRoIHlvdXIgd2lmZSFcXFwiLCBcXFwiR3JlYXQhXFxcIlwiXG5cdFwiSWYgeW91IHNlZSBteSB3aWZlLCB0ZWxsIGhlciBJIHNhaWQgXFxcIkhlbGxvXFxcIi5cIlxuXHRcIlxcXCJJJ20gbm90IGEgdmVnZXRhcmlhbiBiZWNhdXNlIEkgbG92ZSBhbmltYWxzLCBJJ20gdmVnZXRhcmlhbiBiZWNhdXNlIEkgaGF0ZSBwbGFudHMuXFxcIlwiXG5cdFwiTWFrZSB1cCBsb29rcyBwcmV0dHkgb24gdGhlIG91dHNpZGUsIGJ1dCBpdCBkb2Vzbid0IGhpZGUgdGhlIHVnbHkgb24gdGhlIGluc2lkZS48YnIgLz5Vbmxlc3MgeW91IGVhdCBpdC5cIlxuXHRcIkVkdWNhdGlvbiBpcyBpbXBvcnRhbnQgYnV0IGJpZyBiaWNlcHMgYXJlIGltcG9ydGFudGVyLlwiXG5cdFwiSnVzdCBiZWNhdXNlIHlvdSdyZSB0cmFzaCBkb2Vzbid0IG1lYW4geW91IGNhbid0IGRvIGdyZWF0IHRoaW5ncy4gSXQncyBnYXJiYWdlIGNhbiwgbm90IGdhcmJhZ2UgY2Fubm90LlwiXG5cdFwiXFxcIk9oLCBpdCBkb2Vzbid0IGxpa2UgYmVpbmcgc3R1Y2sgaW4gdGhlIHBhc3QuXFxcIlwiXG5cdFwiSSBoYXZlbid0IGVhdGVkIHNpbmNlIHRoZSBsYXN0IHRpbWUgSSBlYXRlZC5cIlxuXHRcIlxcXCJUaGVyZSdzIGFjdHVhbGx5IG1vcmUgY2VsbHMgaW4gb3VyIGJyYWlucyB0aGFuIHRoZXJlIGFyZSBicmFpbnMgaW4gb3VyIGVudGlyZSBib2R5XFxcIlwiXG5cdFwiPGNvZGU+QnVnIDAwMDg3MSBbcHJvamVjdGlsZXNdIC0gYmFiaWVzIGZhbGwgdG8gZGVhdGggd2hlbiBib3JuIG9uIHN0YWlyczwvY29kZT5cIlxuXHRcIjxjb2RlPlRoaXMgaXMgYSBtZW5hY2luZyBpcm9uIHNwaWtlLiBUaGlzIG9iamVjdCBtZW5hY2VzIHdpdGggc3Bpa2VzIG9mIGlyb24uPC9jb2RlPlwiXG5cdFwiPGNvZGU+QnVnIDU5NzE6IEZhdCBkd2FydmVzIGVhdGluZyBjYXVzZXMgbGFnPC9jb2RlPlwiXG5cdFwiPGNvZGU+QnVnIDY4MTc6ICdCZWhvbGQsIG1vcnRhbC4gSSBhbSBhIGRpdmluZyBiZWluZy4nPC9jb2RlPlwiXG5cdFwiPGNvZGU+J0kgZGllZC4nICdUaGUgV2VhdGhlciBsb29rcyB0byBiZSBmaW5lIHRvZGF5LicgJ0kgaGVhcmQgdGhhdCBJIGRpZWQuJzwvY29kZT5cIlxuXHRcIjxjb2RlPidJbiBhIHRpbWUgYmVmb3JlIHRpbWUsIEkga2lsbGVkIG1lLicgLUh1bWFuIHdpdGggbm90aGluZyBlbHNlIHRvIGdvc3NpcCBhYm91dDwvY29kZT5cIlxuXHRcIlNrdW5rICjLiHNryZnFi2spOiBCbGFjayBhbmQgd2hpdGUgZmFydCBzcXVpcnJlbFwiXG5cdFwiV2UgZG9uJ3QgaGF2ZSB0aW1lIHRvIGJlIHNleHlcIlxuXHRcIk5vdyBpbiBjb2xvdXJcIlxuXHRcIlxcXCJDb21lIHdpdGggbWUgaWYgeW91IHdhbnQgdG8gbGVhdmUuXFxcIlwiXG5cdFwiQ2FtZXJhcyBhcmUgbGlrZSBzaG90Z3Vucy4gVGhlIGNsb3NlciB0aGUgdGFyZ2V0LCB0aGUgZ3JlYXRlciB0aGUgZGFtYWdlLlwiXG5cdFwiVW5yZWdpc3RlcmVkIEh5cGVyY2FtIDJcIlxuXHRcIlRoZXNlIGFyZSB0aGUgdm95YWdlcyBvZiB0aGUgU3RhcnByaXNlIEVudGVyc2hpcFwiXG5cdFwiUHJvZm91bmQuIEJ1dCBmdW5kYW1lbnRhbGx5IGJvbGxvY2tzLlwiXG5dXG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBcIm1haW4tLWZvb3Rlci0tcXVvdGVcIiApLmlubmVySFRNTCA9XG5cdHF1b3Rlc1sgTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqIHF1b3Rlcy5sZW5ndGggKSBdXG5cbndpbmRvdy5tYWluRnVsbHNjcmVlbiA9ICggYWN0aXZlID0gdHJ1ZSApIC0+XG5cdGVNYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQgXCJtYWluLS1tYWluXCJcblx0aWYgYWN0aXZlXG5cdFx0ZU1haW4uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCJcblx0XHRlTWFpbi5zdHlsZS50b3AgPSAwXG5cdFx0ZU1haW4uc3R5bGUubGVmdCA9IDBcblx0XHRlTWFpbi5zdHlsZS5yaWdodCA9IDBcblx0XHRlTWFpbi5zdHlsZS5ib3R0b20gPSAwXG5cdFx0ZU1haW4uc3R5bGUubWFyZ2luID0gMFxuXHRcdGVNYWluLnN0eWxlLmJhY2tncm91bmQgPSBcIndoaXRlXCJcblx0ZWxzZVxuXHRcdGVNYWluLnN0eWxlLnBvc2l0aW9uID0gbnVsbFxuXHRcdGVNYWluLnN0eWxlLnRvcCA9IG51bGxcblx0XHRlTWFpbi5zdHlsZS5sZWZ0ID0gbnVsbFxuXHRcdGVNYWluLnN0eWxlLnJpZ2h0ID0gbnVsbFxuXHRcdGVNYWluLnN0eWxlLmJvdHRvbSA9IG51bGxcblx0XHRlTWFpbi5zdHlsZS5tYXJnaW4gPSBudWxsXG5cdFx0ZU1haW4uc3R5bGUuYmFja2dyb3VuZCA9IG51bGxcbiJdfQ==
