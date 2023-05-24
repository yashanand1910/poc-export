const LinesheetItemDescription = (props) => {
  const styles = {
    bold: {
      fontWeight: 'bold'
    },
    attributeContainer: {
      display: 'grid',
      gridTemplateColumns: '1fr 3fr',
      paddingTop: '1vw',
      paddingBottom: '1vw',
    }

  };

  return <div>
    <div>
    JA12345-45 &gt; <span style={styles.bold}>JA76543-21</span>
    </div>
    <div style={styles.attributeContainer}>
      <div>Description</div>
      <div>Single Collapsible Fabric Hamper with Lid and Front Handles, The material: T/C fabric withe PE coating</div>
      <div>Unit Price</div>
      <div>$16.3900</div>
      <div>Brand</div>
      <div>ABC Designs</div>
      <div>Color</div>
      <div>Black/White</div>
    </div>
  </div>;
};

export default LinesheetItemDescription;
