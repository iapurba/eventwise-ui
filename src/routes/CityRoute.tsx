import { useParams } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NotFound from '../pages/ErrorPage';

const checkIfCityIsValid = (city: string): boolean => {
    const cities: string[] = [
        'kolkata',
        'mumbai',
        'delhi',
        'goa',
        'pune',
        'amhedabad',
        'chennai',
    ];

    return cities.includes(city);
};

const CityRoute = () => {
    const { city } = useParams();
    console.log('city ', city)
    const isValidCity = checkIfCityIsValid(city ? city : '');

    return isValidCity ? <HomePage /> : <NotFound />
};

export default CityRoute;