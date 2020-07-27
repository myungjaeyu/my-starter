import path from 'path'
import express, { Application, Response, Request } from 'express'

import auth from '@routes/auth'
import api from '@routes/api'

const devMode = process.env.NODE_ENV !== 'production'

const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/auth', auth)
app.use('/api', api)

if (!devMode) {
    app.use(require('prerender-node').set('prerenderToken', 'TOKEN'))
    app.use(express.static(path.join(__dirname)))

    app.get('*', (req: Request, res: Response) => res.sendFile(path.join(__dirname, 'index.html')))
}

export default app
