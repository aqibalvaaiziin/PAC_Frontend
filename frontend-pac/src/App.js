import React from 'react';
import './App.css';
import { Element } from 'react-scroll'
import Navigation from './components/Navigation'
import  { Daftar,Hadiah,Ketentuan,TemplateProposal,Timelines,Home, About, Support, Footer } from './scenes'

function App() {
  const menu = [
    'Home',
    'About',
    'Timelines',
    'Hadiah',
    'Ketentuan',
    'Daftar',
    'TemplateProposal',
  ]

  const scenes=[
    <Home />,
    <About />,
    <Timelines />,
    <Hadiah />,
    <Ketentuan />,
    <Daftar />,
    <TemplateProposal />,
    <Support />,
    <Footer />
  ]

  function renderScenes(){
    return scenes.map((scene,index) =>(
      <Element id={menu[index]} key={index}>
        {scene}
      </Element>
    ))
  }

  return (
    <>
      <Navigation menu={menu} />
        {renderScenes()}
    </>
  );
}

export default App;
