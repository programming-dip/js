function calculateVAT( price) {
    
    if (typeof  price !== 'number' ||  price < 0) {
        return "Invalid";
    }
    const vat =  price * 0.075;
    return vat;
}                                                                                                                
