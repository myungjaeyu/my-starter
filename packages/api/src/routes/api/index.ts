import { Router } from 'express'

import github from './github'

const api = Router()

api.use('/github', github)

export default api
