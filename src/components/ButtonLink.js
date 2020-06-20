import React from 'react';
import Link from '@material-ui/core/Link';

export default function ButtonLink({ name }) {
    const buttonLinkStyles = {
        padding: '40px',
        fontFamily: 'Jost',
        color: '#FFFFFF'
    }
  
    return (
    <Link
        style={buttonLinkStyles}
        component="ButtonLink"
        variant="inherit"
        onClick={() => {
        }}
    >
    <label>{name}</label>
    </Link>
  );
}