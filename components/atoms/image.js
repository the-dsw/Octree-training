export default ({ children, src, alt }) => (
  <div className="aImage">
    <img alt={alt ? alt : "No alt"} src={src} />
  </div>
);
