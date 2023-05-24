import PreviewPage from "./PreviewPage";
import PreviewContainerContext from "./PreviewContainerContext"


const PreviewContainer = (props) => {

  const styles = {
    wrapper: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      overflowY: "auto",
    },

    container: {
      width: '75vw',
      height: 'auto',
      backgroundColor: '#EFD9B3',
      fontSize: 'calc(9/12*75vw/70.166)',
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
  width: "75vw", orientation, totalPages: pageBlocks.length
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
