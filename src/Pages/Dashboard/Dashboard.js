import { Container, Typography, makeStyles, Grid, Card, Button } from '@material-ui/core'
import React from 'react'
import CardFilter from '../../Components/CardFilter'
import CardStatistic from '../../Components/CardStatistic';
import CardTotal from '../../Components/CardTotal';
import ButtonDay from '../../Components/ButtonDay'

import IconFood from '../../Asset/food.png'
import IconViews from '../../Asset/views.png'
import IconOrder from '../../Asset/order.png'
import IconRating from '../../Asset/rating.png'
import ChartOrder from '../../Components/ChartOrder';
import ChartRevenue from '../../Components/ChartRevenue';
import ButtonMap from '../../Components/ButtonMap';
import ChartMap from '../../Components/ChartMap';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        [theme.breakpoints.down('sm')]: {
            paddingTop: theme.spacing(9)
        }
    },
    dashboard: {
        fontFamily: 'Poppins',
        fontWeight: 700,
        fontSize: 18,
        color: 'white'
    },
    subText: {
        marginTop: theme.spacing(1),
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(0)
        }
    },
    filter: {
        display: "flex",
        justifyContent: 'flex-end',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'flex-start',
            marginTop: theme.spacing(1)
        }
    },
    containerTotal: {
        marginTop: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(1)
        }
    },
    itemCard: {
        [theme.breakpoints.down('sm')]: {
            display: "flex",
        }
    },
    card: {
        padding: theme.spacing(2),
        // display: "flex",
        alignItems: 'center',
        backgroundColor: '#3d4753',
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    revenue: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    gridStatistic: {
        marginTop: theme.spacing(1)
    },
    buttonGroup: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    buttonMap: {
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    },
}))

function Dashboard() {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Grid container>
                <Grid item sm={6} xs={12}>
                    <Typography variant='h6' className={classes.dashboard}>Dashboard</Typography>
                    <Typography variant='body2' className={classes.subText}>Hi, Kiki. Welcome Back to Food Resturan Admin!</Typography>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <div className={classes.filter}>
                        <CardFilter/>
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={1} className={classes.containerTotal}>
                <Grid item sm={3} xs={6} className={classes.itemCard}>
                    <CardTotal angka="435" title="Total Menus"/>
                </Grid>
                <Grid item sm={3} xs={6} className={classes.itemCard}>
                    <CardTotal angka="337" title="Total Orders" />
                </Grid>
                <Grid item sm={3} xs={6} className={classes.itemCard}>
                    <CardTotal angka="124" title="Total Canceled" />
                </Grid>
                <Grid item sm={3} xs={6} className={classes.itemCard}>
                    <CardTotal angka="$929" title="Total Revenue" />
                </Grid>
            </Grid>
            <Grid container spacing={1} className={classes.containerTotal}>
                <Grid item sm={6} xs={12} className={classes.itemCard}>
                    <Card className={classes.card}>
                        <Typography>Statistic</Typography>
                        <Grid container spacing={1} className={classes.gridStatistic}>
                            <Grid item sm={6} xs={6}  className={classes.itemCard}>
                                <CardStatistic src={IconFood} angka='6842' ket='Order Received' />
                            </Grid>
                            <Grid item sm={6} xs={6}  className={classes.itemCard}>
                                <CardStatistic src={IconOrder} angka='1520' ket='Recent Orders' />   
                            </Grid>
                            <Grid item sm={6} xs={6}  className={classes.itemCard}>
                                <CardStatistic src={IconViews} angka='35745' ket='Total Views' />
                            </Grid>
                            <Grid item sm={6} xs={6}  className={classes.itemCard}>
                                <CardStatistic src={IconRating} angka='+2500' ket='Satisfaction' />   
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item sm={6} xs={12} className={classes.itemCard}>
                    <Card className={classes.card}>
                        <Typography>Chart Order</Typography>
                        <div className={classes.gridStatistic}>
                            <ChartOrder/>
                        </div>
                    </Card> 
                </Grid>
            </Grid>
            <Grid container spacing={1} className={classes.containerTotal}>
                <Grid item sm={6} xs={12} className={classes.itemCard}>
                    <Card className={classes.card}>
                        <div className={classes.revenue}>
                            <Typography>Revenue</Typography>
                            <ButtonDay ButtonDay="Monthly"/>
                        </div>
                        <div className={classes.gridStatistic}>
                            <ChartRevenue/>
                        </div>
                    </Card> 
                </Grid>
                <Grid item sm={6} xs={12} className={classes.itemCard}>
                    <Card className={classes.card}>
                        <div className={classes.revenue}>
                            <Typography>Customer Map</Typography>
                            <div className={classes.buttonGroup}>
                            <ButtonMap/>
                            </div>
                            <div className={classes.buttonMap}>
                                <ButtonDay ButtonDay="Monthly"/>
                            </div>
                        </div>
                        <div className={classes.gridStatistic}>
                            <ChartMap/>
                        </div>
                    </Card> 
                </Grid>
            </Grid>
            <Grid container spacing={1} className={classes.containerTotal}>
                <Grid item sm={8} xs={12} className={classes.itemCard}>
                    <Card className={classes.card}>
                        <div className={classes.revenue}>
                            <Typography>Recent Order Request</Typography>
                            <ButtonDay ButtonDay="Newest"/>
                        </div>
                    </Card>
                </Grid>
                <Grid item sm={4} xs={12} className={classes.itemCard}>
                    <Card className={classes.card}>
                        <div className={classes.revenue}>
                            <Typography>Top Menu List</Typography>
                            {/* <ButtonDay/> */}
                        </div>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Dashboard
