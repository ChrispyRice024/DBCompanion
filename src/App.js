import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'
import {Link, Route, BrowserRouter, Routes} from 'react-router-dom'


import Menu from './components/Menu.js'
import Home from './pages/Home.js'
import NewEntry from './pages/NewEntry.js'

function App(props) {

  const [loading, setLoading] = useState(true)


  const data =
  [
    {
      id:1,
      image:'da pictu',
      description:'its perty',
      price:'$3.50',
      name:'pic'
    },
    {
      id:2,
      image:'pictu2',
      description:'its real perty',
      price:'$4.20',
      name:'pic2'
    }
  ]
  // const dataName = data.map(({name}) => <p className='itemName'>name</p>)
  // const dataImage = data.map(({image}) => <span>image</span>)

  // const displayItems = (data) => {
  //   data.map((data, i) => (
  //     <li key={i}>
  //       <p>{data[i].image.value}</p>
  //       <p>{data[i].name.value} : {data[i].price.value}</p>
  //       <p>{data[i].description.value}</p>        
  //     </li>
  //   ))
  // }


  // const [data, setData] = useState(null)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try{
  //       const res = await fetch('https://dark-erin-goshawk-toga.cyclic.app/item', {
  //         method:'GET',
  //         headers:{
  //           'ContentType': 'application/json'
  //         }
  //       })
  //       if (!res.ok){
  //         throw new Error('Could Not Connect To The Database')
  //       }
  //       const result = await res.json()
  //       setData(result)
  //     }catch(err){
  //       throw new Error('Could Not Fetch', err)
  //     }finally{
  //       setLoading(false)
  //     }
  //   }
  //   fetchData()
  // }, [])

  // if(loading){
  //   return <p>
  //     Loading Data...
  //   </p>
  // }else 
  return (
    <div className="App">

      <BrowserRouter>
      <header className="App-header">
        <Menu/>
      </header>
        <Routes>
          <Route path='/' element={<Home data={data}/>}/>
          <Route path='newentry' element={<NewEntry data={data}/>}/>
        </Routes>
      </BrowserRouter>
      <div id='home'>


        </div>
    </div>
  );
}

export default App;
