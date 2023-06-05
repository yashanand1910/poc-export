import LinesheetItemDescription from "./LinesheetItemDescription";

const LinesheetItem = (props) => {
  const styles = {
    container: {
      width: "100%",
      height: "100%",
      background: '#98e9d1',
      display: 'flex',
      flexDirection: 'column',
      gap: "1vw",
      overflow: "clip"
    },
    imageContainer: {
      flexShrink: 1,
      flexGrow: 1,
      alignSelf: "center",
      maxHeight: "50%"
    },
    attributeContainer: {
      flexShrink: 0,
      flexGrow: 0,
      alignSelf: "center"
    },
    image: {
      objectFit: 'contain',
      height: '100%',
      width: '100%',
    }

  };

  return <div style={styles.container}>
    <div style={styles.imageContainer}>
      <img src="/product_image.png" alt="Company logo" style={styles.image} />
    </div>
    <div style={styles.attributeContainer}>
      <LinesheetItemDescription />
    </div>
  </div>;
};

export default LinesheetItem;
