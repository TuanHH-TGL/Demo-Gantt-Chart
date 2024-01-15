import { Button as RadixButton } from "@radix-ui/themes";

type ButtonProps = React.ComponentProps<typeof RadixButton>;

const Button = (props: ButtonProps) => {
  return <RadixButton className="cursor-pointer" {...props} />;
};

export default Button;
