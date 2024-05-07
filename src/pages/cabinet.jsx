import { Outlet } from "react-router-dom";
import { Nav, Top } from "../components";
export function Cabinet() {
  return (
    <div className="cabinet">
      <Nav />
      <div className="cabinet__right">
        <Top />
        <div className="scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
