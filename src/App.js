import { ProductsContextProvider } from './context/ProductsContext';
import Router from './components/Router/Router';
import { CartContextProvider } from './context/CartContext';

function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Router />
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
