import React from 'react'
import Feed from '../Feed'

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditorButton
} from './styles'

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditorButton outlined>Editar Perfil</EditorButton>
        <h1>Gustavo Fernandes</h1>
        <h2>@OGusta11</h2>
        <p>
          Web Developer <a href="https://github.com/nGustavin">GitHub</a>
        </p>
        <ul>
          <li>
            <LocationIcon />
            Curitiba, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 5 de agosto de 2002
          </li>
        </ul>
        <Followage>
          <span>
            Seguindo <strong>127</strong>
          </span>
          <span>
            <strong>12273 </strong> Seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  )
}

export default ProfilePage
