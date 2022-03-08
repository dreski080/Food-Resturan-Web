import React from 'react'
import {Card, makeStyles, Typography, Avatar} from '@material-ui/core'
import ListAltIcon from '@material-ui/icons/ListAlt';
import ListIcon from '../Asset/note.png'

const useStyles = makeStyles((theme) => ({
    card: {
        padding: theme.spacing(2),
        display: "flex",
        alignItems: 'center',
        backgroundColor: '#3d4753',
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    itemIcon: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            marginRight: theme.spacing(1),
        }
    },
    avatar: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        backgroundColor: 'black',
        color: '#00b074',
        [theme.breakpoints.down('sm')]: {
            width: theme.spacing(5),
            height: theme.spacing(5),
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
}))

function CardTotal(props) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <div className={classes.itemIcon}>
                <Avatar className={classes.avatar}>
                    {/* <ListAltIcon className={classes.icon} /> */}
                    <img src={ListIcon} className={classes.icon} />
                </Avatar>
            </div>
            <div>
                <Typography variant='h6' style={{fontWeight: 'bold'}}>{props.angka}</Typography>
                <Typography variant='body2'>{props.title}</Typography>
            </div>
        </Card>
    )
}

export default CardTotal
