import { useContext } from "react";
import PreviewHeader from "./Header/PreviewHeader";
import PreviewContent from "./Content/PreviewContent";
import PreviewFooter from "./Footer/PreviewFooter";
import PreviewContainerContext from "./PreviewContainerContext";


const PreviewPage = (props) => {
  const { width } = useContext(PreviewContainerContext);

  const styles = {
    container: {
      width,
      height: `calc(${width}/1.4142857)`,
      backgroundColor: '#C3F6E7',
    }
  };

  return <div style={styles.container} ref={props.documentRef}>
    <PreviewHeader />
    <PreviewContent productList={props.pageblock} />
    <PreviewFooter pageNumber={[props.pageNumber]} />
  </div>;
};

export default PreviewPage;
