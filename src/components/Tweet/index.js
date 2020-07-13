import React from 'react';

import { 
    Container, 
    Retweeted, 
    RocketseatIcon, 
    Body, 
    Avatar, 
    Content, 
    Header,
    Dot, 
    Description, 
    ImageContent, 
    Icons, 
    Status, 
    CommentIcon, 
    RetweetIcon, 
    LikeIcon } from './styles';

function Tweet() {
  return (
      <Container>
          <Retweeted>
              <RocketseatIcon />
              Você retweetou
          </Retweeted>
          <Body>
              <Avatar />

              <Content>
                  <Header>
                      <strong>UTFPR</strong>
                      <span>@utfpr</span>
                      <Dot />
                      <time>26 de nov</time>
                  </Header>

                  <Description>Por um futuro brilhante</Description>

                  <ImageContent />

                  <Icons>
                      <Status>
                          <CommentIcon />
                          18
                      </Status>
                      <Status>
                          <RetweetIcon />
                          18
                      </Status>
                      <Status>
                          <LikeIcon />
                          999
                      </Status>
                  </Icons>

              </Content>
          </Body>
      </Container>
  );
}

export default Tweet;