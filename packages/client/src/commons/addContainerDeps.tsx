import React from 'react'

/* https://github.com/jamiebuilds/unstated-next/issues/55
 */
const addContainerDeps = (container, ...deps) => {
    if (!deps) return container

    const CurrentProvider = container.Provider

    container.Provider = (props) => deps.reduce((combinedDeps, Dep) => <Dep.Provider>{combinedDeps}</Dep.Provider>, <CurrentProvider>{props.children}</CurrentProvider>)

    return container
}

export default addContainerDeps
