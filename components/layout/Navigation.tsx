import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import Link from "next/link";
import React, { useState } from "react";
import { v4 } from "uuid";
import NavInterface from "../../interfaces/NavInterface";
import ReactProps from "../../interfaces/ReactProps";
import fetchApi from "../../utils/fetchApi";
import { getClasses, getStyle } from "../../utils/getProps";

const Navigation: React.FC<ReactProps> = ({ className, style }) => {
  const { data } = useQuery(["navigation"], fetchApi("/api/navigation"));

  console.log(data);

  const [hoverNavItem, setHoverNavItem] = useState<string | null>(null);

  return data ? (
    <div
      className={`${getClasses(
        className
      )} flex justify-between items-center px-4 bg-violet-400 text-white`}
      style={getStyle(style)}
    >
      {/* LEFT */}
      <div className="">Arno. Practice</div>
      {/* RIGHT */}
      <div className="flex items-center h-full justify-evenly">
        <div className="relative">
          <div
            onMouseEnter={() => setHoverNavItem("small-projects")}
            onMouseLeave={() => {
              setHoverNavItem(null);
            }}
            className="px-2 py-6 cursor-pointer"
          >
            Small projects
          </div>
          {hoverNavItem === "small-projects" && (
            <div
              onMouseEnter={() => setHoverNavItem("small-projects")}
              onMouseLeave={() => setHoverNavItem(null)}
              className="absolute right-0 flex flex-col p-1 text-white border-4 w-36 top-full bg-violet-300"
            >
              {data.smallProjects.map(({ title, href }: NavInterface) => {
                return (
                  <Link
                    href={href}
                    key={v4()}
                    className="w-full px-1 py-3 text-right rounded hover:bg-violet-500"
                  >
                    {title}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Navigation;
