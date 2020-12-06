import React, { memo } from 'react';
import Card from '@material-ui/core/Card';
import '../../../Assets/Style/Pages/main.css';

function Cards({ value, label }) {
  return (
    <div className="div-main">
      <Card className="card">
        <h2>{value}</h2>
        <p>{label}</p>
      </Card>
    </div>
  
  );
}

export default memo(Cards);