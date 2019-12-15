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
    

 
//guardar tiempos de juego

    function saveFinalTime() {
        localTime.setItem(getFinalTimeDate(), getTotalTime());
        showBestTimes();
        removeNoBestTimes();
    }
    
    function showBestTimes() {
        var bestTimes = getBestTimesKeys();
        var bestTimesList = document.getElementById('puntuaciones');
        if (bestTimesList) {
            clearList(bestTimesList);
            for (var i=0; i < bestTimes.length; i++) {
                addListElement(bestTimesList, bestTimes[i], i==0?'negrita':null);
                addListElement(bestTimesList, localTimes.getItem(bestTimes[i]), i==0?'negrita':null);
            }
        }
    }
 
    function removeNoBestTimes() {
        var timesToRemove = [];
        var bestTimesKeys = getBestTimeKeys();
        for (var i=0; i < localTime.length; i++) {
            var key = localTime.key(i);
            if (!bestTimeKeys.containsElement(key)) {
                timesToRemove.push(key);
            }
        }
        for (var j = 0; j < timesToRemove.length; j++) {
            var timeToRemoveKey = timesToRemove[j];
            localTime.removeItem(timeToRemoveKey);
        }
    }