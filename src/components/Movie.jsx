import React from 'react'
import { useParams } from 'react-router-dom'
import Comments from './Comments/Comments';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function Movie({ data }) {
    const title = useParams().title;
    const activetitle = title.split("-").join(" ");
    var activedata;
    data.movies.forEach(element => {
        if (element.name === activetitle) {
            activedata = element;
        }
    });

    const trailerClick = () => {
        console.log(activedata)
    }

    const favoriteClick = () => {
        console.log(activedata);
    }
    const watchlistClick = () => {
        console.log(activedata);
    }
    const rateClick = (e) => {
        console.log(activedata);
        console.log(e.target.value)
    }

    return (
        <div className='w-full'>
            {activedata !== undefined &&

                <div className='w-full flex flex-wrap'>

                    <div className='basis-1/2  md:basis-1/2  lg:basis-1/5 flex flex-col justify-evenly items-center'>
                        <h2 className='text-3xl text-white opacity-70 mx-auto'>{activedata.director}</h2>
                        <div className='mx-auto'>
                            <h4 className='text-2xl text-white opacity-70 capitalize '>Country: {activedata.country}</h4>
                            <h4 className='text-2xl text-white opacity-70 capitalize '>Language: {activedata.language}</h4>
                        </div>
                        <button className='text-2xl text-white' onClick={() => trailerClick(activedata)}>
                            <PlayArrowIcon className='!text-white !text-5xl mb-1' />
                            <span className='ml-2 mt-8 inline-block'>
                                Trailer
                            </span>
                        </button>
                    </div>

                    <div className="basis-full md:basis-full lg:basis-3/5 -order-1 md:-order-1 lg:order-[0] divim-container">

                        <div className="divim" style={{
                            backgroundImage: `url("${activedata.image_big}")`
                        }}></div>

                        <div className="fade-divim"></div>
                        <div className='absolute top-[400px] left-[10%] w-4/5 h-16 flex justify-between'>
                            <div className='flex items-end'>
                                <h1 className='text-6xl text-white opacity-90'>{activedata.name}</h1>
                                <h3 className='text-xl text-white opacity-70 ml-2'>{activedata.prod_year}</h3>
                            </div>
                            <h3 className='text-white text-4xl opacity-80 my-auto'>{activedata.rate}/5</h3>
                        </div>
                        <div className='absolute top-[465px] left-[10%] w-4/5 h-16 flex justify-around'>
                            <ul className='flex w-full justify-end'>
                                <ul className='list-none flex items-center flex-row mr-auto'>
                                    {
                                        activedata.categories.map(categorie =>
                                            <li className='text-lg italic text-white opacity-70 ml-4' key={categorie}>{categorie}</li>
                                        )
                                    }
                                </ul>
                                <li>
                                    <button onClick={favoriteClick} className='text-white text-lg mx-2  flex flex-col items-center '>
                                        <FavoriteBorderIcon className='!text-4xl' />
                                        <span>Favorite</span>
                                    </button>
                                </li>
                                <li>
                                    <button onClick={watchlistClick}  className='text-white text-lg mx-2 flex flex-col items-center'>
                                        <PlaylistAddIcon className='!text-4xl' />
                                        <span >Watchlist</span>
                                    </button>
                                </li>
                                <li className='text-white text-lg mx-2 flex flex-col items-center justify-end'>
                                    <Stack spacing={1} className='bg-slate-600 rounded-xl'>
                                        <Rating name="half-rating" defaultValue={0} precision={0.5} className='!text-3xl' onChange={(e)=>rateClick(e)} />
                                    </Stack>
                                    <span>Your rating</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='basis-1/2  md:basis-1/2  lg:basis-1/5 w-1/5 h-max-[475px] mt-24 lg:mt-8 md:mt-24'>
                        <Comments activedata={activedata} />
                    </div>
                </div>
            }

        </div>
    )
}

export default Movie