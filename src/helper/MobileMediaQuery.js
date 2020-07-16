import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function MobileMediaQuery() {
  const matches = useMediaQuery('(min-width:600px)');

  return <div></div>;
}