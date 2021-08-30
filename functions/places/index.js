const { mocks } = require('./mock');
module.exports.placesRequest = (request, response, client) => {
    const { location, isMock } = request.params;
    if (isMock === 'true') {
        const mock = mocks[location];
        if (!mock) {
            response.status(404).send('No location found');
        }
        const mappedResults = mock.results.map(restaurant => {
            return {
                placeId: restaurant.placeId,
                name: restaurant.name,
                icon: restaurant.icon,
                photos: [
                    mockImages[Math.ceil(Math.random() * mockImages.length)],
                ],
                address: restaurant.vicinity,
                isOpenNow: restaurant.openingHours
                    ? restaurant.openingHours.openNow
                    : false,
                rating: restaurant.rating,
                isClosedTemporarily:
                    restaurant.businessStatus === 'CLOSED_TEMPORARILY',
                geometry: restaurant.geometry,
            };
        });
        response.json(mappedResults);
    }
    client
        .placesNearBy({
            params: {
                location,
                raius: 1500,
                type: 'restaurant',
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
