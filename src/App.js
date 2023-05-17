import { useRef, useState } from "react";
import jsPDF from "jspdf";
import Document from "./Document";
import Toolbar from "./Toolbar";

function App() {
  const page = {
    a4: 1 / 1.414,
  };

  const [documentSettings] = useState({
    count: 19,
    aspectRatio: page.a4,
  });

  const documentRef = useRef(null);

  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      orientation: "l",
      unit: "px",
      format: "a4"
    });

    // Adding the fonts.
    doc.setFont("Roboto", "normal");

    doc.html(documentRef.current, {
      callback: function (doc) {
        doc.save("document");
      },
      autoPaging: 'text',
      width: 630,
      windowWidth: 2000
    });
  };

  const styles = {
    page: {
      display: "grid",
      gridTemplateColumns: "250px auto",
    },
  };

  return (
    <div style={styles.page}>
      <Toolbar genPDF={handleGeneratePdf} />
      <div>
        <Document settings={documentSettings} documentRef={documentRef} />
      </div>
    </div>
  );
}

export default App;
