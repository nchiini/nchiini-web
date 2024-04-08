import React from "react";


import { ITextProps } from "./interface";

const Text = ({
  text,
  style = {},
  className,
  href,
  variant = "normal",
  onClick,
  type = "normal",
  isGradient = false,
  gradientColors = { from: "secondary", to: "primary" },
  color = "white",
  bgColor = "transparent",
  bold = false,
  italic = false,
  children,
}: ITextProps) => {
  // const commonStyles = {
  //   color: Colors[color],
  //   background: Colors[bgColor],
  //   fontWeight: bold ? "bold" : "normal",
  //   fontStyle: italic ? "italic" : "normal",
  // };

  // const gradientStyle = isGradient
  //   ? {
  //       background: `linear-gradient(119deg, ${
  //         Colors[gradientColors.from]
  //       } 0%, ${Colors[gradientColors.to]} 100%)`,
  //       MozBackground: `linear-gradient(119deg, ${
  //         Colors[gradientColors.from]
  //       } 0%, ${Colors[gradientColors.to]} 100%)`,
  //       WebkitBackground: `linear-gradient(119deg, ${
  //         Colors[gradientColors.from]
  //       } 0%, ${Colors[gradientColors.to]} 100%)`,
  //       backgroundClip: "text",
  //       WebkitBackgroundClip: "text",
  //       MozBackgroundClip: "text",
  //       WebkitTextFillColor: "transparent",
  //       MozTextFillColor: "transparent",
  //     }
  //   : {};

  const getVariantFont = () => {
    switch (variant) {
      case "normal":
        return "s1000:text-lg";
      case "large":
        return "tablet:mt-0 text-center tablet:text-start !text-base sm:!text-lg md:!text-xl xl:!text-2xl ";
      case "xLarge":
        return "text-3xl";
      case "xxLarge":
        return "text-5xl";
      case "mega":
        return "text-center tablet:text-start leading-10 !font-bold text-4xl md:text-5xl lg:text-4xl xl:text-6xl 2xl:text-7xl";
      case "small":
        return "text-sm";
      case "xsmall":
        return "text-xs";
      default:
        return "text-xl";
    }
  };

  const sharedStyles = {
    style: {
      ...style,
      // ...commonStyles,
      // ...gradientStyle,
    },
    className: `font-text ${
      type === "link" ? "underline text-primary" : ""
    } ${getVariantFont()} ${className}`,
    onClick,
  };

  switch (type) {
    case "normal":
      return <p {...sharedStyles}>{text}</p>;
    case "h1":
      return <h1 {...sharedStyles}>{text}</h1>;
    case "h2":
      return <h2 {...sharedStyles}>{text}</h2>;
    case "h3":
      return <h3 {...sharedStyles}>{text}</h3>;
    case "h4":
      return <h4 {...sharedStyles}>{text}</h4>;
    case "h5":
      return <h5 {...sharedStyles}>{text}</h5>;
    case "h6":
      return <h6 {...sharedStyles}>{text}</h6>;
    case "link":
      return (
        <a {...sharedStyles} href={href} rel="noreferrer" target="_blank">
          {text}
          {children}
        </a>
      );
    default:
      return (
        <p {...sharedStyles}>
          {text}
          {children}
        </p>
      );
  }
};

export default Text;
