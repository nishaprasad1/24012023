import React, { useEffect } from 'react'
import Containt from './Containt'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import Home1 from './Home1'
import store1 from '../Redux/store'
import { Provider } from 'react-redux'
import Home2 from './Home2'
export default function App() {
  
  var pro1 = [10,20];
  var pro2 = [100,200 , ...pro1];
  console.log("======");
  console.log(pro2);

  return (
    <div>
      <Provider store={store1}>
        <Header/>
        <Home2/>
        <Footer/>
      </Provider>

     
    </div>
  )
}
