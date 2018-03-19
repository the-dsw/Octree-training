import Head from "../components/head";
import getData from "../hoc/getData";
import { Banner } from "../components/templates";
import "../styles/index.scss";

const Home = ({ data }) => {
  console.log({ data });
  return (
    <div>
      <Head title="Home" />
      <div className="pHome">
        <Banner {...data} />
      </div>
    </div>
  );
};

export default getData(Home);
