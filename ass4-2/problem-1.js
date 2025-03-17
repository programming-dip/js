function calculateVAT(basePrice) {
    
    if (typeof basePrice !== 'number' || basePrice<0) {
        return "Invalid";
    }
    const vat = basePrice * 0.075;
    return vat;
}                                                                                                                
