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
};

export const locationTransform = result => {
    const { geometry = {} } = camelize(result.results)[0];
    const {
        location: { lat, lng },
    } = geometry;
    return { lat, lng };
};
