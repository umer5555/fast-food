import logo from './logo.svg';
import './App.css';
import MainHeader from './components/MainHeader';
import { useEffect, useState } from 'react';


function App() {

  const [data,setData]=useState([])

  useEffect(()=>{
    fetch("https://services6.arcgis.com/qOD6P9mFnaiJRBZ0/ArcGIS/rest/services/HEA_Diabetes/FeatureServer/0/query?where=1=1&outFields=*&returnGeometry=false&f=json")
    .then((response)=>{
      response.json().then((res)=>{
        setData(res)
        console.log(res)
      })
    })
  })

  return (
   <>
   
      <MainHeader />
      <h1 className="text-3xl font-bold underline" >
     Hello Worldaa
</h1>

   </>
  );
}

export default App;
