import React from 'react'
import './style.scss'
import Header from '../header/Header';
import NewsList from '../news/NewList';
import Menu from '../menu/Menu';


function Home() {
  return (
    <div className='home'>
        <Header />
        <Menu />
        <div className='container-home'>
          <div className='container-new1'>
            <div className='new1'>
              <NewsList /> {}
            </div>
            <div className='new2'></div>
            <div className='new3'></div>
          </div>
        </div>
    </div>
  )
}

export default Home
