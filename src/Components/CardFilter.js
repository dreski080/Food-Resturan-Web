import React from 'react'
import {Card, makeStyles, Typography} from '@material-ui/core'
import DateRangeIcon from '@material-ui/icons/DateRange';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    card: {
        padding: theme.spacing(1),
        display: "flex",
        alignItems: 'center',
        backgroundColor: '#3d4753',
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    icon: {
        marginRight: theme.spacing(1)
    }
}))

function CardFilter() {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <div className={classes.icon}>
                <DateRangeIcon fontSize="large"/>
            </div>
            <div className={classes.icon}>
                <Typography style={{fontWeight: 'bold'}}>Filter Periode</Typography>
                <Typography variant='body2'>17 Jan 2022 - 20 Jan 2022</Typography>
            </div>
            <div>
                <ExpandMoreIcon/>
            </div>
        </Card>
    )
}

export default CardFilter
