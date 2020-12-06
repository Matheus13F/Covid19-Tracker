import React,  { memo } from 'react';
import Grid from '../../../Components/Grid';
import Skeleton from '../../../Components/Skeleton';
import Card from './Card';
import '../../../Assets/Style/Pages/MainGrid.css';

function Board({ data }) {
  const { cases, todayDeaths, recovered, deaths, todayCases } = data;

  const getValue = (value) => value ? value : <span>0</span>
  // const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={62} />

  return(
    <Grid container spacing={4} className="Main-Grid">
      <Grid item xs={12} md={3}>
        <Card value={getValue(cases)} label="Total de casos" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(todayDeaths)} label="Mortes hoje" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(todayCases)} label="Casos hoje" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(deaths)} label="Mortes hoje" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(recovered)} label="Recuperados" />
      </Grid>
    </Grid>
  );
}

export default memo(Board);
