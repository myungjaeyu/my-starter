import React, { Fragment, Dispatch, SetStateAction } from 'react'

import styled from '@emotion/styled'

import { useState } from 'react'
import { useMount } from 'react-use'

import { getGithubProfile } from '@services/github'

interface IProfileProps {
    name: string
}

interface IAvatarProps {
    src: string
}

const Avatar = styled.div<IAvatarProps>`
    background-image: ${({ src }) => `url(${src} )`};
    background-size: cover;
    background-position: center;
    width: 150px;
    height: 150px;
    border-radius: 100px;
`

const Profile = ({ name }: IProfileProps) => {
    const [img, setImg]: [string, Dispatch<SetStateAction<string>>] = useState('')

    const [username, setUserName]: [string, Dispatch<SetStateAction<string>>] = useState('')

    const [bio, setBio]: [string, Dispatch<SetStateAction<string>>] = useState('')

    const [url, setUrl]: [string, Dispatch<SetStateAction<string>>] = useState('')

    useMount(() => {
        getGithubProfile(name).then((e: any) => {
            setImg(e.avatar_url)
            setUserName(e.name)
            setBio(e.bio)
            setUrl(e.html_url)
        })
    })

    return (
        <Fragment>
            <a href={url} target='_blank'>
                <Avatar src={img} />
            </a>
            <p>
                <small>name: {username}</small>
                <br />
                <small>bio: {bio}</small>
            </p>
        </Fragment>
    )
}

export default Profile
