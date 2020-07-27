import { Router, Response, Request } from 'express'

import { getGithubProfile } from '@services/github'

const github: Router = Router()

github.get('/:name', async (req: Request, res: Response) => {
    const { name } = req.params

    const result = await getGithubProfile(name)

    res.json(result)
})

export default github
