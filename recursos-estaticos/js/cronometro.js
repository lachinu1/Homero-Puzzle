function ResetTime(){
    clearInterval(cronometro);
}    

function StartTime(){

    segundos = 0;
    s = document.getElementById("segundos");
    m = document.getElementById("minutos");

    cronometro = setInterval(function(){
        segundos++;

        segs = segundos;
        mins = 0;

        while(segs>=60){
            mins++;
            segs-=60;
        }

        if (mins<10)m.innerHTML = "0" + mins;
        else m.innerHTML = mins;
        if(segs<10) s.innerHTML = "0" + segs;
        else s.innerHTML = segs;

        Total_segs = segs;
        Totm_mins = mins;

     },1000);
    
 }
    