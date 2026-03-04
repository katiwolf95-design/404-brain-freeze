import AppRouter from './router/AppRouter';
import Header from './components/layout/Header';   
import Footer from './components/layout/Footer';

function App() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <AppRouter />
      </main>
      <Footer />  
    </>
  )
}

export default App;
