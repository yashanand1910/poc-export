import { useRef, useState } from 'react';
import jsPDF from 'jspdf';
import Document from './Document';
import Toolbar from './Toolbar';

function App() {
  const [documentSettings] = useState({
    count: 10
  });

  const documentRef = useRef(null);

  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      format: 'a4',
      unit: 'px',
    });

    // Adding the fonts.
    doc.setFont('Inter-Regular', 'normal');

    doc.html(documentRef.current, {
      callback(doc) {
        doc.save('document');
      },
    });
  };

  const styles = {
    page: {
      display: 'flex',
      flexDirection: 'row'
    }
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
