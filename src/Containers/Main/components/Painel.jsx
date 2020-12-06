import React, { memo } from 'react';
import Card from '@material-ui/core/Card';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import COUNTRIES from '../../../Assets/Constants/countries';
import Select from '@material-ui/core/Select';
import '../../../Assets/Style/Pages/painel.css'

//const navigatorHasShare = navigator.share;

function Painel({ updateAt, onChange, data, country, getCovidData }) {
    //const { cases, todayDeaths, recovered, deaths, todayCases } = data;

    const renderCountries = (country, index) => {
        return (
            <MenuItem key={`country-${index}`} value={country.value}>
                <div className="item-menu">
                    <div>{country.name}</div>
                    <img src={country.flag} alt={`País-${country.name}`} />
                </div>
            </MenuItem>
        );
    }

    return(
        <div className="card-menu-item">
            <Card className="painel">
                <Typography variant="h5" component="span" color="primary" >COVID-19</Typography>
                <Typography variant="h6" component="span" color="primary" >Painel Corona</Typography>
                <Typography variant="body2" component="span" color="primary" >Atualizado em: {updateAt} </Typography>
                <div>
                    <Select onChange={onChange} value={country}>
                        {COUNTRIES.map(renderCountries)}
                    </Select>
                </div>
            </Card>
        </div>
    );

}

export default memo(Painel);
