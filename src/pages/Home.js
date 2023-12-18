import {React, useState} from 'react'
import {Link} from 'react-router-dom'

export default function Home(props) {
    
    const data = props.data
    return(
        <div id='home'>
            {console.log(data)}
            {data ? (
                <div className='itemList'>
                    {data.map((i) => (
                        <div  key={i.id}>
                            <li className='listItem'>
                                <p>{i.image}</p>
                                <p>{i.name} : {i.price}</p>
                                <p>{i.description}</p> 
                            </li>
                            {console.log(i.name)}
                        </div>
                ))}
                
            </div>
        ):(
            <p>No data available{console.log('else', data.name)}</p>
        )}
    </div>
    )
}