const { location: locationsMock } = require('./geocode.mock');
module.exports.geocodeRequest = (request, response, client) => {
    const { city, mock } = request.params;
    if (mock === 'true') {
        const locationMock = locationsMock[city];
        response.json(locationMock);
    }
    client
        .geocode({
            params: {
                addres: city,
                key: 'API key google',
            },
            timeout: 1000,
        })
        .then(res => response.json(res.data))
        .catch(err => {
            response.status(400);
            return response.send(err.response.data.error_message);
        });
};
