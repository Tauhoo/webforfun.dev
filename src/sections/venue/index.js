import React from "react"
import styled from "styled-components"

import { Center, Container, Heading, Section } from "../../common/components"
import { colors, fonts, media } from "../../common/style"

const Grid = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(2, 1fr);

  ${media.tablet`
    grid-template-columns: 1fr;
  `}
`

const Card = styled.div`
  margin-bottom: 40px;

  & > h2 {
    font-family: ${fonts.header};
    margin: 0;
    font-size: 1.4rem;
    font-weight: normal;
  }
  & > p {
    margin-top: 7px;
    font-family: ${fonts.content};
    color: #555;
  }
`

export default function() {
  return (
    <Section>
      <Container>
        <Center>
          <Heading color={colors.blue}>สถานที่จัดงาน</Heading>
        </Center>
        <br />

        <Grid>
          <div>
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  width="100%"
                  height="500"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=clazy%20cafe&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                />
              </div>
            </div>
          </div>
          <div>
            <Card>
              <h2>สถานที่จัดกิจกรรม</h2>
              <p>
                Clazy Cafe, 899 Phahonyothin Rd, Khwaeng Samsen Nai, Phaya Thai,
                Bangkok 10400
              </p>
              <h2>การเดินทาง</h2>
              <p>
                <li>นั่ง BTS ลงสถานนีรถไฟฟ้าสนามเป้า</li>
                <li>ออกทางประตู 1</li>
                <li>เดินตรงไปเรื่อยๆจะถึงที่จัดงาน</li>
              </p>
            </Card>
            {/* <Card>
              <h2>การเดินทางด้วย BTS</h2>
              <p>
                Clazy Cafe, 899 Phahonyothin Rd, Khwaeng Samsen Nai, Phaya Thai, Bangkok 10400
              </p>
            </Card>
            <Card>
              <h2>การเดินทางด้วยรถโดยสารประจำทาง</h2>
              <p>
                Clazy Cafe, 899 Phahonyothin Rd, Khwaeng Samsen Nai, Phaya Thai, Bangkok 10400
              </p>
            </Card> */}
          </div>
        </Grid>
      </Container>
    </Section>
  )
}
