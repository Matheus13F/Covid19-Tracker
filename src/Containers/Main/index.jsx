import React, { memo, useCallback, useState, useEffect } from 'react';
import Api from '../../Services/api';
import Board from './components/Board'
import Painel from './components/Painel';

function  Main() {

    const [country, setCountry] = useState('brazil');
    const [data, setData] = useState({});
    const updateAt = new Date().toLocaleString();

    const getCovidData = useCallback((country) => {
        Api.getCountry(country).then(data => setData(data));
    }, [])

    useEffect(() => {
        getCovidData(country)
    }, [getCovidData, country]) 

    const handleChange = ( { target } ) => {
        const country = target.value;
        setCountry(country);
    }

    return(
        <div>
            <Painel
                data={data}
                updateAt={updateAt}
                onChange={handleChange}
                country={country}
                getCovidData={getCovidData}
            />
           <div>
                <Board data={data} />
           </div>
        </div>
    );
}

export default memo(Main);