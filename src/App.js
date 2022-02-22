import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/ComfyStore/Header';
import Home from './Components/ComfyStore/Home';
import Products from './Components/ComfyStore/Products';
import About from './Components/ComfyStore/About';
import Cart from './Components/ComfyStore/Cart';
import store from './Components/ComfyStore/redux/store';
import { Provider } from 'react-redux'
import ProductDetails from './Components/ComfyStore/ProductDetails';
function App() {
   return (
      <Provider store={store}>
         <Router>
            <div className='App'>
               <Route path="/" component={Home} exact />
               <Route path="/About" component={About} exact />
               <Route path="/Products" component={Products} exact />
               <Route path="/ProductDetails/:id" component={ProductDetails} exact />
               <Route path="/Cart" component={Cart} exact />
            </div>
         </Router>
      </Provider>
   );



}
export default App

