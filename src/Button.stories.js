import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import { Button } from './Button'

storiesOf('Button', module)
  .addDecorator(withInfo)
  .addWithJSX(
    'with background',
    () => <Button bg="plaegoldenron">Hello world!</Button>,
    { info: 'Button One' }
  )
  .addWithJSX(
    'with background 2',
    () => <Button bg="red">error</Button>,
    { info: 'Error button' }
  )
