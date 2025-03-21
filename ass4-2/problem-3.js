function willSuccess(marks){
    if (Array.isArray(marks) === false){
        return "Invalid";
    }

    let passCount = 0;
    let failCount = 0;

    for (const mark of marks){
        if (mark < 50){
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
