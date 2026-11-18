
import React from "react";

const EditorToolbar = ({ editor }) => {
  if (!editor) return null;

  const buttonClass = (active = false) =>
    `px-3 py-2 rounded-md text-sm border transition ${
      active
        ? "bg-blue-100 text-blue-700 border-blue-300"
        : "bg-white hover:bg-gray-100 border-gray-200"
    }`;

  const applyFontSize = (size) => {
    editor
      .chain()
      .focus()
      .setMark("textStyle", { fontSize: size })
      .run();
  };

  const applyFontFamily = (font) => {
    editor
      .chain()
      .focus()
      .setMark("textStyle", { fontFamily: font })
      .run();
  };

  return (
    <div className="flex flex-wrap items-center gap-2 p-3 bg-white border-b">

      {/* Font Family */}
      <select
        defaultValue="Arial"
        onChange={(e) => applyFontFamily(e.target.value)}
        className="border rounded-md p-2 text-sm"
      >
        <option value="Arial">Arial</option>
        <option value="Georgia">Georgia</option>
        <option value="Verdana">Verdana</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Trebuchet MS">Trebuchet MS</option>
      </select>

      {/* Font Size */}
      <select
        defaultValue="12px"
        onChange={(e) => applyFontSize(e.target.value)}
        className="border rounded-md p-2 text-sm"
      >
        <option value="10px">10</option>
        <option value="11px">11</option>
        <option value="12px">12</option>
        <option value="14px">14</option>
        <option value="16px">16</option>
        <option value="18px">18</option>
        <option value="20px">20</option>
        <option value="24px">24</option>
        <option value="28px">28</option>
        <option value="32px">32</option>
      </select>

      <div className="h-7 border-l mx-1" />

      {/* Bold */}
      <button
        title="Bold"
        onClick={() =>
          editor.chain().focus().toggleBold().run()
        }
        className={buttonClass(editor.isActive("bold"))}
      >
        <b>B</b>
      </button>

      {/* Italic */}
      <button
        title="Italic"
        onClick={() =>
          editor.chain().focus().toggleItalic().run()
        }
        className={buttonClass(editor.isActive("italic"))}
      >
        <i>I</i>
      </button>

      {/* Underline */}
      <button
        title="Underline"
        onClick={() =>
          editor.chain().focus().toggleUnderline().run()
        }
        className={buttonClass(editor.isActive("underline"))}
      >
        <u>U</u>
      </button>

      <div className="h-7 border-l mx-1" />

      {/* Text Color */}
      <label className="flex items-center gap-2 border rounded-md px-2 py-1 cursor-pointer">
        <span className="text-sm">Text Color</span>
        <input
          type="color"
          defaultValue="#222222"
          onChange={(e) =>
            editor.chain().focus().setColor(e.target.value).run()
          }
          className="w-7 h-7 cursor-pointer"
        />
      </label>

      <div className="h-7 border-l mx-1" />

      {/* Alignment */}
      <button
        title="Align Left"
        onClick={() =>
          editor.chain().focus().setTextAlign("left").run()
        }
        className={buttonClass(editor.isActive({ textAlign: "left" }))}
      >
        <span>Left</span>
      </button>

      <button
        title="Align Center"
        onClick={() =>
          editor.chain().focus().setTextAlign("center").run()
        }
        className={buttonClass(editor.isActive({ textAlign: "center" }))}
      >
        Center
      </button>

      <button
        title="Align Right"
        onClick={() =>
          editor.chain().focus().setTextAlign("right").run()
        }
        className={buttonClass(editor.isActive({ textAlign: "right" }))}
      >
        Right
      </button>

      <div className="h-7 border-l mx-1" />

      {/* Lists */}
      <button
        onClick={() =>
          editor.chain().focus().toggleBulletList().run()
        }
        className={buttonClass(editor.isActive("bulletList"))}
      >
        • List
      </button>

      <button
        onClick={() =>
          editor.chain().focus().toggleOrderedList().run()
        }
        className={buttonClass(editor.isActive("orderedList"))}
      >
        1. List
      </button>

      <div className="h-7 border-l mx-1" />

      {/* Undo / Redo */}
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().undo()}
        className={buttonClass()}
      >
        ↶
      </button>

      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().redo()}
        className={buttonClass()}
      >
        ↷
      </button>

    </div>
  );
};

export default EditorToolbar;
