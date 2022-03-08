import React, { useState } from 'react'
import { makeStyles,  Divider, Typography, AppBar, Toolbar, alpha, InputBase, Badge, Avatar } from '@material-ui/core'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import CancelIcon from '@mui/icons-material/Cancel';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: '#3d4753'
    },
    logoLg: {
        fontFamily: "Poppins",
        fontWeight: 700,
        [theme.breakpoints.down('sm')]: {
            fontSize: 15
        }
    },
    search: {
        display: "flex",
        alignItems: "center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: "50%",
        [theme.breakpoints.down("sm")]: {
            display: (props) => (props.open ? "flex" : "none"),
            width: '60%',
            // display: "none",
        },
    },
    input: {
        color: 'white',
        marginLeft: theme.spacing(1),
    },
    cancel: {
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    searchButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    icons: {
        display: (props) => props.open ? "none" : "flex" ,
        // display: 'flex' ,
        alignItems: 'center',
    },
    badge: {
        marginRight: theme.spacing(2),
    },
    divider: {
        backgroundColor: 'white',
        [theme.breakpoints.down("sm")]: {
            display: 'none'
        }
    },
    names: {
        fontSize: 14,
        marginRight: theme.spacing(2),
        [theme.breakpoints.down("sm")]: {
            display: 'none'
        }
    },
}))

function NavBar() {
    const[open, setOpen] = useState(false)
    const classes = useStyles({open});

    return (
        <AppBar position='fixed'>
            <Toolbar className={classes.toolbar}>
                <Typography variant='h6' className={classes.logoLg}>Food Resturan</Typography>
                <div className={classes.search}>
                    <SearchIcon/>
                    <InputBase placeholder='Search...' className={classes.input} />
                    <div  className={classes.cancel}>
                        <CancelIcon onClick={() => setOpen(false)} />
                    </div>
                </div>
                <div className={classes.icons}>
                    <div  className={classes.searchButton}>
                        <SearchIcon onClick={() => setOpen(true)}/>
                    </div>
                    <Badge badgeContent={3} color="secondary" className={classes.badge}>
                        <NotificationsIcon/>
                    </Badge>
                    <Badge badgeContent={2} color="secondary" className={classes.badge}>
                        <ChatIcon/>
                    </Badge>
                    <Badge badgeContent={4} color="secondary" className={classes.badge}>
                        <ShoppingBasketIcon/>
                    </Badge>
                    <Divider orientation="vertical" variant="middle" flexItem className={classes.divider}/>
                    <Typography className={classes.names}>Hello, Kiki</Typography>
                    <Avatar alt="Remy Sharp">RD</Avatar>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
