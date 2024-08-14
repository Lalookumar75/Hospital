import jsPDF from 'jspdf';
import React from 'react';

const Report = ({ reportData }) => {
    const generatePDF = () => {
        const doc = new jsPDF();
        doc.text("Patient Checkup Report", 20, 20);
        // Iterate over reportData to add more content
        doc.save("report.pdf");
    };

    return (
        <div>
            <button onClick={generatePDF}>Download Report</button>
        </div>
    );
};

export default Report;

