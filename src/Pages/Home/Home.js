import { Grid } from '@material-ui/core'
import React from 'react'
import LeftBar from '../../Components/LeftBar'
import NavBar from '../../Components/NavBar'

function Home() {
    return (
        <div>
           <NavBar/>
           <Grid container>
                <Grid item sm={2}>
                    <LeftBar/>
                </Grid>
                <Grid item sm={10}>
                    Feed 
                </Grid>
           </Grid>
        </div>
    )
}

export default Home
