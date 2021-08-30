import camelize from 'camelize';

import { locations } from './location.mock';

export const locationRequest = searchTerm => {
    return new Promise((resolve, reject) => {
        const location = locations[searchTerm];
        if (!location) {
            reject('No location found');
        }
        resolve(location);
    });
    // const url = '';
    // try {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     return data;
    // } catch (err) {
    //     console.log(err);
    // }
};

export const locationTransform = result => {
    const { geometry = {} } = camelize(result.results)[0];
    const { lat, lng } = geometry.location;
    const { viewport } = geometry;
    return { lat, lng, viewport };
};
