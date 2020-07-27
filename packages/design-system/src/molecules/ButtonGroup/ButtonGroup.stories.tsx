import React from 'react'

import ButtonGroup from './ButtonGroup'
import Button from '../../atoms/Button/Button'

const docs = `
#### blah

description blah blah blah blah blah blah blah blah

~~~tsx
import { ButtonGroup, Button } from 'design-system'
~~~
`

export default {
    title: 'ButtonGroup',
    component: ButtonGroup,
    parameters: { info: { text: docs } }
}

export const DefaultButtonGroup = () => (
    <ButtonGroup>
        <Button>Default Button</Button>
        <Button>Default Button</Button>
        <Button>Default Button</Button>
    </ButtonGroup>
)

export const SizeButtonGroup = () => (
    <div>
        <ButtonGroup size='lg'>
            <Button>Size Button</Button>
            <Button>Button</Button>
            <Button>Group</Button>
        </ButtonGroup>
        <p />
        <ButtonGroup>
            <Button>Size Button</Button>
            <Button>Button</Button>
            <Button>Group</Button>
        </ButtonGroup>
        <p />
        <ButtonGroup size='sm'>
            <Button>Size Button</Button>
            <Button>Button</Button>
            <Button>Group</Button>
        </ButtonGroup>
    </div>
)
