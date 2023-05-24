import { useRef, useState } from "react";
import jsPDF from "jspdf";
import PreviewContainer from "./Preview/PreviewContainer";
import Toolbar from "./Toolbar";

function App() {

  const [data] = useState({
    productList: [
      {name: "Abc"},
      {name: "Abc"},
      {name: "Abc"},
      {name: "Abc"},
      {name: "Abc"},
      {name: "Abc"},
      {name: "Abc"},
      {name: "Abc"},
      {name: "Abc"},
      {name: "Abc"},
      {name: "Abc"},
      {name: "Abc"},
      {name: "Abc"},
      {name: "Abc"},
      {name: "Abc"},
      {name: "Abc"},
      {name: "Abc"},
      {name: "Abc"},
      {name: "Abc"},
      {name: "Abc"},
      {name: "Abc"},
      {name: "Abc"},
      {name: "Abc"},
      {name: "Abc"},
      {name: "Abc"},
      {name: "Abc"},
      {name: "Abc"},
      {name: "Abc"},
    ],
    orientation: [2, 3]
  });

  const documentRef = useRef(null);

  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      orientation: "l",
      unit: "cm",
      format: "a4"
    });

    // Adding the fonts.
    doc.setFont("Roboto", "normal");
    doc.html(documentRef.current, {
      callback: function (doc) {
        doc.save("document");
      },
      autoPaging: 'text',
      width: 29.7,
      windowWidth: Math.floor((window.innerWidth * 75 / 100))
    });
  };

  const styles = {
    page: {
      display: "grid",
      gridTemplateColumns: "250px auto",
      height: "100vh"
    },
  };

  return (
    <div style={styles.page}>
      <Toolbar genPDF={handleGeneratePdf} />
      <PreviewContainer data={data} documentRef={documentRef} />
    </div>
  );
}

export default App;
