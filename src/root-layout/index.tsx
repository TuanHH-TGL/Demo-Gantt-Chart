import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { twMerge } from "tailwind-merge";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LinkButton from "./link-button";

const RootLayout = () => {
  // Get current path name
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/") {
      navigate("/gantt-schedule-timeline-calendar");
    }
  }, [pathname, navigate]);

  return (
    <Theme>
      <div className="w-full h-[100vh] flex p-5 gap-5">
        <div
          className={twMerge(
            "flex-[17] h-full",
            "border-[1px] border-[gray] relative"
          )}
        >
          <Outlet />
        </div>
        <div
          className={twMerge(
            "flex-[3] flex flex-col h-full items-start justify-center gap-5",
            "border-[1px] border-[gray] p-5"
          )}
        >
          <LinkButton
            activePath="/gantt-schedule-timeline-calendar"
            label="Gantt Schedule Timeline Calendar"
          />
          <LinkButton activePath="/gantt-task" label="Gantt Task" />
        </div>
      </div>
    </Theme>
  );
};

export default RootLayout;
