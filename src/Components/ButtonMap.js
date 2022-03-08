import React, { useState } from 'react'
import { Button, ButtonGroup, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    // buttonGroup: {
    // [theme.breakpoints.down('sm')] : {
    //     display: 'none'
    // }}
  }));

function ButtonMap() {
    const [panel, setPanel] = useState('Today')
    const classes = useStyles();

    return (
        <ButtonGroup size="small" className={classes.buttonGroup}>
            <Button variant="contained" color={panel === 'Monthly' ? 'secondary' : 'default'}>Monthly</Button>
            <Button variant="contained" color={panel === 'Weekly' ? 'secondary' : 'default'}>Weekly</Button>
            <Button variant="contained" color={panel === 'Today' ? 'secondary' : 'default'}>Today</Button>
        </ButtonGroup>
    )
}

export default ButtonMap
