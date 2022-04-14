import { NextPage } from "next";
import NavBar from "../components/NavBar";
import News from "../components/News";
import Projects from "../components/Projects";

const Index: NextPage = () => {
  return (
    <>
      <NavBar />
      <News />
      <Projects />
    </>
  )
}

export default Index