import React from "react";
import Appbar from "./components/Appbar";
import data from './data.json';
import Movies from "./components/Movies";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Movie from "./components/Movie";
import Profile from "./components/User/Profile/Profile";
import Account from "./components/User/Account";

const categories = ['Thriller', 'Crime', 'Sci-fi', 'Horror', 'Drama', 'Comedy', 'Action', 'Adventure','Documentary']

function App() {
  console.log(data)
  return (
    <BrowserRouter>
      <div className="w-full h-full min-h-screen bg-[#14181c]">
        <Appbar categories={categories} />
        <Routes>
          <Route path="/" element={<h1 className="text-9xl">home</h1>} />
          <Route path="movies" element={<Movies categories={categories} data={data} />} >
            <Route path=":title" element={<Movie data={data} />} />
          </Route>
          <Route path="profile" element={<Profile/>} />
          <Route path="account" element={<Account/>} />
          <Route path="login" element={<h1 className="text-9xl">login</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
