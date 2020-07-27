import { createContainer } from 'unstated-next'

import useAuth from '@hooks/useAuth'

const AuthContainer = createContainer(useAuth)

export default AuthContainer
