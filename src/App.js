
import './App.css';
import Header from './components/Header'
import Product from './components/Products'
import Footer from './components/Footer'
import SignIn from './components/SignIn';


function App() {
  return (
    <div >
      <Header />
      <SignIn />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
