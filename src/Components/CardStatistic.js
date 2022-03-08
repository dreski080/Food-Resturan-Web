import React from 'react'
import {Card, makeStyles, Typography, Avatar} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    card: {
        padding: theme.spacing(2),
        display: "flex",
        alignItems: 'center',
        // backgroundColor: '#00b074',
        backgroundColor: 'black',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            padding: theme.spacing(1),
        }
    },
    itemIcon: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            marginRight: theme.spacing(1),
        }
    },
    icon: {
        width: 40,
        height: 40,
        [theme.breakpoints.down('sm')]: {
            width: 30,
            height: 30,
        },
    },
    textAngka: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            fontSize: 18,
        }
    },
    textJudul: {
        color: 'white',
        fontSize: 12,
    }
}))

function CardStatistic(props) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
             <div className={classes.itemIcon}>
                <img src={props.src} className={classes.icon} />
             </div>
             <div>
                <Typography className={classes.textAngka}>{props.angka}</Typography>
                <Typography className={classes.textJudul}>{props.ket}</Typography>
             </div>
        </Card>
    )
}

export default CardStatistic
