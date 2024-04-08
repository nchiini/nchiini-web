import React from "react";

import Text from "./index";

const ProjectTitle = ({
  text,
  uppercase,
  className,
  variant
}: {
  text: string;
  uppercase?: boolean;
  className?: string;
  variant?: any
}) => {
  return (
    <Text
      color="primary"
      className={`${
        uppercase ? "uppercase" : "capitalize"
      }  !mb-2 ${className}`}
      text={text}
      variant={variant}
    />
  );
};

export default ProjectTitle;
