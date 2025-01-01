// components/ExportOptions.js
import { saveAs } from 'file-saver';
import XLSX from 'xlsx';
import jsPDF from 'jspdf';

const ExportOptions = ({ articles }) => {
    const exportToCSV = () => {
        const ws = XLSX.utils.json_to_sheet(articles);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Articles");
        XLSX.writeFile(wb, "articles.csv");
    };

    const exportToPDF = () => {
        const doc = new jsPDF();
        doc.text("Articles Report", 10, 10);
        articles.forEach((article, index) => {
            doc.text(`${index + 1}. ${article.title} - ${article.author}`, 10, 20 + (index * 10));
        });
        doc.save("articles.pdf");
    };

    return (
        <div>
            <h2>Export Options</h2>
            <button onClick={exportToCSV}>Export to CSV</button>
            <button onClick={exportToPDF}>Export to PDF</button>
        </div>
    );
};

export default ExportOptions;