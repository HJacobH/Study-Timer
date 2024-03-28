function startTimer(){
    var minutyToStudy = document.querySelector('#minutyStudy').value;
    var sekundyToStudy = document.querySelector('#sekundyStudy').value;
    
    var minutyToRelax = document.querySelector('#minutyRelax').value;
    var sekundyToRelax = document.querySelector('#sekundyRelax').value;

    updateTimer();

    timeInterval = setInterval(function() {
        sekundyToStudy--;
        if(sekundyToStudy <= 0){
            if(minutyToStudy == 0){
                startTimer2();
                clearInterval(timeInterval);

                minutyToStudy = document.querySelector('#minutyStudy').value;
                sekundyToStudy = document.querySelector('#sekundyStudy').value;
                document.getElementById('timer').innerHTML = studyCas;
            }
            else{
                sekundyToStudy = 59;
                minutyToStudy--;
            }
        }
        updateTimer();
    }, 1000);
    
    function startTimer2(){
        timeInterval2 = setInterval(function(){
            sekundyToRelax--;
            if(sekundyToRelax <= 0){
                if(minutyToRelax == 0){
                    startTimer();
                    clearInterval(timeInterval2);

                    minutyToRelax = document.querySelector('#minutyRelax').value;
                    sekundyToRelax = document.querySelector('#sekundyRelax').value;
                    document.getElementById('timer2').innerHTML = relaxCas;
                }
                else{
                    sekundyToRelax = 59;
                    minutyToRelax--;
                }
            }
            updateTimer();
        }, 1000)
    }

    function updateTimer(){
        var studyCas = "Study time: " + minutyToStudy + ":" + sekundyToStudy;
        var relaxCas = "Relax time: " + minutyToRelax + ":" + sekundyToRelax;
    
        document.getElementById('timer').innerHTML = studyCas;
        document.getElementById('timer2').innerHTML = relaxCas;
    }
}   

function stopTimer(){
    clearInterval(timeInterval);
    minutyToStudy = 0;
    minutyToRelax = 0;
    sekundyToRelax = 0;
    sekundyToStudy = 0;
    clearInterval(timeInterval2);
}