import Link from "next/link";
import React from "react";

function DashboardNav() {
  const links = [
    {
      name: "Data Management",
      link: "/dashboard/data-management",
    },
    {
      name: "Notifications",
      link: "/dashboard/notifications",
    },
    {
      name: "Access Control",
      link: "/dashboard/access-control",
    },
    {
      name: "Saved Reports",
      link: "/dashboard/saved-reports",
    },
    {
      name: "Schedule Reports",
      link: "/dashboard/schedule-reports",
    },
    {
      name: "User Reports",
      link: "/dashboard/user-reports",
    },
  ];
  return (
    <div className="px-8 lg:px-28 h-[80px] flex items-center justify-between border-y">
      <div className="flex items-center gap-x-4">
        {links.map((_link, _index) => (
          <Link
            href={_link.link}
            key={_index}
            className="text-base text-secondary hover:text-primary font-semibold"
          >
            {_link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DashboardNav;
