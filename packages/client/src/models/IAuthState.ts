interface IAuthState {
    name: string
    token: string
    signIn: (name: string, password: string) => Promise<any>
    clear: () => void
}

export default IAuthState
