import { useContext } from "react";
import PreviewContainerContext from "../PreviewContainerContext";


const PreviewFooter = ({pageNumber}) => {
  const { width, totalPages } = useContext(PreviewContainerContext);

  const styles = {
    container: {
      width: `calc(0.98 * ${width})`,
      height: `calc(0.05 * ${width} / 1.4142857)`,
      backgroundColor: '#b4dee0',
      display: 'flex',
      justifyContent: 'space-between',
      paddingLeft: `calc(0.01 * ${width})`,
      paddingRight: `calc(0.01 * ${width})`,
      alignItems: "center"
    },
    surefront: {
      color: '#0FA3AE'
    }

  };

  return <div style={styles.container}>
    <div>This linesheet was generated in <span style={styles.surefront}>Surefront</span></div>
    <div>Page {pageNumber} / {totalPages}</div>
  </div>;
};

export default PreviewFooter;
