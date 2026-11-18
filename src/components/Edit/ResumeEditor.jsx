
import React, { useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";

import StarterKit from "@tiptap/starter-kit";
import { TextStyle } from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";

import {
  Pagination,
  createPageLayout,
} from "tiptap-a4-pagination";

import "tiptap-a4-pagination/styles.css";

import FontSize from "./extensions/FontSize";
import EditorToolbar from "./EditorToolbar";

// A4 page configuration
const pageLayout = createPageLayout({
  size: "A4",
  marginTop: 18,
  marginBottom: 18,
  gap: 12,
});

const ResumeEditor = ({ initialContent }) => {

  const [pageCount, setPageCount] = useState(1);

  const editor = useEditor({

    extensions: [
      StarterKit,
      TextStyle,
      Color,
      Underline,
      FontSize,

      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),

      // Automatic pagination
      Pagination.configure({
        pageSelector: ".resume-paper",
      }),
    ],

    content: initialContent,

    editorProps: {
      attributes: {
        class: "resume-content",
      },
    },

    onUpdate: ({ editor }) => {
      localStorage.setItem(
        "my-resume-content",
        JSON.stringify(editor.getJSON())
      );
    },

  });

  // Set page layout and update page count
  useEffect(() => {

    if (!editor) return;

    const updatePageCount = () => {
      const count =
        editor.storage.pagination.pageCount || 1;

      setPageCount(count);
    };

    editor.on("transaction", updatePageCount);

    editor.commands.setPageLayout(pageLayout);

    updatePageCount();

    const frame = requestAnimationFrame(updatePageCount);

    return () => {
      cancelAnimationFrame(frame);
      editor.off("transaction", updatePageCount);
    };

  }, [editor]);

  if (!editor) {
    return <div>Loading editor...</div>;
  }

  const totalHeight =
  pageCount * (pageLayout.pageHeight + pageLayout.gap)
  - pageLayout.gap;

  return (
    <div className="w-full">

      {/* Formatting Toolbar */}
      <div className="sticky top-0 z-20 shadow-sm">
        <EditorToolbar editor={editor} />
      </div>

      {/* Page Information */}
      <div className="bg-white border-b px-5 py-2">

        <span className="text-xs text-gray-600">
          A4 Document · {pageCount} {pageCount === 1 ? "Page" : "Pages"}
        </span>

      </div>

      {/* Document Workspace */}
      <div className="resume-workspace">

        <div
          className="resume-paper"
          style={{
            width: `${pageLayout.pageWidth}px`,
            padding: "18mm 17mm",
            minHeight: `${totalHeight}px`,
          }}
        >

          <EditorContent editor={editor} />

        </div>

      </div>

    </div>
  );
};

export default ResumeEditor;