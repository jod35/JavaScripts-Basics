function makeNewCity(city,country) {
    const newCity={city,country};
    return newCity;
}

console.log(makeNewCity("Kampala","Uganda"));
//creates an object { city: 'Kampala', country: 'Uganda' }
console.log(makeNewCity("Kigali","Rwanda"));
//{ city: 'Kigali', country: 'Rwanda' }
