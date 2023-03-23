import logo from './logo.svg';
import './App.css';

// Import React and Material UI components
import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

// Define the theming variables
const theme = {
  colorPrimary: '#007bff', // a crisp blue color
  colorSecondary: '#f0f0f0', // a light gray color
  colorAccent: '#ff9900', // a hip orange color
  fontFamilyBase: '"Roboto", sans-serif', // a modern font
  fontSizeBase: '1rem', // a thin font size
  spacingBase: '0.5rem', // a small spacing unit
  breakpointSm: '576px', // a breakpoint for small screens
  boxShadowBase: '0 2px 4px rgba(0,0,0,0.1)', // a subtle shadow
  boxShadowHover: '0 4px 8px rgba(0,0,0,0.2)', // a stronger shadow on hover
  paddingBase: '1rem', // a base padding for card content
};

// Create a custom card component using the theming variables
const CustomCard = ({ image, title, text }) => {
  return (
    <Card style={{ width: '18rem', boxShadow: theme.boxShadowBase }}>
      <CardActionArea>
        <CardMedia style={{ height: '10rem' }} image={image} title={title} />
        <CardContent style={{ padding: theme.paddingBase }}>
          <Typography gutterBottom variant="h5" component="h2" style={{ fontFamily: theme.fontFamilyBase }}>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{ fontFamily: theme.fontFamilyBase }}>
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ padding: theme.paddingBase }}>
        <Button size="small" color="primary" style={{ color: theme.colorPrimary }}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
