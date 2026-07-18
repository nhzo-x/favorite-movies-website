const title = document.querySelector("h1");

title.addEventListener("click", function() {
    title.textContent = "You found my hidden message! Thanks for visiting my first website. I'm still learning, so there may be a few glitches or bugs along the way!"
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
