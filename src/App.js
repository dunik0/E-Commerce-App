import { ProductsContextProvider } from './context/ProductsContext';
import Router from './components/Router/Router';
import { CartContextProvider } from './context/CartContext';

function App() {
  return (
    <CartContextProvider>
      <ProductsContextProvider>
        <Router />
      </ProductsContextProvider>
    </CartContextProvider>
  );
}

export default App;
