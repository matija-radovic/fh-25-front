import Slider from "../../components/-shared/Section/slider/Slider";
import "./Test.scss";

/**
 * This component should be used to test your components, shared components or pages.
 * Inside of the `Test.scss` are predefined styles just delete the `/*` to apply them
 */
const Test = () => {
  return (
    <>
      <Slider
        values={[
          "https://picsum.photos/id/10/367/367",
          "https://picsum.photos/id/11/367/367",
          "https://picsum.photos/id/12/367/367",
          "https://picsum.photos/id/13/367/367",
          "https://picsum.photos/id/14/367/367",
          "https://picsum.photos/id/15/367/367"
        ]}
      ></Slider>
    </>
  );
};

export default Test;
