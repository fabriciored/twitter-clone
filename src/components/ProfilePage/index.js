import React from 'react';


import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage } from './styles';

function ProfilePage() {
  return (
      <Container>
          <Banner>
              <Avatar />
          </Banner>

          <ProfileData>
              {/* <EditButton outlined>Editar Perfil</EditButton> */}

              <h1>Fabrício</h1>
              <h2>@redthek1ng</h2>

              <p>
                  Software Engineering student at <a href="https://twitter.com/UTFPR_?">@UTFPR.</a>
              </p>

              <ul>
                  <li>
                      <LocationIcon />
                      São Paulo, Brasil
                  </li>
                  <li>
                      <CakeIcon />
                      Nascido(a) em 26 de Novembro de 2001
                  </li>
              </ul>

              <Followage>
                  <span>
                      Seguindo <strong>26</strong>
                  </span>
                  <span>
                  <strong>8 </strong>Seguidores
                  </span>
              </Followage>
          </ProfileData>
      </Container>
  )
}

export default ProfilePage;