import React from 'react';

import { Container, Header, BackIcon, ProfileInfo } from './styles';

function Main() {
  return (
      <Container>
          <Header>
              <button>
                  <BackIcon />
              </button>

              <ProfileInfo>
                  <strong>Fabrício</strong>
                  <span>95 Tweets</span>
              </ProfileInfo>
          </Header>

          {/* <ProfilePage /> */}
          
          {/* <BottomMenu>
              <HomeIcon />
              <SearchIcon />
              <BellIcon />
              <EmailIcon />
          </BottomMenu> */}
      </Container>
  );
}

export default Main;