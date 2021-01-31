import { Grid } from '@material-ui/core'
import React from 'react'
import Allergy from './Selections/Allergy'
import Course from './Selections/Course'
import Cuisine from './Selections/Cuisine'
import Diet from './Selections/Diet'



// const containerStyles = makeStyles((theme) => ({


// }))

export default function Container() {

    // const classes = containerStyles()
    return (
        <div style = {{padding: 30, top: "200px", position: "relative"}} >
            <Grid container justify = "center" spacing = {5} >
                <Grid item>
                    <Cuisine />
                </Grid>
                <Grid item>
                    <Course />
                </Grid>
                <Grid item>
                    <Allergy />
                </Grid>
                <Grid item>
                    <Diet />
                </Grid>
            </Grid>
            
        </div>
    )
}
