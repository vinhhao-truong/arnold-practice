import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React from "react";
import getFileList from "../../utils/getFileList";

export const getServerSideProps: GetServerSideProps<{
  project: string;
}> = async (context) => {
  //Get a list of
  const dirList = getFileList([
    "components",
    "page-components",
    "small-projects",
  ]);

  const thisProject = dirList.find(
    (dir) => dir.replace(".tsx", "").toLowerCase() === context.query.project
  );

  return {
    props: {
      project: thisProject ? thisProject : "",
    },
    notFound: !thisProject,
  };
};

const SmallProject = ({
  project,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const Project =
    require(`../../components/page-components/small-projects/${project}`).default;

  return <Project />;
};

export default SmallProject;
