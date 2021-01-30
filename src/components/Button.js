import { Button } from '@material-ui/core';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../styles';

const useStyles = makeStyles({
  root: {
    background: `linear-gradient(45deg, ${colors.primaryDark} 30%, ${colors.primary} 90%)`,
    border: 0,
    borderRadius: 3,
    boxShadow: `0 1px 5px 1px ${colors.primary}`,
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

const xButton = ({ size, variant, children }) => {
  const classes = useStyles();

  return (
    <Button className={classes.root} size={size} variant={variant}>
      {children}
    </Button>
  );
};

export default xButton;
