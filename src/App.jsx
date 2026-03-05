import AppRouter from './router/AppRouter';
import Header from './components/layout/Header';   
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';

function App() {
  return (
    <>
      <Container>
      <Header />
      <main className="pt-24">
        <AppRouter />
        </main>
     </Container>
    <Footer />  
    </>
  )
}

export default App;
