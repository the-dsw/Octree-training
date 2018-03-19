export default ({ children, src, alt }) => (
  <div className="aImage">
    <img className="aImage_img" alt={alt ? alt : "No alt"} src={src} />
  </div>
);
