import { Image } from "../atoms";
export default ({ children, image }) => {
  return (
    <div className="oHero">
      <Image src={image} alt={children} />
    </div>
  );
};
