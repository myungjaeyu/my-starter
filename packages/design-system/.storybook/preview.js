import { addDecorator, addParameters } from '@storybook/react'

import { withInfo } from '@storybook/addon-info'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

addDecorator(withInfo({
    parameters: {
        viewport: {
            viewports: INITIAL_VIEWPORTS
        }
    }
}))

addParameters({
    viewport: {
        viewports: {
            jellyPro: {
                name: 'Jelly Pro',
                styles: {
                  width: '240px',
                  height: '432px',
                },
            },
            ...INITIAL_VIEWPORTS
        }
    }
})