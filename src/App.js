import { useRef, useState } from "react";
import jsPDF from "jspdf";
import Document from "./Document";
import Toolbar from "./Toolbar";

function App() {
  const page = {
    a4: 1 / 1.414,
  };

  const [documentSettings] = useState({
    count: 9,
    aspectRatio: page.a4,
  });

  const documentRef = useRef(null);

  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      unit: "cm",
    });

    // Adding the fonts.
    doc.setFont("Inter-Regular", "normal");

    doc.html(documentRef.current, {
      callback(doc) {
        doc.save("document");
      },
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
      <div ref={documentRef}>
        <Document settings={documentSettings} />
      </div>
    </div>
  );
}

export default App;
