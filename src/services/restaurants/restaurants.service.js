import { mocks, mockImages } from './mock/index';
import camilize from 'camelize';
export const restaurantsRequest = (location = '') => {
    // const url = '';
    // try {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     return data;
    // } catch (err) {
    //     console.log(err);
    // }
    return new Promise((resolve, reject) => {
        const mock = camilize(mocks[location]);
        if (!mock) {
            reject('No founded location');
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
        resolve(mappedResults);
    });
};
