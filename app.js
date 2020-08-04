const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


const address = process.argv[2];

if (!address) {
    console.log('Please provide location');
} else {
    geocode(process.argv[2], (error, data) => {
        if (error) {
            console.log(error);
        }
        else {
            const { latitude, longitude, location } = data;
            console.log('Getting weather of', location);
            forecast(latitude, longitude, (error, data) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log(data);
                }
            });
        }
    });
}
















