import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'

function App() {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await fetch('https://dark-erin-goshawk-toga.cyclic.app/item', {
          method:'GET',
          headers:{
            'ContentType': 'application/json'
          }
        })
        if (!res.ok){
          throw new Error('Could Not Connect To The Database')
        }
        const result = await res.json()
        setData(result)
      }catch(err){
        throw new Error('Could Not Fetch', err)
      }finally{
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if(loading){
    return <p>
      Loading Data...
    </p>
  }else return (
    <div className="App">
      <header className="App-header">

      </header>
      <div id='home'>
            {data ? (
                <p>
                    Data: {JSON.stringify(data)}
                </p>
            ):(
                <p>No data available</p>
            )}

        </div>
    </div>
  );
}

export default App;
