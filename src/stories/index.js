import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import { LoginPage } from '../pages/login';
import Navbar from '../components/NavBar';
import MainMiddle from '../components/MainMiddle';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));


storiesOf('Login', module)
.add('with text', () => <LoginPage>login</LoginPage>)

storiesOf('Nav', module)
.add('with text', () => <Navbar>Navbar</Navbar>)

storiesOf('Middle', module)
.add('with text', () => <MainMiddle>Middle</MainMiddle>)
  