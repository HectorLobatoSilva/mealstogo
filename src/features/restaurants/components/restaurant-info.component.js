import React from 'react';

import { SvgXml } from 'react-native-svg';
import star from './../../../../assets/star';
import open from './../../../../assets/open';
import Spacer from '../../../components/spacer/spacer.component';
import Text from './../../../components/typography/text.component';
import {
    Address,
    RestaurantCard,
    RestaurantCardCover,
    Info,
    Raiting,
    RaitingStars,
    RaitingEnd,
    Icon,
} from './restaurant-info.styles';

const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = 'Some Restaurant',
        icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
        photos = [
            'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
        ],
        address = '100 some random street',
        isOpenNow = false,
        rating = 4,
        isClosedTemporarily = !isOpenNow,
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Info>
                <Text variant="label">{name}</Text>
                <Raiting>
                    <RaitingStars>
                        {ratingArray.map((_, key) => (
                            <SvgXml
                                xml={star}
                                width={20}
                                height={20}
                                key={key}
                            />
                        ))}
                    </RaitingStars>
                    <RaitingEnd>
                        {isClosedTemporarily ? (
                            <>
                                <Text variant="error">CLOSED TEMPORARILY</Text>
                                <Spacer position="left" size="medium" />
                                <Icon source={{ uri: icon }} />
                            </>
                        ) : (
                            <SvgXml xml={open} width={20} height={20} />
                        )}
                    </RaitingEnd>
                </Raiting>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    );
};

export default RestaurantInfoCard;
