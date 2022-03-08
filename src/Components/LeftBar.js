import React from 'react'
import { makeStyles, Container, Typography } from '@material-ui/core'
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import EditIcon from '@mui/icons-material/Edit';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ChatIcon from '@mui/icons-material/Chat';

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
        color: 'white',
        paddingTop: theme.spacing(10),
        backgroundColor: '#3d4753',
        position: 'sticky', // agar bar tidak bergerak
        top: 0, // posisi bar agar tetap 0
    },
    item: {
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(3),
        [theme.breakpoints.up("sm")]: {
            marginBottom: theme.spacing(2),
            cursor: "pointer"
        }
    },
    icon: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.up("sm")]: {
            fontSize: 18 
        }
    },
    text: {
        fontWeight: 500,
        [theme.breakpoints.down("sm")]: {
           display: "none"
        },
    },
}))

function LeftBar() {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <div className={classes.item}>
                <div  className={classes.icon}>
                     <HomeIcon />
                </div>
                <Typography className={classes.text}>Dashboard</Typography>
            </div>
            <div className={classes.item}>
                <div  className={classes.icon}>
                     <ListIcon />
                </div>
                <Typography className={classes.text}>Order List</Typography>
            </div>
            <div className={classes.item}>
                <div  className={classes.icon}>
                     <ListAltIcon />
                </div>
                <Typography className={classes.text}>Order Detail</Typography>
            </div>
            <div className={classes.item}>
                <div  className={classes.icon}>
                     <PeopleIcon />
                </div>
                <Typography className={classes.text}>Customer</Typography>
            </div>
            <div className={classes.item}>
                <div  className={classes.icon}>
                     <BarChartIcon />
                </div>
                <Typography className={classes.text}>Analytics</Typography>
            </div>
            <div className={classes.item}>
                <div  className={classes.icon}>
                     <EditIcon />
                </div>
                <Typography className={classes.text}>Reviews</Typography>
            </div>
            <div className={classes.item}>
                <div  className={classes.icon}>
                     <FastfoodIcon />
                </div>
                <Typography className={classes.text}>Foods</Typography>
            </div>
            <div className={classes.item}>
                <div  className={classes.icon}>
                     <MenuBookIcon />
                </div>
                <Typography className={classes.text}>Food Detail</Typography>
            </div>
            {/* <div className={classes.item}>
                <div  className={classes.icon}>
                     <ChatIcon />
                </div>
                <Typography className={classes.text}>Chat</Typography>
            </div> */}
        </Container>
    )
}

export default LeftBar
