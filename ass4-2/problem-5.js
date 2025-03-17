function  calculateSleepTime( times ) {
    let totSec = 0;
    for (const sec of times){
        if (typeof sec !== 'number'){
            return 'Invalid';
        }
        totSec+=sec;
    }

    const hours =  Math.floor(totSec / 3600);
    const minutes = Math.floor((totSec - (hours * 3600)) / 60);
    const seconds = totSec - (hours * 3600) - (minutes * 60);

    const timeObj = {hour: hours, minutes: minutes, second: seconds};
    return timeObj;
}