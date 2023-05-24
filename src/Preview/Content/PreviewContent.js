import { useContext } from "react";
import PreviewContainerContext from "../PreviewContainerContext";
import LinesheetItem from "./LinesheetItem";

const PreviewContent = (props) => {
  const { width, orientation } = useContext(PreviewContainerContext);

  const styles = {
    container: {
      width: `calc(0.98 * ${width})`,
      height: `calc(0.85 * ${width} / 1.4142857)`,
      display: 'grid',
      gridTemplateRows: `repeat(${orientation[0]}, 1fr)`,
      gridTemplateColumns: `repeat(${orientation[1]}, 1fr)`,
      columnGap: 15,
      rowGap: 15,
      justifyItems: "center",
      paddingLeft: `calc(0.01 * ${width})`,
      paddingRight: `calc(0.01 * ${width})`
    },

  };

  return <div style={styles.container}>
    {props.productList.map(product => <LinesheetItem />)}
  </div>;
};

export default PreviewContent;
