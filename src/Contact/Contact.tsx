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
const Contact = () => {
  const contactText = () => {
    return `\xa0 CONTACT US`;
  };
  return (
    <>
      <Stack verticalFill={true}>
        <Stack verticalFill={true} style={{ paddingBottom: 60 }}>
          <Stack style={{ padding: 50 }}>
            <Stack.Item className="border-left">
              <Text variant="xxLarge">{contactText()}</Text>
            </Stack.Item>
            <Text variant="xLarge">
              <a style={{ color: "black" }} href="tel://+505-325-9628">
                Office: 505-325-9628
              </a>
            </Text>
            <Text variant="xLarge">
              <a style={{ color: "black" }} href="tel://+505-793-6806">
                Cell: 505-793-6806
              </a>
            </Text>
            <Text style={{ color: "black" }} variant="xLarge">
              Email: ron.trophyridge@gmail.com
            </Text>
            <Text style={{ color: "black" }} variant="xLarge">
              Address: PO Box 6402 Farmington, NM 87499
            </Text>
          </Stack>
        </Stack>
        <Footer></Footer>
      </Stack>
    </>
  );
};

export default Contact;
