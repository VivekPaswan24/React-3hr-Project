
import './App.css';
import Candies from './components/Candies/Candies';
import CandyForm from './components/CandyForm';
import Header from './components/Header/Header';
import CandyProvider from './store/CandyProvider';
import CartProvider from './store/CartProvider';

function App() {
  

  return (
    <CartProvider>
    <CandyProvider>
      <Header/>
      <CandyForm />
      <Candies/>
    </CandyProvider>

    </CartProvider>
  );
}

export default App;
