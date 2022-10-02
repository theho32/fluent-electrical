import {
  Stack,
  Text,
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
import { Link, Route, useNavigate } from "react-router-dom";
import whiteLogoTransparent from "../assets/white-logo-transparent.png";
import "./Navigation.css";

const Navigation = () => {
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
        iconProps: { iconName: "People" },
      },
      {
        key: "commercial",
        text: "Commercial",
        iconProps: { iconName: "EMI" },
      },
      {
        key: "newConstruction",
        text: "New Construction",
        iconProps: { iconName: "Home" },
      },
    ],
  };
  return (
    <Stack
      horizontal={true}
      style={{
        backgroundColor: "black",
        top: 0,
        position: "sticky",
        zIndex: 1000,
      }}
      tokens={verticalGapStackTokens}
    >
      <Stack.Item style={{ maxWidth: "25%", maxHeight: 100 }}>
        <img src={whiteLogoTransparent} className="logo" />
      </Stack.Item>
      <Stack verticalAlign="center">
        <Text style={{ color: "white" }} variant="xLargePlus">
          Over 25 years of experience
        </Text>
      </Stack>
      <Stack
        horizontal={true}
        tokens={verticalGapStackTokens}
        horizontalAlign="center"
        verticalAlign="center"
        style={{
          marginLeft: "auto",
        }}
      >
        <Stack.Item>
          <PrimaryButton
            className="primary-button"
            onClick={(e) => {
              <Route path="/" />;
              navigate("/");
            }}
          >
            Home
          </PrimaryButton>
        </Stack.Item>
        <Stack.Item>
          <PrimaryButton
            className="primary-button"
            onClick={(e) => {
              navigate("/About");
            }}
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
        <Stack horizontalAlign="end">
          <Text variant="xLargePlus" style={{ color: "white" }}>
            <a href="tel://+505-325-9628">Call Us: 505-325-9628</a>
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Navigation;
