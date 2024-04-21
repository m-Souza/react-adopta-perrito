import './App.css'
import Titulo from './components/Header'
import MyCard from './components/MyCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

function App() {
  
  return (
    <div className='page'>
      <Titulo title="Adopta un perrito" />
      <div className='cards-container'>
        <MyCard tagColor='primary' tagText='random' src="https://random.dog/2539bc07-5097-4409-a4fa-6f8e885c42ad.jpg" dogName='Lorem' dogDescription='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, magnam.'/>
        <MyCard tagColor='success' tagText='random' src="https://random.dog/244ed23b-e0d8-44ce-be2c-552fc777d1ae.jpg" dogName='Ipsum' dogDescription='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, magnam.'/>
        <MyCard tagColor='danger' tagText='random' src="https://random.dog/edd4a2ab-bd32-42ab-9f89-92cf00a8e27c.jpg" dogName='Dolor' dogDescription='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, magnam.'/>
        <MyCard tagColor='info' tagText='random' src="https://random.dog/14bf915e-b3d2-41c9-ad85-2c1e9277237d.JPG" dogName='Sit' dogDescription='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, magnam.'/>
      </div>
      <Footer />
    </div>
  )
}

export default App
