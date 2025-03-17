function willSuccess(numArr){
    if (Array.isArray(numArr) === false){
        return "Invalid";
    }

    let passCount = 0;
    let failCount = 0;

    for (const number of numArr){
        if (number < 50){
            failCount++;
        }else {
            passCount++;
        }
    }

    if (passCount > failCount) {
        return true;
    }else {
        return false;
    }
    
}
