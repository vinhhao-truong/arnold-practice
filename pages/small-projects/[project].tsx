import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import React from "react";
import getFileList from "../../utils/getFileList";
import { v4 as uuid } from "uuid";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { AppContext } from "next/app";
import { capitalizeFirst } from "../../utils/formatString";

export const getServerSideProps = async (context: AppContext) => {
  const dirList = getFileList(["components", "page-components"]);

  if (
    typeof context.router.query.project === "string" &&
    !dirList.includes(capitalizeFirst(context.router.query.project))
  ) {
    return {
      redirect: {
        permanent: true,
        destination: "/",
      },
    };
  }

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

  //import react components
  const project = dirList.map((dir: string) => {
    const ThisProject =
      require(`../../components/page-components/${dir}`).default;

    return {
      component: <ThisProject key={uuid()} />,
      dir: dir.replace(".tsx", "").toLowerCase(),
    };
  });

  return (
    <div>
      {project.map(({ component, dir }) => {
        const isThisComponent = router.query.project === dir;

        return <div key={uuid()}>{isThisComponent ? component : ""}</div>;
      })}
    </div>
  );
};

export default SmallProject;
