const mobile = {
    brand: 'samsung',
    price: '2200',
    color: 'black',
    camera: '12mp',
    isNew: true,
}

for (const prop in mobile){
    console.log(prop);
    console.log(mobile[prop]);
}

const keys = Object.keys(mobile);

for (const key of keys){
    console.log(key, "--" ,mobile[key]);
    
}