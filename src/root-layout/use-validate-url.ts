import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const allowedPaths = ["/gantt-schedule-timeline-calendar", "/gantt-task"];
const allowedTypes = ["1", "2", "3"];

const useValidateRoute = () => {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!allowedPaths.includes(pathname)) {
      navigate("/gantt-schedule-timeline-calendar?type=1");
      return;
    }
    const searchType = new URLSearchParams(search).get("type");
    if (searchType === null || !allowedTypes.includes(searchType)) {
      navigate(`${pathname}?${new URLSearchParams({ type: "1" })}`);
    }
  }, [pathname, navigate, search]);
};

export default useValidateRoute;
