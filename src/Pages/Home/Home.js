import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='containerHome'>
      <div
        style={{
          width: '90%',
        }}
      >
        <marquee>
          <h1
            style={{
              color: 'white',
            }}
          >
            Machine Coding Round - FrontEnd
          </h1>
        </marquee>
      </div>
      <div className='nav-link'>
        <Link to='/loader' style={{ textDecoration: 'none' }}>
          <div className='text'>Loader</div>
        </Link>
        <Link to='/chess' style={{ textDecoration: 'none' }}>
          <div className='text'>Chess</div>
        </Link>
        <Link to='/stopwatch' style={{ textDecoration: 'none' }}>
          <div className='text'>StopWatch</div>
        </Link>
        <Link to='/tic-tac-toe' style={{ textDecoration: 'none' }}>
          <div className='text'> Tic-Tac-Toe</div>
        </Link>
        <Link to='/traffic-light' style={{ textDecoration: 'none' }}>
          <div className='text'>Traffic Light</div>
        </Link>
        <Link to='/star-rating' style={{ textDecoration: 'none' }}>
          <div className='text'>Star Rating</div>
        </Link>
        <Link to='/data-table' style={{ textDecoration: 'none' }}>
          <div className='text'>Data Table</div>
        </Link>
        <Link to='/todo-list' style={{ textDecoration: 'none' }}>
          <div className='text'>ToDo List</div>
        </Link>
        <Link to='/spreadsheet' style={{ textDecoration: 'none' }}>
          <div className='text'>Spread Sheet</div>
        </Link>
        <Link to='/drag-and-drop' style={{ textDecoration: 'none' }}>
          <div className='text'>Drag And Drop</div>
        </Link>
        <Link to='/accordion' style={{ textDecoration: 'none' }}>
          <div className='text'>Accordion</div>
        </Link>
        <Link to='/carousel' style={{ textDecoration: 'none' }}>
          <div className='text'>Carousel</div>
        </Link>
        <Link to='/file-folder' style={{ textDecoration: 'none' }}>
          <div className='text'>File/Folder Structure</div>
        </Link>
        <Link to='/infinite-scroll' style={{ textDecoration: 'none' }}>
          <div className='text'>Infinite Scroll</div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
