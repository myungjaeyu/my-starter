import React from 'react'
import { action } from '@storybook/addon-actions'

import Button from './Button'

const docs = `
#### blah

description blah blah blah blah blah blah blah blah

~~~tsx
import { Button } from 'design-system'
~~~
`

export default {
    title: 'Button',
    component: Button,
    parameters: { info: { text: docs } }
}

export const DefaultButton = () => <Button>Default Button</Button>

export const ColorButton = () => [
    <div>
        <Button>Color Button</Button>
        <Button theme='primary'>Color Button</Button>
        <Button theme='secondary'>Color Button</Button>
        <Button theme='success'>Color Button</Button>
        <Button theme='danger'>Color Button</Button>
        <Button theme='warning'>Color Button</Button>
        <Button theme='info'>Color Button</Button>
        <Button theme='dark'>Color Button</Button>
        <Button theme='link'>Color Button</Button>
    </div>
]

export const SizeButton = () => [<Button size='lg'>Size Button</Button>, <Button>Size Button</Button>, <Button size='sm'>Size Button</Button>]

export const OutlineButton = () => <Button outline>Outline Button</Button>

export const BlockButton = () => <Button block>Block Button</Button>

export const SquaredButton = () => <Button squared>Squared Button</Button>

export const SquaredBlockButton = () => (
    <Button squared block>
        Squared Block Button
    </Button>
)

export const SquaredBlockOutLineButton = () => (
    <Button squared block outline>
        Squared Block Outline Button
    </Button>
)

export const OnClickButton = () => <Button onClick={action('a')}>OnClick Button</Button>
