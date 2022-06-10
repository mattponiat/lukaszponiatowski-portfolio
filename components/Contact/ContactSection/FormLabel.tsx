//Styled-components
import styled from "styled-components";
//Radix-ui
import * as LabelPrimitive from "@radix-ui/react-label";

const FormLabel = ({
  children,
  htmlFor,
}: {
  children: React.ReactNode;
  htmlFor?: string;
}) => {
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
};

const StyledLabel = styled(LabelPrimitive.Root)`
  font-size: ${({ theme }) => theme.font.size.semiMedium};
  font-weight: 800;
  color: ${({ theme }) => theme.colors.secondaryBg};
  user-select: none;
  margin-bottom: 2px;
  letter-spacing: 0.4px;
`;

export { FormLabel };
