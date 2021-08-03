    var slideIndex = 1;
        showSlides(slideIndex);

        function plusSides(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex -= n);
        }
        
        let targetPrev = document.querySelector("#targetPrev");
        targetPrev.addEventListener('click', function(event){
            plusSides(-1);
        });

        let targetNext = document.querySelector("#targetNext");
        targetNext.addEventListener('click', function(event){
            plusSides(1);
        });

        let dotSatu = document.querySelector("#dotSatu");
        dotSatu.addEventListener('click', function(event){
            plusSides(-1);
        });

        let dotDua = document.querySelector("#dotDua");
        dotDua.addEventListener('click', function(event){
            plusSides(1);
        });

        let dotTiga = document.querySelector("#dotTiga");
        dotTiga.addEventListener('click', function(event){
            plusSides(1);
        });

        function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) {slideIndex = 1}
            if (n < slides.length) {slideIndex = slides.length}
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (let i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";
            dots[slideIndex-1].className += " active";
        }

        function minimal(a,b){
            if (a<b) {
                return a;
            } else if(b<a) {
                return b;
            } else if(a==b) {
                return a;
            }
        }

        console.log(minimal(3,4));

        let i;

        function power(a,b){
            let angka = 1;
            if (b>1) {
                angka = a*b;
            } else {
                for (let i = 1; i <= b; i++) {
                    angka*=a;
                }
            }
            return angka;
        }

        console.log(power(2,5));