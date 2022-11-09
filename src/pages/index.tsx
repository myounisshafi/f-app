// @ts-nocheck
import type { NextPage } from "next";
import Home from "../components/Home/Index";

const IndexPage: NextPage = (props) => {
  return (
    <>
      <Home state={props} />
    </>
  );
};

export default IndexPage;
