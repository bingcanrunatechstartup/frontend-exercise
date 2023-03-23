import React from 'react';
import styled from 'styled-components/macro';

// Import the theming variables
import { theme } from './theme';

import { CustomCard, CustomCardActionArea, CustomCardActions, CustomCardContent, CustomCardMedia, CustomButton, CustomCardTitle, CustomCardText } from '../App';

const MyCustomCard = ({ image, title, text }) => {
    return (
        <CustomCard>
        <CustomCardActionArea>
          <CustomCardMedia image={image} title="Sample Card" />
          <CustomCardContent>
            <CustomCardTitle>{ title }</CustomCardTitle>
            <CustomCardText>
              { text }
            </CustomCardText>
          </CustomCardContent>
        </CustomCardActionArea>
        <CustomCardActions>
          <CustomButton>Learn More</CustomButton>
        </CustomCardActions>
      </CustomCard>
    );
}

// Export the component name as default
export default {
    title: 'MyCustomCard',
    component: MyCustomCard,
  };

// Export some stories for the component with different props
export const Default = () => (
    <MyCustomCard
      image="https://source.unsplash.com/random"
      title="Default Card"
      text="This is a default card with no custom props."
    />
  );
  
  export const Large = () => (
    <MyCustomCard
      image="https://source.unsplash.com/random"
      title="Large Card"
      text="This is a large card with a custom style prop."
      style={{ width: '24rem' }}
    />
  );
  
  export const Small = () => (
    <MyCustomCard
      image="https://source.unsplash.com/random"
      title="Small Card"
      text="This is a small card with a custom style prop."
      style={{ width: '12rem' }}
    />
  );
