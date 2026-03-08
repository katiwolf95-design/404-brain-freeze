import AppRouter from './router/AppRouter';
import Header from './components/layout/Header';   
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';
import ScrollToTopButton from './components/ui/ScrollToTopButton';

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
      <ScrollToTopButton />
    </>
  )
}

export default App;
