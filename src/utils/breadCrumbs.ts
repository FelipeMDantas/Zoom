import { NavigateFunction } from "react-router-dom";

export const getCreateMeetingBreadCrumbs = (navigate: NavigateFunction) => [
  {
    text: "Dashboard",
    href: "#",
    onClick: () => {
      navigate("/");
    },
  },
  {
    text: "Create Meeting",
  },
];
