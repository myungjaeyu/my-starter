import http from 'http'

import app from './app'

const devMode = process.env.NODE_ENV !== 'production'

const port = devMode ? 3001 : process.env.PORT || 8080

app.set('port', port)

const server = http.createServer(app)

server.listen(port)
server.on('listening', () => console.log(server.address()))
