const title = document.querySelector("h1");

title.addEventListener("click", function() {
    title.textContent = "You found my hidden message! Thanks for visting my website! This is my first one, so please excuse any glitches or bugs!"
});


const ratings = document.querySelectorAll(".rating");
ratings.forEach(function(rating) {
    const stars = rating.querySelectorAll(".star");
    stars.forEach(function(star) {
        star.addEventListener("click",function() {
            const value = this.dataset.value;
            stars.forEach(function(s) {
                if (s.dataset.value<=value) {
                    s.style.color="gold";
                } else {
                    s.style.color = "gray";
                    
                }
               
          
            });
        });
    });

});

const movies =[
    {
        title: "The Breakfast Club",
        year: "1985",
        image: "images/bfclub.jpg",
        thoughts: "When you can see yourself in all four characters, you know it's one of those movies that's going to stick with you for a long time."
    },

    {
        title: "Friday",
        year: "1995",
        image: "images/icecube.jpg",
        thoughts: "I could watch this movie in my head without missing a single quote."
    },

    {
        title: "Beverly Hills Cop",
        year: "1984",
        image: "images/bhcop.jpg",
        thoughts: "'You're not falling for a banana in a tailpipe?'"
    },

    {
        title: "To Wong Foo, Thanks for Everything! Julie Newmar",
        year: "1995",
        image: "images/toowongfoo.jpg",
        thoughts: "AHEAD. OF. ITS. TIME. Every bigot, every racist, every homophobe needs to shut up and watch this movie. If you still don't understand the message after watching this, I genuinely don't know what to tell you."
    },

    {
        title: "Romy and Michele's High School Reunion",
        year: "1997",
        image: "images/romymichele.jpg",
        thoughts: "Another one I could watch every day. Heather Mooney is me. I am Heather Mooney."
    },

    {
        title:"Scarface",
        year: "1983",
        image: "images/tonymontana.jpg",
        thoughts: "Al Pacino is painfully gorgeous. The theme of greed has stuck with me ever since I clicked 'Watch now.'"
    },

    {
        title: "The Conjuring",
        year: "2013",
        image: "images/theconjuring.jpg",
        thoughts: "All paranormal horror movies should take notes. I  could watch this movie every day and never get tired. Also, PATRICK WILSONNNNNN."
    },

    {
        title: "My Cousin Vinny",
        year: "1992",
        image: "images/vinny.jpg",
        thoughts: "This movie (specifically Marisa Tomei) made me want a New York accent."
    },

    {
        title: "Bring It On",
        year: "2000",
        image: "images/iton.jpg",
        thoughts: "'I transferred from Los Angeles, your school has no gymnastics team, this is a last resort!' I can quote every line from this movie. And yes, that is me flexing."
    },

    {
        title: "Superstar",
        year: "1999",
        image: "images/superstarmarry.jpg",
        thoughts: "I love movies that know how ridiculous they are."
    },

    {
        title: "The Truman Show",
        year: "1998",
        image: "images/trumanshow.jpg",
        thoughts: "Oh, how I love over-analyzing this movie. What would you do if everything and everyone you knew was fake? Your enrite life made for entertainment. Omg, chills."
    },

    {
        title: "Scream",
        year: "1996",
        image: "images/scream.jpg",
        thoughts: "Now why did Ghostface have to be hot? Ugh. Horror villans should not be HOTTT...."
    },

    {
        title: "Austin Powers",
        year: "1997",
        image: "images/austinpowers.jpg",
        thoughts: "Dr. Evil is a once-in-a-lifetime character. No one could have played him as well as Mike Myers. (pinky to mouth)"
    },

    {
        title: "Ferris Bueller's Day Off",
        year: "1986",
        image: "images/ferris.jpg",
        thoughts: "Who knew skipping a day of school would be this chaotic? If you haven't seen this movie by now, get off this site and go watch it. What are you doing?"
    },

    {
        title: "Get Out",
        year: "2017",
        image: "images/getout.jpg",
        thoughts: "THIS IS HOW YOU DO HORROR WHILE ALSO HAVING A MESSAGE!!!!!"
    },

    {
        title: "Black Panther",
        year: "2018",
        image: "images/blackpanther.jpg",
        thoughts: "I remember feeling so proud to be Black when watching the credits roll. We miss you, Chadwick."
    },

    {
        title: "Michael",
        year: "2026",
        image: "images/michael3.jpg",
        thoughts: "Just... bravo. The world never deserved Michael."
    },

    {
        title: "Erin Brockovich",
        year: "2000",
        image: "images/erin.jpg",
        thoughts: "Julia Roberts GOBBLED this role. "
    },

    {
        title: "The Shawshank Redemption",
        year: "1994",
        image: "images/shawshank.jpg",
        thoughts: "One of those rare times when I can say the movie was better than the book! The thought of the 'Sisters' keeps me up at night."
    },
    
    {
        title: "Dumb and Dumber",
        year: "1994",
        image: "images/dumb.jpg",
        thoughts: "Another one that's engraved into my personality. 'How does one make a road trip movie not boring?' Cast Jim Carrey and Jeff Daniels."
    },

    {
        title: "Forrest Gump",
        year: "1994",
        image: "images/forrestgump.jpg",
        thoughts: "This movie makes me ugly cry. Amazing movie. But I refuse to watch it because I refuse to cry."
    },

    {
        title: "Dog Day Afternoon",
        year: "1975",
        image: "images/dogday.jpg",
        thoughts: "Al Pacino is so hot, omg. Great movie, but I get distracted by how fine Al is. "
    },

    {
        title: "The Karate Kid",
        year: "1984",
        image: "images/karate.jpg",
        thoughts: "YOU'RE THE BEST AROUND... NOTHING'S GONNA EVER KEEP YOU DOWN!!"
    },

    {
        title: "Superbad",
        year:"2007",
        image: "images/superbad.jpg",
        thoughts: "I am McLovin"
    },

    {
        title: "Jerry Maguire",
        year: "1996",
        image: "images/jerry.jpg",
        thoughts: "I would fight 18 bears to protect Ray."
    },

    {
        title: "Mortal Kombat II",
        year: "2026",
        image: "images/mk.jpg",
        thoughts: "Yes, Mortal Kombat II. This movie ran circles around the first one. Don't you love it when studios actually listen to the fans?"
    },

    {
        title: "School of Rock",
        year: "2003",
        image: "images/rock.jpg",
        thoughts: "Jack Black is absolutely hilarious in this film. He got kicked out of his band so he starts another one... With a bunch of 5th graders. "
    },

    {
        title: "Pretty In Pink",
        year: "1986",
        image: "images/ducky.jpg",
        thoughts: "Ahh, one of my favorite movies from the '80s. John Cryer steals the movie with his portrayal of Ducky. Oh Andie... I'll never forgive you for making the wrong choice!!!"
    },

    {
        title: "Rush Hour",
        year: "1998",
        image: "images/rushhour.jpg",
        thoughts: "Chris Tucker and Jackie Chan. Perfect casting that leads to one of my favorite comidies of all time. 'Can you do that to the Beach Boys? Can you do that to the Beach Boys? Hell nah!'"
    },

    {
        title: "Trading Places",
        year: "1983",
        image: "images/trading.jpg",
        thoughts: "My birthday twin, Eddie Murphy steals the show again. Billy Ray Valentine is one of those characters that is engraved into my personality."
    },

    {
        title: "Weapons",
        year: "2025",
        image: "images/weapons.jpg",
        thoughts: "Not gonna lie, Aunt Gladys is one of the best characters in modern horror. Watching her made me feel like I had ants crawling on my skin. I need to know more. "
    },

    {
        title: "Matilda",
        year: "1996",
        image: "images/matilda.jpg",
        thoughts: "Matilda, one of those childhood movies that followed me into adulthood. Every time I pull out my library card, I feel like Matilda. "
    }
];

const loadingMessage = [
    "Say Hello to my Loading Message!",
    "Life moves pretty fast... Except for this loading message.",
    "Sincerely yours... The Loading Message. ",
    "Who you gonna call? Load-faster!",
    "I ain't afraid of no loading message!",
    "Get in loser, we're loading a message!",
    "Life is like a loading message. You never know what's gonna to pop up.",
    "I'm gonna load him a message he can't refuse.",
    "SHOW ME THE LOADING MESSAGE!"
];

const button = document.getElementById("movieButton");

button.addEventListener("click", function(){

    document.getElementById("movieResult").textContent = "";
    document.getElementById("moviePoster").style.display = "none";
    document.getElementById("loadingMessage").textContent = "";

    let randomMessage = loadingMessage[Math.floor(Math.random() * loadingMessage.length)];
    let randomMovie = movies[Math.floor(Math.random() * movies.length)];

    document.getElementById("loadingMessage").textContent = randomMessage;
    document.getElementById("loadingMessage").style.animation = "fadeIn 0.8s ease forwards";

    setTimeout(function(){

        document.getElementById("movieResult").textContent =
        "Tonight you should watch: " + randomMovie.title + " (" + randomMovie.year + ")";

        document.getElementById("movieResult").style.animation = "none";
        document.getElementById("movieResult").offsetHeight;
        document.getElementById("movieResult").style.animation = "fadeIn 0.8s ease forwards";

    }, 2000);


    setTimeout(function(){

        document.getElementById("moviePoster").src = randomMovie.image;
        document.getElementById("moviePoster").alt = "Movie poster for " + randomMovie.title;
        document.getElementById("moviePoster").style.display = "block";
        document.getElementById("moviePoster").style.animation = "fadeIn 0.5s ease forwards";

    }, 2500);

});

let today = new Date();
let dayNumber = today.getDate();

let movieIndex = dayNumber % movies.length;
let movieOfTheDay = movies[movieIndex];
document.getElementById("dailyPoster").src = movieOfTheDay.image;
document.getElementById("dailyPoster").style.display = "block";
document.getElementById("dailyMovie").textContent =
movieOfTheDay.title + " (" + movieOfTheDay.year + ")";

document.getElementById("dailyThoughts").textContent = movieOfTheDay.thoughts;
