import { Icons } from "./icons";

export function Top() {
  return (
    <div className="top">
      <input type="text" placeholder="Search Class, Documents, Activities..." />
      <div className="top__right">
        <Icons.notices />
        <Icons.personBlack />
      </div>
    </div>
  );
}
