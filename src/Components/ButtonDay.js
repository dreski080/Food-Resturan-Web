import React from 'react'
import { makeStyles,Button } from '@material-ui/core'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

function ButtonDay(props) {
    const classes = useStyles();

    return (
        <Button
        variant="contained"
        size="small"
        className={classes.button}
        endIcon={<KeyboardArrowDownIcon/>}
        >
           {props.ButtonDay}
        </Button>
    )
}

export default ButtonDay
