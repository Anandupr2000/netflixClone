import React from 'react';
import Navbar from './components/navbar/Navbar';
import './App.css'
import Banner from './components/banner/Banner';
import RowPoster from './components/rowPost/RowPoster';
import {originals,action} from './urls'
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Banner/>
        {/* originals link =  https://api.themoviedb.org/3/discover/tv?api_key=%7BAPI_KEY_HERE%7D&with_networks=213 */}
        <RowPoster title="Netflix Originals" url={originals}/>
        <RowPoster title="Action" url={action} isSmall/>
    </div>
  );
}

export default App;
