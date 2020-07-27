import axios, { AxiosRequestConfig, AxiosPromise } from 'axios'

const request = (url: string, options: AxiosRequestConfig = {}): AxiosPromise => {
    return axios({
        url,
        method: 'GET',
        headers: {
            // Authorization: `Bearer `, // accessToken
        },
        ...options
    })
        .then((res: any) => Promise.resolve(res.data))
        .catch(Promise.resolve)
}

export default request
