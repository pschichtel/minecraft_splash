(function(){
    /**
     * Here you can edit the splash messages.
     * Every message MUST be followed by a comma (,) EXCEPT the last!
     */
    var splashes = [
        "As seen on TV!",
        "Awesome!",
        "100% pure!",
        "May contain nuts!",
        "Better than Prey!",
        "More polygons!",
        "Sexy!",
        "Limited edition!",
        "Flashing letters!",
        "Made by Notch!",
        "It's here!",
        "Best in class!",
        "It's finished!",
        "Kind of dragon free!",
        "Excitement!",
        "More than 500 sold!",
        "One of a kind!",
        "Heaps of hits on YouTube!",
        "Indev!",
        "Spiders everywhere!",
        "Check it out!",
        "Holy cow, man!",
        "It's a game!",
        "Made in Sweden!",
        "Uses LWJGL!",
        "Reticulating splines!",
        "Minecraft!",
        "Yaaay!",
        "Singleplayer!",
        "Keyboard compatible!",
        "Undocumented!",
        "Ingots!",
        "Exploding creepers!",
        "That's no moon!",
        "l33t!",
        "Create!",
        "Survive!",
        "Dungeon!",
        "Exclusive!",
        "The bee's knees!",
        "Down with O.P.P.!",
        "Closed source!",
        "Classy!",
        "Wow!",
        "Not on steam!",
        "Oh man!",
        "Awesome community!",
        "Pixels!",
        "Teetsuuuuoooo!",
        "Kaaneeeedaaaa!",
        "Now with difficulty!",
        "Enhanced!",
        "90% bug free!",
        "Pretty!",
        "12 herbs and spices!",
        "Fat free!",
        "Absolutely no memes!",
        "Free dental!",
        "Ask your doctor!",
        "Minors welcome!",
        "Cloud computing!",
        "Legal in Finland!",
        "Hard to label!",
        "Technically good!",
        "Bringing home the bacon!",
        "Indie!",
        "GOTY!",
        "Ceci n'est pas une title screen!",
        "Euclidian!",
        "Now in 3D!",
        "Inspirational!",
        "Herregud!",
        "Complex cellular automata!",
        "Yes, sir!",
        "Played by cowboys!",
        "OpenGL 1.2!",
        "Thousands of colors!",
        "Try it!",
        "Age of Wonders is better!",
        "Try the mushroom stew!",
        "Sensational!",
        "Hot tamale, hot hot tamale!",
        "Play him off, keyboard cat!",
        "Guaranteed!",
        "Macroscopic!",
        "Bring it on!",
        "Random splash!",
        "Call your mother!",
        "Monster infighting!",
        "Loved by millions!",
        "Ultimate edition!",
        "Freaky!",
        "You've got a brand new key!",
        "Water proof!",
        "Uninflammable!",
        "Whoa, dude!",
        "All inclusive!",
        "Tell your friends!",
        "NP is not in P!",
        "Notch <3 ez!",
        "Music by C418!",
        "Livestreamed!",
        "Haunted!",
        "Polynomial!",
        "Terrestrial!",
        "All is full of love!",
        "Full of stars!",
        "Scientific!",
        "Cooler than Spock!",
        "Collaborate and listen!",
        "Never dig down!",
        "Take frequent breaks!",
        "Not linear!",
        "Han shot first!",
        "Nice to meet you!",
        "Buckets of lava!",
        "Ride the pig!",
        "Larger than Earth!",
        "sqrt(-1) love you!",
        "Phobos anomaly!",
        "Punching wood!",
        "Falling off cliffs!",
        "0% sugar!",
        "150% hyperbole!",
        "Synecdoche!",
        "Let's danec!",
        "Seecret Friday update!",
        "Reference implementation!",
        "Lewd with two dudes with food!",
        "Kiss the sky!",
        "20 GOTO 10!",
        "Verlet intregration!",
        "Peter Griffin!",
        "Do not distribute!",
        "Cogito ergo sum!",
        "4815162342 lines of code!",
        "A skeleton popped out!",
        "The Work of Notch!",
        "The sum of its parts!",
        "BTAF used to be good!",
        "I miss ADOM!",
        "umop-apisdn!",
        "OICU812!",
        "Bring me Ray Cokes!",
        "Finger-licking!",
        "Thematic!",
        "Pneumatic!",
        "Sublime!",
        "Octagonal!",
        "Une baguette!",
        "Gargamel plays it!",
        "Rita is the new top dog!",
        "SWM forever!",
        "Representing Edsbyn!",
        "Matt Damon!",
        "Supercalifragilisticexpialidocious!",
        "Consummate V's!",
        "Cow Tools!",
        "Double buffered!",
        "Fan fiction!",
        "Flaxkikare!",
        "Jason! Jason! Jason!",
        "Hotter than the sun!",
        "Internet enabled!",
        "Autonomous!",
        "Engage!",
        "Fantasy!",
        "DRR! DRR! DRR!",
        "Kick it root down!",
        "Regional resources!",
        "Woo, facepunch!",
        "Woo, somethingawful!",
        "Woo, /v/!",
        "Woo, tigsource!",
        "Woo, minecraftforum!",
        "Woo, worldofminecraft!",
        "Woo, reddit!",
        "Woo, 2pp!",
        "Google anlyticsed!",
        "Give us Gordon!",
        "Tip your waiter!",
        "Very fun!",
        "12345 is a bad password!",
        "Vote for net neutrality!",
        "Lives in a pineapple under the sea!",
        "MAP11 has two names!",
        "Omnipotent!",
        "Gasp!",
        "...!",
        "Bees, bees, bees, bees!",
        "This text is hard to read if you play the game at the default resolution, but at 1080p it's fine!",
        "Haha, LOL!",
        "Hampsterdance!",
        "Switches and ores!",
        "Menger sponge!",
        "idspispopd!",
        "Eple (original edit)!",
        "So fresh, so clean!",
        "Slow acting portals!",
        "Try the Nether!",
        "Don't look directly at the bugs!",
        "Oh, ok, Pigmen!",
        "Finally with ladders!",
        "Scary!",
        "Play Minecraft, Watch Topgear, Get Pig!",
        "Twittered about!",
        "Jump up, jump up, and get down!",
        "Joel is neat!",
        "A riddle, wrapped in a mystery!",
        "Huge tracts of land!",
        "Welcome to your Doom!",
        "Stay a while, stay forever!",
        "Stay a while and listen!",
        "Treatment for your rash!",
        "\"Autological\" is!",
        "Information wants to be free!",
        "\"Almost never\" is an interesting concept!",
        "Lots of truthiness!",
        "The creeper is a spy!",
        "Turing complete!",
        "It's groundbreaking!",
        "Let our battle's begin!",
        "The sky is the limit!",
        "Jeb has amazing hair!",
        "Casual gaming!",
        "Undefeated!",
        "Kinda like Lemmings!",
        "Follow the train, CJ!",
        "Leveraging synergy!",
        "This message will never appear on the splash screen, isn't that weird?",
        "DungeonQuest is unfair!",
        "110813!",
        "90210!",
        "Check out the far lands!",
        "Tyrion would love it!",
        "Also try VVVVVV!",
        "Also try Super Meat Boy!",
        "Also try Terraria!",
        "Also try Mount And Blade!",
        "Also try Project Zomboid!",
        "Also try World of Goo!",
        "Also try Limbo!",
        "Also try Pixeljunk Shooter!",
        "Also try Braid!",
        "That's super!",
        "Bread is pain!",
        "Read more books!",
        "Khaaaaaaaaan!",
        "Less addictive than TV Tropes!",
        "More addictive than lemonade!",
        "Bigger than a bread box!",
        "Millions of peaches!",
        "Fnord!",
        "This is my true form!",
        "Totally forgot about Dre!",
        "Don't bother with the clones!",
        "Pumpkinhead!",
        "Hobo humping slobo babe!",
        "Made by Jeb!",
        "Has an ending!",
        "Finally complete!",
        "Feature packed!",
        "Boots with the fur!",
        "Stop, hammertime!",
        "Testificates!",
        "Conventional!",
        "Homeomorphic to a 3-sphere!",
        "Doesn't avoid double negatives!",
        "Place ALL the blocks!",
        "Does barrel rolls!",
        "Meeting expectations!",
        "PC gaming since 1873!",
        "Ghoughpteighbteau tchoghs!",
        "Déjà vu!",
        "Déjà vu!",
        "Got your nose!",
        "Haley loves Elan!",
        "Afraid of the big, black bat!",
        "Doesn't use the U-word!",
        "Child's play!",
        "See you next Friday or so!",
        "150 bpm for 400000 minutes!",
        "Technologic!",
        "Funk soul brother!",
        "Pumpa kungen!",
        "日本ハロー！",
        "한국 안녕하세요!",
        "Helo Cymru!",
        "Cześć Polska!",
        "你好中国！",
        "Привет Россия!",
        "Γεια σου Ελλάδα!",
        "My life for Aiur!",
        "Lennart lennart = new Lennart();",
        "I see your vocabulary has improved!",
        "Who put it there?",
        "You can't explain that!",
        "if not ok then return end",
        "&1C&2o&3l&4o&5r&6m&7a&8t&9i&ac",
        "FUNKY LOL",
        "SOPA means LOSER in Swedish"
    ];
    
    /*** DON NOT EDIT ANYTHING BELOW THIS LINE UNLESS YOU KNOW WHAT YOU ARE DOING !!! ***/
    
    var splashElem = null;
    
    function initialize()
    {
        var rightContentBox = document.getElementById('rightContentBox')
        rightContentBox.innerHTML = "<div>" + rightContentBox.innerHTML + "</div>";
        splashElem = rightContentBox.getElementsByTagName('div')[0];
        
        for (var i = 0; i < splashes.length; ++i)
        {
            splashes[i] = parseColors(splashes[i]);
        }
        switchText();
    }
    
    function switchText()
    {
        splashElem.innerHTML = splashes[Math.floor((Math.random() * (splashes.length + 1)))];
    }

    function getChatColorClassByChar(colorChar) {
        var colorName;
        switch (colorChar) {
            case '0': colorName = 'black'; break;
            case '1': colorName = 'dark-blue'; break;
            case '2': colorName = 'dark-green'; break;
            case '3': colorName = 'teal'; break;
            case '4': colorName = 'dark-red'; break;
            case '5': colorName = 'purple'; break;
            case '6': colorName = 'gold'; break;
            case '7': colorName = 'gray'; break;
            case '8': colorName = 'dark-gray'; break;
            case '9': colorName = 'blue'; break;
            case 'a': colorName = 'bright-green'; break;
            case 'b': colorName = 'aqua'; break;
            case 'c': colorName = 'red'; break;
            case 'd': colorName = 'pink'; break;
            case 'e': colorName = 'yellow'; break;
            case 'f': colorName = 'white';
            default: throw 'Unknown color character!';
        }

        return 'chatcolor-' + colorName;
    }
    
    function parseColors(string)
    {
        var regex = /&([0-9a-f])/i;
        var counter = 0;
        var last = '';
        
        function parse(match) {
            if (last != match[1]) {
                last = match[1];
                try {
                    ++counter;
                    return '<span class="' + getChatColorClassByChar(match[1]) + '">'
                }
                catch (e)
                {}
            }
            return '';
        }

        while (string.match(regex)) {
            string = string.replace(regex, parse);
        }

        return string + (new Array(counter)).join('</span>');
    };
    
    // switch text on focus
    window.addEventListener('focus', switchText);
    
    // initialize on DOMContentLoaded
    window.addEventListener('DOMContentLoaded', function() {
        initialize();
        window.removeEventListener('load', initialize);
    });
    // fallback for older browsers
    window.addEventListener('load', initialize);
})();