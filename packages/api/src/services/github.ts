import requset from '@commons/request'

export const getGithubProfile = async (name: string) =>
    requset('https://api.github.com/users/' + name, {
        method: 'GET'
    })
