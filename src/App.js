import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import OrderReview from './components/OrderReview/OrderReview';
import Shop from './components/Shop/Shop';


function App() {
  return (
    <div >
      <Router>
      <Header></Header>
      <Switch>
        <Route path="/shop">
         <Shop></Shop>
        </Route>
        <Route path="/OrderReview">
         <OrderReview></OrderReview>
        </Route>
        <Route path="/Inventory">
         <Inventory></Inventory>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
