import {React, useState} from 'react'
import {Link} from 'react-router-dom'

import Home from '../pages/Home.js'

export default function Menu () {

    return(
        <div>
            <span><Link to='/'> Home</Link> |</span>
            <span><Link to='newentry'> New Entry |</Link></span>
            <span> Edit Existing Data</span>
        </div>
    )
}