import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { twMerge } from "tailwind-merge";
import { Outlet } from "react-router-dom";
import ControlSide from "./control-side";
import useValidateRoute from "./use-validate-url";

const RootLayout = () => {
  useValidateRoute();

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
        <ControlSide />
      </div>
    </Theme>
  );
};

export default RootLayout;
