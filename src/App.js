import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
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
        <Route path="/placeorder">
          <PlaceOrder></PlaceOrder>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
