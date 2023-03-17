import {
  Stack,
  Text,
  Link,
  FontWeights,
  IStackTokens,
  IStackStyles,
  ITextStyles,
  Nav,
  INavLinkGroup,
  PrimaryButton,
} from "@fluentui/react";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Box from "../assets/Box.jpg";
import IMG_4164 from "../assets/IMG_4164.jpg";
import IMG_4166 from "../assets/IMG_4166.jpg";
import IMG_4167 from "../assets/IMG_4167.jpg";
import IMG_4168 from "../assets/IMG_4168.jpg";
import IMG_4169 from "../assets/IMG_4169.jpg";
import IMG_4170 from "../assets/IMG_4170.jpg";
import IMG_4171 from "../assets/IMG_4171.jpg";
import IMG_4172 from "../assets/IMG_4172.jpg";
import "./Home.css";

const Home = () => {
  const servicesText = () => {
    return `\xa0 SERVICES WE PROVIDE`;
  };
  return (
    <>
      <Stack verticalFill={true} className="home">
        <Stack verticalFill={true} style={{ paddingBottom: 60 }}>
          <Stack style={{ padding: 50 }}>
            <Stack horizontal={true}>
              <Stack.Item>
                <Text style={{ fontFamily: "ubuntu" }} variant="xxLargePlus">
                  YOUR FARMINGTON ELECTRICIAN
                </Text>
                <br></br>
                <Text variant="xLargePlus">
                  Since 2004, Trophy Ridge Electric has been the #1 electrical
                  service provider in the 4 Corners. Trophy Ridge Electric is a
                  family-owned business in Farmington, New Mexico. Specializing
                  in providing quality service
                </Text>
              </Stack.Item>
              <Stack.Item align="end" style={{ marginLeft: "auto" }}>
                <Carousel
                  infiniteLoop={true}
                  autoPlay={true}
                  width={400}
                  showThumbs={false}
                  dynamicHeight={false}
                >
                  <div>
                    <img src={Box} alt="Box" />
                  </div>
                  <div>
                    <img src={IMG_4164} alt="IMG_4164" />
                  </div>
                  <div>
                    <img
                      src={IMG_4166}
                      alt="IMG_4166"
                      style={{ maxHeight: "300px" }}
                    />
                  </div>
                  <div>
                    <img src={IMG_4167} alt="IMG_4167" />
                  </div>
                  <div>
                    <img src={IMG_4168} alt="IMG_4168" />
                  </div>
                  <div>
                    <img src={IMG_4169} alt="IMG_4169" />
                  </div>
                  <div>
                    <img src={IMG_4170} alt="IMG_4170" />
                  </div>
                  <div>
                    <img src={IMG_4171} alt="IMG_4171" />
                  </div>
                  <div>
                    <img src={IMG_4172} alt="IMG_4172" />
                  </div>
                </Carousel>
              </Stack.Item>
            </Stack>
            <Stack horizontal={true}>
              <Stack>
                <Stack.Item className="border-left">
                  <Text variant="xxLarge">{servicesText()}</Text>
                </Stack.Item>
                <Text variant="xLarge">
                  <br></br>• Residential
                </Text>
                <Text variant="xLarge"> • Hot Tub / Spa Hookups</Text>
                <Text variant="xLarge">• New Construction</Text>
                <Text variant="xLarge"> • Emergency Repairs</Text>
                <Text variant="xLarge"> • Additions & Remodels</Text>
                <Text variant="xLarge"> • Panel & Service Upgrades</Text>
              </Stack>
              <Stack style={{ paddingLeft: "1rem", paddingTop: 37 }}>
                <Text variant="xLarge">
                  <br></br>• Residential
                </Text>
                <Text variant="xLarge"> • Hot Tub / Spa Hookups</Text>
                <Text variant="xLarge">• New Construction</Text>
                <Text variant="xLarge"> • Emergency Repairs</Text>
                <Text variant="xLarge"> • Additions & Remodels</Text>
                <Text variant="xLarge"> • Panel & Service Upgrades</Text>
              </Stack>
            </Stack>
          </Stack>
          <Footer></Footer>
        </Stack>
      </Stack>
    </>
  );
};

export default Home;
