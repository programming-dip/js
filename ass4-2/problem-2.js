function validContact(contact) {

    if (typeof contact !== 'string'){
        return "Invalid";
    }
    else if (contact.length != 11 || contact[0] != 0 || contact[1] != 1){
        return false;
    }
    

    for(const num of contact){
        if(num == ' '){
            return false;
        }
    }

    return true;
}
