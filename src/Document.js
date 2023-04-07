const Document = (props) => {
  const styles = {
    document: {
      marginLeft: '5rem',
      marginRight: '5rem',
      padding: '1rem',
      backgroundColor: 'white',
      boxShadow: "0 6px 40px rgba(0,0,0,0.2)",
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
    },

    item: {
    }
  };

  const item = () => {
    // NOTE: jsPDF is likely redownloading images so it's taking time.
    return (<div style={styles.item}>
      <img alt="" style={styles.fullWidth} src="https://picsum.photos/200" />
      <h4 style={styles.marginb0}>Subtitle One</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua.
      </p>
    </div>);
  }

  const items = () => {
    const items = [];
    for (let i = 0; i < props.settings.count; i++) {
      items.push(item());
    }
    return items;
  }

  return (
    <div style={styles.document}>
      {items()}
    </div>
  );
};

export default Document;
