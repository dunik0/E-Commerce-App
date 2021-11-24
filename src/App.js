import { ProductsContextProvider } from './context/ProductsContext';
import Router from './components/Router/Router';

function App() {
  return (
    <ProductsContextProvider>
      <Router />
    </ProductsContextProvider>
  );
}

export default App;
