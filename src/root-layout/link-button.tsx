import Button from "@/components/button";
import { Link, useLocation } from "react-router-dom";

type LinkButtonProps = {
  activePath: string;
  label: string;
};

const LinkButton = ({ activePath, label }: LinkButtonProps) => {
  const { pathname } = useLocation();
  const isActive = pathname === activePath;

  return (
    <Link to={activePath}>
      <Button disabled={isActive}>{label}</Button>
    </Link>
  );
};

export default LinkButton;
