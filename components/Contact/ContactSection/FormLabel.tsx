//Components
import * as LabelPrimitive from "@radix-ui/react-label";

const FormLabel = ({
  children,
  htmlFor,
}: {
  children: React.ReactNode;
  htmlFor?: string;
}) => {
  return (
    <LabelPrimitive.Root
      role="none"
      htmlFor={htmlFor}
      className="text-semiMedium font-extrabold text-secondaryBg select-none mb-[2px]"
    >
      {children}
    </LabelPrimitive.Root>
  );
};

export { FormLabel };
