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
  IContextualMenuProps,
  DefaultButton,
} from "@fluentui/react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";
import whiteLogoTransparent from "../assets/white-logo-transparent.png";

const Footer = () => {
  const navigate = useNavigate();
  const verticalGapStackTokens: IStackTokens = {
    childrenGap: 10,
    padding: 10,
  };
  const menuProps: IContextualMenuProps = {
    items: [
      {
        key: "residental",
        text: "Residental",
        iconProps: { iconName: "Mail" },
      },
      {
        key: "commercial",
        text: "Commercial",
        iconProps: { iconName: "Calendar" },
      },
      {
        key: "newConstruction",
        text: "New Construction",
        iconProps: { iconName: "Calendar" },
      },
    ],
  };
  return (
    <>
      <Stack
        horizontal={true}
        style={{
          backgroundColor: "black",
          left: 0,
          bottom: 0,
          right: 0,
        }}
      >
        <Stack.Item style={{ maxWidth: "25%", maxHeight: "25%" }} align="start">
          <img src={whiteLogoTransparent} className="logo" />
        </Stack.Item>
        <Stack
          horizontal={true}
          tokens={verticalGapStackTokens}
          horizontalAlign="center"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <Stack tokens={verticalGapStackTokens}>
            <Stack.Item>
              <PrimaryButton
                onClick={(e) => {
                  navigate("/");
                }}
                className="primary-button"
              >
                Home
              </PrimaryButton>
            </Stack.Item>
            <Stack.Item>
              <PrimaryButton
                onClick={(e) => {
                  navigate("/About");
                }}
                className="primary-button"
              >
                About Us
              </PrimaryButton>
            </Stack.Item>
            <Stack.Item>
              <PrimaryButton
                className="primary-button"
                text="Services"
                splitButtonAriaLabel="See 2 options"
                aria-roledescription="split button"
                split={true}
                menuProps={menuProps}
              ></PrimaryButton>
            </Stack.Item>
            <Stack.Item>
              <PrimaryButton
                className="primary-button"
                onClick={(e) => {
                  navigate("/Contact");
                }}
              >
                Contact Us
              </PrimaryButton>
            </Stack.Item>
          </Stack>
          <Stack>
            <Stack.Item>
              <Stack>
                <Text variant="xLarge" style={{ color: "white" }}>
                  CONTACT
                </Text>
                <Text variant="xLarge" style={{ color: "white" }}>
                  <a href="tel://+505-325-9628">Office: 505-325-9628</a>
                </Text>
                <Text variant="xLarge" style={{ color: "white" }}>
                  <a href="tel://+505-793-6806">Cell: 505-793-6806</a>
                </Text>
                <Text variant="xLarge" style={{ color: "white" }}>
                  Email: ron.trophyridge@gmail.com
                </Text>
                <Text variant="xLarge" style={{ color: "white" }}>
                  Address:
                </Text>
                <Text variant="xLarge" style={{ color: "white" }}>
                  PO Box 6402 Farmington, NM 87499
                </Text>
              </Stack>
            </Stack.Item>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Footer;
