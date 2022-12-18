// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import NavInterface from "../../interfaces/NavInterface";
import getFileList from "../../utils/getFileList";

type Data = {};

export default function handleNavigation(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    const smallProjectList = getFileList([
      "components",
      "page-components",
      "small-projects",
    ]);
    const formattedProjectList: NavInterface[] = smallProjectList.map((dir) => {
      const name = dir.replace(".tsx", "");

      return {
        title: name,
        href: `/small-projects/${name.toLowerCase()}`,
      };
    });

    res.status(200).send({
      smallProjects: formattedProjectList,
    });
  }
}
