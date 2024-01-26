import {
  Button as ButtonLib,
  ButtonProps as ButtonPropsLib,
  // ConfigProvider,
} from "antd";

export type ButtonProps = {
  children?: React.ReactNode;
  type?: "link" | "text" | "default" | "primary" | "dashed";
} & ButtonPropsLib;

export const Button = ({ children, type = "primary", ...res }: ButtonProps) => {
  return (
    // <ConfigProvider
    //   theme={{
    //     components: {
    //       Button: {
    //         // colorPrimary: "#00b96b",
    //         algorithm: true, // Enable algorithm
    //       },
    //       Input: {
    //         // colorPrimary: "#eb2f96",
    //         algorithm: true, // Enable algorithm
    //       },
    //     },
    //   }}
    // >
    //   <ButtonLib {...res} type={type}>
    //     {children}
    //   </ButtonLib>
    // </ConfigProvider>

    <ButtonLib {...res} type={type}>
      {children}
    </ButtonLib>
  );
};
