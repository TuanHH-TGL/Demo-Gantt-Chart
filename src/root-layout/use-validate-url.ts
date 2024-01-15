import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useValidateRoute = () => {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      pathname === "/" ||
      (pathname !== "/gantt-schedule-timeline-calendar" &&
        pathname !== "/gantt-task")
    ) {
      navigate("/gantt-schedule-timeline-calendar?type=1");
      return;
    }
    const searchType = new URLSearchParams(search).get("type");
    if (searchType === null || (searchType !== "1" && searchType !== "2")) {
      navigate(`${pathname}?${new URLSearchParams({ type: "1" })}`);
    }
  }, [pathname, navigate, search]);
};

export default useValidateRoute;
