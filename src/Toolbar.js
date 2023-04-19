const Toolbar = (props) => {
  const styles = {
    toolbar: {
      height: "auto",
      backgroundColor: "white",
      boxShadow: "0 6px 40px rgba(0,0,0,0.2)",
      padding: "1rem",
    },

    button: {
      backgroundColor: "DodgerBlue",
      border: "none",
      color: "white",
      padding: "12px 30px",
      cursor: "pointer",
      fontSize: "20px",
    },
  };
  return (
    <div style={styles.toolbar}>
      <button style={styles.button} onClick={props.genPDF}>
        Export PDF
      </button>
    </div>
  );
};

export default Toolbar;
