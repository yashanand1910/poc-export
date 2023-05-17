const Document = (props) => {
  const styles = {
    document: {
      padding: "20pt",
      backgroundColor: "#EFEFEF",
      boxShadow: "0 6px 40px rgba(0,0,0,0.2)",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      with: "auto",
      aspectRatio: props.settings.aspectRatio,
    },

    item: {
      fontSize: "1vw",
      margin: "10pt",
      width: "auto",

      img: {
        width: "100%",
        pageBreakBefore: "always"
      },
    },
  };

  const item = () => {
    // NOTE: jsPDF is likely redownloading images so it's taking time.
    return (
      <div style={styles.item}>
        <img style={styles.item.img} alt="" src="one.jpg" />
        <h4>Subtitle One</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    );
  };

  const items = () => {
    const items = [];
    for (let i = 0; i < props.settings.count; i++) {
      items.push(item());
    }
    return items;
  };

  return <div style={styles.document} ref={props.documentRef}>{items()}</div>;
};

export default Document;
