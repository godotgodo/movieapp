import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import userinfo from "../userinfo.json";
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    className: '!text-white !mt-8',
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Profile() {
  const [value, setValue] = React.useState(0);

  console.log(userinfo);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const goMovie = (movie) => {
    console.log(movie);
    var moviename = movie.name.split(" ").join("-");
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Favorites " {...a11yProps(0)} />
          <Tab label="Watchlist" {...a11yProps(1)} />
          <Tab label="Rated" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ul className="flex p-2 flex-wrap" >
          {
            userinfo.favorites.map(movie =>
              <li className='min-w-[150px] mr-4' key={movie.id} onClick={() => goMovie(movie)} >
                <Tooltip title={movie.name} placement='top'>
                  <Link to={"/movies/" + movie.name.split(" ").join("-")} >
                    <img className='rounded mb-0 hover:scale-105 transition-all' src={movie.image_small} alt="" width={150} />
                  </Link>
                </Tooltip>
              </li>
            )
          }
        </ul>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ul className="flex p-2 flex-wrap" >
          {
            userinfo.watchlist.map(movie =>
              <li className='min-w-[150px] mr-4' key={movie.id} onClick={() => goMovie(movie)} >
                <Tooltip title={movie.name} placement='top'>
                  <Link to={"/movies/" + movie.name.split(" ").join("-")} >
                    <img className='rounded mb-0 hover:scale-105 transition-all' src={movie.image_small} alt="" width={150} />
                  </Link>
                </Tooltip>
              </li>
            )
          }
        </ul>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ul className="flex p-2 flex-wrap" >
          {
            userinfo.rated.map(movie =>
              <li className='min-w-[150px] mr-4' key={movie.id} onClick={() => goMovie(movie)} >
                <Tooltip title={movie.name} placement='top'>
                  <Link to={"/movies/" + movie.name.split(" ").join("-")} >
                    <img className='rounded mb-0 hover:scale-105 transition-all' src={movie.image_small} alt="" width={150} />
                  </Link>
                </Tooltip>
                  <Rating value={movie.rate} className='!text-2xl mt-1' readOnly />
              </li>
            )
          }
        </ul>
      </TabPanel>
    </Box>
  );

}

export default Profile