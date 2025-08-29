import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Import your resume PDF file
import resumePDF from '../assets/resume.pdf'; 

// Import the CSS for react-pdf to ensure proper rendering
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configure the PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const ResumeModal = ({ closeModal, darkMode }) => {
  const [numPages, setNumPages] = useState(null);

  // This function is called when the PDF is successfully loaded
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className={`modal ${darkMode ? 'dark' : ''}`}>
      <div className="modal-content" style={{ overflowY: 'auto', maxHeight: '90vh' }}>
        <span className={`close ${darkMode ? 'dark' : ''}`} onClick={closeModal}>&times;</span>
        <Document
          file={resumePDF}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {/* Loop through all pages and render each one */}
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderAnnotationLayer={false} // Optionally disable annotation layer
              renderTextLayer={false}        // Optionally disable text layer for faster rendering
            />
          ))}
        </Document>
      </div>
    </div>
  );
};

export default ResumeModal;