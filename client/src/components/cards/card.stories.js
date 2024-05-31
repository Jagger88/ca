import React from 'react';
import Card from './card.component';


export default {
  title: 'Components/Cards/Card',
  component: Card,
  argTypes: {
  },
  };

const Template = (args) => <Card {...args} />;

export const Main = Template.bind({});
Main.args = {
  name:'Title',
    text:'text'
};

export const NoText = Template.bind({});
NoText.args = {

};
