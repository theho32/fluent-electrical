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
import firstPicture from "../assets/1.jpg";
import secondPicture from "../assets/2.jpg";
import cooper from "../assets/cooper.jpg";
import cooperAnnie from "../assets/cooperAnnie.jpg";
import "./Home.css";

const Home = () => {
  const servicesText = () => {
    return `\xa0 SERVICES WE PROVIDE`;
  };
  return (
    <>
      <Stack verticalFill={true} className="home">
        <Navigation></Navigation>
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
                >
                  <div>
                    <img src={cooper} alt="cooper" />
                  </div>
                  <div>
                    <img src={cooperAnnie} alt="cooperAnnie" />
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
