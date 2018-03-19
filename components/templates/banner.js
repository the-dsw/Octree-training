import { Hero } from "../organisms";

export default ({ children, ...data }) => {
  return (
    <div className="tBanner">
      <Hero image={data.banner.image}>{data.banner.alt}</Hero>
    </div>
  );
};
