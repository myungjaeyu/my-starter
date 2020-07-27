import React from 'react'

import Progress from './Progress'

const docs = `
#### blah

description blah blah blah blah blah blah blah blah

~~~tsx
import { Progress } from 'design-system'
~~~
`

export default {
    title: 'Progress',
    component: Progress,
    parameters: { info: { text: docs } }
}

export const DefaultProgress30 = () => <Progress now={30} min={0} max={100} />

export const DefaultProgress50 = () => <Progress now={50} min={0} max={100} />

export const DefaultProgress70 = () => <Progress now={70} min={0} max={100} />

export const StripedProgress = () => <Progress now={70} min={0} max={100} striped />
