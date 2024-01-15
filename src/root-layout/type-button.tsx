import Button from "@/components/button";
import { Link, useLocation } from "react-router-dom";

type TypeButtonProps = {
  activeType: string;
  label: string;
};

const TypeButton = ({ activeType, label }: TypeButtonProps) => {
  const { pathname, search } = useLocation();
  const searchType = new URLSearchParams(search).get("type");
  const isActive = activeType === searchType;

  return (
    <Link to={`${pathname}?${new URLSearchParams({ type: activeType })}`}>
      <Button disabled={isActive}>{label}</Button>
    </Link>
  );
};

export default TypeButton;
