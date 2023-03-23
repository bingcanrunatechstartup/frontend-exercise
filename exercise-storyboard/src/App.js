import logo from './logo.svg';
import './App.css';

// Import React and Material UI components
import React from 'react';
import styled from 'styled-components/macro';

// Import the theming variables
import { theme } from './frontend/theme';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
// Create a custom card component using the theming variables and styled-components
const CustomCard = styled(Card)`
  width: 18rem;
  box-shadow: ${theme.boxShadowBase};
`;

const CustomCardActionArea = styled(CardActionArea)`
  &:hover {
    box-shadow: ${theme.boxShadowHover};
  }
`;

const CustomCardMedia = styled(CardMedia)`
  height: 10rem;
`;

const CustomCardContent = styled(CardContent)`
  padding: ${theme.paddingBase};
`;

const CustomCardTitle = styled(Typography).attrs({
  gutterBottom: true,
  variant: 'h5',
  component: 'h2',
})`
  font-family: ${theme.fontFamilyBase};
`;

const CustomCardText = styled(Typography).attrs({
  variant: 'body2',
  color: 'textSecondary',
  component: 'p',
})`
  font-family: ${theme.fontFamilyBase};
`;

const CustomCardActions = styled(CardActions)`
  padding: ${theme.paddingBase};
`;

const CustomButton = styled(Button).attrs({
  size: 'small',
})`
  color: ${theme.colorPrimary};
`;


function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CustomCard>
        <CustomCardActionArea>
          <CustomCardMedia image="https://source.unsplash.com/random" title="Sample Card" />
          <CustomCardContent>
            <CustomCardTitle>Sample Card</CustomCardTitle>
            <CustomCardText>
              This is a sample card component using React and styled-components with custom theming variables.
            </CustomCardText>
          </CustomCardContent>
        </CustomCardActionArea>
        <CustomCardActions>
          <CustomButton>Learn More</CustomButton>
        </CustomCardActions>
      </CustomCard>
    </div>
    </div>
  );
}

export default App;

/*
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
*/
