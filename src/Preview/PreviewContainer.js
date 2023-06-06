import PreviewPage from "./PreviewPage";
import PreviewContainerContext from "./PreviewContainerContext"


const PreviewContainer = (props) => {

  const styles = {
    wrapper: {
      flex: "1",
      minWidth: "1128px",
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      overflowY: "auto",
      paddingLeft: "20px",
      paddingRight: "20px"
    },

    container: {
      width: 'max(75vw, calc(1128px - 40px))',
      height: 'auto',
      backgroundColor: '#EFD9B3',
      fontSize: 'calc(9/12*max(75vw, 1128px - 40px)/70.166)',
      fontFamily: "'Roboto', sans-serif"
    }
  };

  const {productList, orientation} = props.data
  const blocksPerPage = orientation[0] * orientation[1]
  const numPages = Math.ceil(productList.length / blocksPerPage)

  const pageBlocks = [];
  for (let i=0; i<numPages; i++) {
    pageBlocks.push(
      productList.slice(i*blocksPerPage, (i+1)*blocksPerPage)
    )
  }

const previewContext = {
  width: "max(75vw, 1128px - 40px)", orientation, totalPages: pageBlocks.length
}

  return <PreviewContainerContext.Provider value={previewContext}>
    <div style={styles.wrapper}>
      <div style={styles.container} ref={props.documentRef}>
        { pageBlocks.map((pageBlock, index) => <PreviewPage pageblock={pageBlock} pageNumber={index+1} />) }
      </div>
    </div>
  </PreviewContainerContext.Provider>;
};

export default PreviewContainer;
