import {useState,useEffect} from 'react';
import zom from '../api/zom';

export default () => {
    const[results,setResults] = useState([]);
    const[errMessage,setErrMessage] = useState('');
    
    const searchAPI = async (searchTerm) => {
        try {
        const response = await zom.get('/search',{
            params: {
                q: searchTerm,
                count : 20
            }
        });
        setResults(response.data.restaurants);
        } catch (err) {
            setErrMessage('something went wrong');
        }
    };

    useEffect(() => {searchAPI('icecream')},[]);
    //console.log("results= ", results);

    return [searchAPI, results, errMessage];
};