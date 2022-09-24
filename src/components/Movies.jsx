import React from 'react'
import { Outlet } from 'react-router-dom';
import Moviecategorie from './Moviecategorie';
import { useAutoAnimate } from '@formkit/auto-animate/react'


function Movies({ categories, data }) {
    const [parent]=useAutoAnimate();
    return (
        <div ref={parent}>
            <Outlet />
            {
                categories.map(categorie => {
                    var thiscategoriemovies=[];
                    data.movies.forEach(movie=>{
                        if (movie.categories.includes(categorie.toLowerCase())) {
                            if (!thiscategoriemovies.includes(movie)) {
                                thiscategoriemovies.push(movie);
                            }
                        }
                    })
                    return (<Moviecategorie key={categorie} categorie={categorie} thiscategoriemovies={thiscategoriemovies} />)
                })
            }

        </div>
    )
}
export default Movies;