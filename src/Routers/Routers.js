import React from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import { Grid } from "@material-ui/core";

//Pages
import Dashboard from '../Pages/Dashboard/Dashboard'
import LeftBar from "../Components/LeftBar";
import NavBar from "../Components/NavBar";

function Routers() {
    return(
        <div style={{backgroundColor: 'black'}}>
        <NavBar/>
        <Grid container>
            <Grid item sm={2} xs={2}>
                <LeftBar/>
            </Grid>
            <Grid item sm={10} xs={10}>
                <Switch>
                <Route exact path="/" component={Dashboard} />
                </Switch>
            </Grid>
        </Grid>
        </div>
    )
}
export default withRouter(Routers);