import AppRouter from './router/AppRouter';
import Header from './ components/layout/Header';   
import Footer from './ components/layout/Footer';

function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />  
    </>
  )
}

export default App;
