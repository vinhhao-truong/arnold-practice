import { InferGetServerSidePropsType } from "next";
import React from "react";
import getFileList from "../../utils/getFileList";
import { v4 as uuid } from "uuid";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { AppContext } from "next/app";
import { capitalizeFirst } from "../../utils/formatString";
import Error from "next/error";

export const getServerSideProps = async (context: AppContext) => {
  const dirList = getFileList([
    "components",
    "page-components",
    "small-projects",
  ]);

  return {
    props: {
      dirList: dirList,
    },
  };
};

const SmallProject = ({
  dirList,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();

  const ThisProject: React.FC = () => {
    //Find the correct file
    const thisProject = dirList.find(
      (dir) => dir.replace(".tsx", "").toLowerCase() === router.query.project
    );
    //found file
    if (thisProject) {
      const Project =
        require(`../../components/page-components/${thisProject}`).default;
      return <Project />;
    }
    //no file
    return <Error statusCode={404} />;
  };

  return <>{router.query.project && <ThisProject />}</>;
};

export default SmallProject;
