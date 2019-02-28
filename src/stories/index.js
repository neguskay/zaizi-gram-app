import React from 'react';
import { Provider } from 'react-redux'

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import { LoginPage } from '../pages/login';
import { store } from '../redux/_store'
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
.addDecorator(story => <Provider store={store}>{story()}</Provider>)
.add('empty form', () => <LoginPage />)


storiesOf('Nav', module)
.add('with text', () => <Navbar>Navbar</Navbar>)

storiesOf('Middle', module)
.add('with text', () => <MainMiddle>Middle</MainMiddle>)
  