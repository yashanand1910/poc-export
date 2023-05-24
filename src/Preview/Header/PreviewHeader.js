import { useContext } from "react";
import PreviewMetaInfo from "./PreviewMetaInfo";
import PreviewContainerContext from "../PreviewContainerContext";

const PreviewPage = () => {
  const { width } = useContext(PreviewContainerContext);

  const styles = {
    container: {
      width,
      height: `calc(0.1 * ${width}/1.4142857)`,
      backgroundColor: '#aec16b',
      display: 'flex'
    },

    metaInfoContainer: {
      flexGrow: 1,
      height: `calc(0.1 * ${width}/1.4142857)`,
    },

    logoContainer: {
      flexShrink: 0,
      padding: '4px',
      height: `calc(0.1 * ${width}/1.4142857 - 8px)`,
      width: `calc(0.1 * ${width}/1.4142857 - 8px)`,
    },

    logo: {
      objectFit: 'contain',
      width: '100%',
      height: '100%'
    }

  };

  return <div style={styles.container}>
    <div style={styles.metaInfoContainer}>
      <PreviewMetaInfo />
    </div>

    <div style={styles.logoContainer}>
      <img src="/logo.png" alt="Company logo" style={styles.logo} />
    </div>
    
  </div>;
};

export default PreviewPage;
