import { useContext } from "react";
import PreviewContainerContext from "../PreviewContainerContext";

const PreviewMetaInfo = () => {
  const { width } = useContext(PreviewContainerContext);

  const styles = {
    container: {
      width: 'calc(100% - 8px)',
      margin: '4px',
      height: `calc(0.1 * ${width}/1.4142857 - 8px)`,
      backgroundColor: '#e9f8f3',
    },
    titleContainer: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    contactContainer: {
      display: 'flex',
      flexDirection: 'column',
      padding: '0.3vw',
      gap: '0.1vw',
      alignItems: 'end'
    },
    title: {
      fontSize: `calc(20/12*${width}/70.166`,
      fontWeight: 700
    },
    subtitle: {
      display: 'flex',
      gap: '1vw'
      
    }
  };

  return <div style={styles.container} >
     <div style={styles.titleContainer}>
        <div style={styles.title}>Your Zone Domestic Spring Mod 2021</div>
        <div style={styles.contactContainer}>
          <div>JIA HOME</div>
          <div>alexernenpustch@jia.us</div>
        </div>
     </div>
     <hr/>
     <div style={styles.subtitle}>
       <div><b>Total Price:</b> $43,000</div>
       <div><b>Total Quantity:</b> 2,400</div>
       <div><b>Total Items:</b> 48</div>
     </div>
  </div>;
};

export default PreviewMetaInfo;
