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
import { Link, useNavigate } from "react-router-dom";

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
    <Stack
      horizontal={true}
      style={{
        backgroundColor: "black",
        top: 0,
        position: "sticky",
        zIndex: 1000,
      }}
      tokens={verticalGapStackTokens}
      horizontalAlign="center"
    >
      <Stack.Item>
        <PrimaryButton
          onClick={(e) => {
            navigate("/");
          }}
        >
          Home
        </PrimaryButton>
      </Stack.Item>
      <Stack.Item>
        <PrimaryButton
          onClick={(e) => {
            navigate("/About");
          }}
        >
          About Us
        </PrimaryButton>
      </Stack.Item>
      <Stack.Item>
        <PrimaryButton
          text="Services"
          splitButtonAriaLabel="See 2 options"
          aria-roledescription="split button"
          split={true}
          menuProps={menuProps}
        ></PrimaryButton>
      </Stack.Item>
      <Stack.Item>
        <PrimaryButton
          onClick={(e) => {
            navigate("/Contact");
          }}
        >
          Contact Us
        </PrimaryButton>
      </Stack.Item>
      <Stack.Item>
        <Text variant="xLarge" style={{ color: "white" }}>
          Call Us: 123-456-7891
        </Text>
      </Stack.Item>
    </Stack>
  );
};

export default Navigation;
