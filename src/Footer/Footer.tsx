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

const Footer = () => {
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
          marginTop: "calc(40% - 60px)",
        }}
        tokens={verticalGapStackTokens}
        horizontalAlign="center"
      >
        <Stack tokens={verticalGapStackTokens}>
          <Stack.Item>
            <PrimaryButton>Home</PrimaryButton>
          </Stack.Item>
          <Stack.Item>
            <PrimaryButton>About Us</PrimaryButton>
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
            <PrimaryButton>Contact Us</PrimaryButton>
          </Stack.Item>
        </Stack>
        <Stack>
          <Stack.Item>
            <Stack>
              <Text variant="xLarge" style={{ color: "white" }}>
                CONTACT
              </Text>
              <Text variant="xLarge" style={{ color: "white" }}>
                Call Us: 123-456-7891
              </Text>
              <Text variant="xLarge" style={{ color: "white" }}>
                Address
              </Text>
              <Text variant="xLarge" style={{ color: "white" }}>
                12314123123123123123
              </Text>
            </Stack>
          </Stack.Item>
        </Stack>
      </Stack>
    </>
  );
};

export default Footer;
