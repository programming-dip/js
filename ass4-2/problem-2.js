function validContact(contactNumberStr) {

    if (typeof contactNumberStr !== 'string'){
        return "Invalid";
    }
    else if (contactNumberStr.length != 11 || contactNumberStr[0] != 0 || contactNumberStr[1] != 1){
        return false;
    }
    

    for(const num of contactNumberStr){
        if(num == ' '){
            return false;
        }
    }

    return true;
}
