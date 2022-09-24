import React, { useState } from 'react'
import Tooltip from '@mui/material/Tooltip';
import { Icon } from '@iconify/react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Moviecategorie({ categorie, thiscategoriemovies }) {
    const navigate=useNavigate();
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const refim = useRef(null);
    const changedScrollLeftValue = (e) => {
        if (e.target.scrollLeft > 10) {
            setShowLeftArrow(true);
        }
        else {
            setShowLeftArrow(false);
        }
    }
    const slideLeft = () => {
        refim.current.scrollLeft -= 500;
    }
    const slideRight = () => {
        console.log(thiscategoriemovies);
        refim.current.scrollLeft += 500;
    }

    const movieClick=(movie)=>{
        var moviename= movie.name.split(" ").join("-");
        navigate(moviename);
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    return (
        <div>
            <h3 id={categorie} className='text-2xl text-white p-3'>
                {categorie}
            </h3>
            <div className='flex items-center'>
                <div className='min-w-[32px] h-[225px] flex items-center hover:bg-sky-800 transition-all rounded' onClick={() => slideLeft()}>
                    <Icon onClick={() => slideLeft()} icon="ant-design:left-outlined" className={`${showLeftArrow ? 'block' : 'hidden'} text-5xl`} />
                </div>
                <ul onScroll={(e) => {
                    changedScrollLeftValue(e);
                }} className='flex overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide' ref={refim}>
                    {
                        thiscategoriemovies.map(movie =>
                            <li className='min-w-[150px] mr-4' onClick={()=>movieClick(movie)} key={movie.id}>
                                <Tooltip title={movie.name} placement='top'>
                                    <img className='rounded mb-0 hover:scale-105 transition-all' src={movie.image_small} alt="" width={150} />
                                </Tooltip>
                            </li>
                        )
                    }
                </ul>
                <div onClick={() => slideRight()} className='flex items-center hover:bg-sky-800 transition-all rounded h-[225px] w-[32px]'>
                    <Icon onClick={() => slideRight()} icon="ant-design:right-outlined" className='text-5xl' />
                </div>
            </div>
        </div>
    )
}
