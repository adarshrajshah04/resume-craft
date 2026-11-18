
import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import ResumeEditor from "./ResumeEditor";
import resumeToHTML from "./utils/resumeToHTML";

import html2pdf from "html2pdf.js";

const EditMain = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const resumeData = location.state?.resumeData;

  const initialContent = useMemo(() => {
    if (!resumeData) return "";
    return resumeToHTML(resumeData);
  }, [resumeData]);

  if (!resumeData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h2 className="text-xl font-bold">
          No Resume Selected
        </h2>

        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          Choose Template
        </button>
      </div>
    );
  }

const downloadPDF = async () => {
  const original = document.querySelector(".resume-paper");

  if (!original) return;

  const element = original.cloneNode(true);

  // Remove editor-only height restrictions
  element.style.height = "auto";
  element.style.minHeight = "0";
  element.style.margin = "0";
  element.style.boxShadow = "none";
  element.style.boxSizing = "border-box";

  // Remove fixed content height
  const content = element.querySelector(".resume-content");

  if (content) {
    content.style.height = "auto";
    content.style.minHeight = "0";
    content.style.overflow = "visible";
  }

  // Convert pagination spacers to PDF page breaks
  element
    .querySelectorAll(".page-break-spacer")
    .forEach((spacer) => {
      const next = spacer.nextElementSibling;

      if (next) {
        next.style.breakBefore = "page";
        next.style.pageBreakBefore = "always";
      }

      spacer.remove();
    });

  // Remove visual page gaps
  element
    .querySelectorAll(".page-break-gap")
    .forEach((gap) => gap.remove());

  const options = {
    margin: 0,
    filename: "My-Resume.pdf",

    image: {
      type: "jpeg",
      quality: 0.98,
    },

    html2canvas: {
      scale: 2,
      useCORS: true,
    },

    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait",
    },

    pagebreak: {
      mode: ["css"],
    },
  };

  try {
    await html2pdf()
      .set(options)
      .from(element)
      .save();
  } catch (error) {
    console.error("PDF export failed:", error);
    alert("PDF download failed.");
  }
};
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <header className="bg-white border-b px-6 py-4 flex items-center justify-between">

        <div>
          <h1 className="text-xl font-bold">
            Resume Editor
          </h1>

          <p className="text-sm text-gray-500">
            Edit your resume like MS Word
          </p>
        </div>

        <div className="flex gap-3">

          <button
            onClick={() => navigate("/")}
            className="border px-4 py-2 rounded-lg"
          >
            Templates
          </button>

          <button
            onClick={downloadPDF}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            Download PDF
          </button>

        </div>

      </header>

      {/* Editor */}
      <main className="w-full">

        <ResumeEditor
          initialContent={initialContent}
        />

      </main>

    </div>
  );
};

export default EditMain;
