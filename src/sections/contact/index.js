import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faFacebookMessenger } from "@fortawesome/free-brands-svg-icons"

import { Anchor, Center, Container, Heading } from "../../common/components"
import { colors, fonts } from "../../common/style"

const Section = styled.div`
  padding: 50px 0;
`

const Grid = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr 2fr;
`

const ContactList = styled.div`
  font-size: 1.2rem;
  font-family: ${fonts.header};
  
  & > div {
    margin-bottom: 10px;
  }
  
  & ${Anchor} {
    color: black!important;
  }
`

const WidthContainer = styled.div`
  width: 80%;
  margin: auto auto;
`

export default function() {
  return (
    <Section>
      <Container>
        <Center>
          <Heading color={colors.blue}>ติดต่อเรา</Heading>
        </Center>
        <br/>

        <WidthContainer>
          <Grid>
            <div>
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fwebforfun%2F&tabs=timeline&width=340&height=215&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=839660299554083"
                width="340" height="215" scrolling="no" frameBorder="0"
                allowTransparency="true" allow="encrypted-media"/>
            </div>
            <ContactList>
              <div>
                <FontAwesomeIcon icon={faFacebook} /> <Anchor href="https://facebook.com/webforfun" target="_blank">Facebook: Web For Fun</Anchor>
              </div>
              <div>
                <FontAwesomeIcon icon={faFacebookMessenger} /> <Anchor href="https://www.facebook.com/messages/t/webforfun" target="_blank">Messenger: Web For Fun</Anchor>
              </div>
              <div>
                <FontAwesomeIcon icon={faEnvelope} /> <span>Email: hello@webforfun.dev</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faPhone} /> <span>Phone: 093-952-0586 (ชุน), 064-323-3512 (ไอซ์)</span>
              </div>
            </ContactList>
          </Grid>
        </WidthContainer>
      </Container>
    </Section>
  )
}