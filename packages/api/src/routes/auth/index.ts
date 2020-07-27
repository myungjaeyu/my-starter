import { Router, Response, Request } from 'express'

const auth: Router = Router()

auth.get('/me', (req: Request, res: Response) => {
    res.json({})
})

export default auth
