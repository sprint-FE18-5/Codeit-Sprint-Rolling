import React, { useEffect } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TextStyle } from "@tiptap/extension-text-style";
import { FontFamily } from "@tiptap/extension-font-family";
import {
  FontBoldIcon,
  FontItalicIcon,
  UnderlineIcon,
  CodeIcon,
  ListBulletIcon,
  QuoteIcon,
} from "@radix-ui/react-icons";

const Editor = ({ initialContent, onChange, selectedFont }) => {
  const [_, setRerender] = React.useState(0);
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      FontFamily.configure({
        types: ["textStyle"],
      }),
    ],
    content: initialContent,
    onUpdate: ({ editor }) => {
      if (typeof onChange === "function") {
        onChange(editor.getHTML());
      }
    },
  });

  useEffect(() => {
    if (!editor) return;

    // 전체 텍스트에 폰트 일괄 적용

    if (selectedFont) {
      editor.chain().focus().selectAll().setFontFamily(selectedFont).run();
      editor.commands.setTextSelection(0);
    }

    const update = () => setRerender(v => v + 1);
    editor.on("transaction", update);
    return () => editor.off("transaction", update);
  }, [editor, selectedFont]);

  if (!editor) {
    return null;
  }

  return (
    <div className="w-full border border-gray-300 rounded-[8px] text-16 overflow-hidden">
      <div className="flex gap-1 p-2 bg-grayscale-100 w-full">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded transition-colors hover:bg-grayscale-200 hover:text-grayscale-900 focus:outline-none ${
            editor.isActive("bold") ? "bg-purple-100 text-purple-600" : "text-grayscale-900"
          }`}
          aria-label="Bold"
        >
          <FontBoldIcon className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded transition-colors hover:bg-grayscale-200 hover:text-grayscale-900 focus:outline-none ${
            editor.isActive("italic") ? "bg-purple-100 text-purple-600" : "text-grayscale-900"
          }`}
          aria-label="Italic"
        >
          <FontItalicIcon className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`p-2 rounded transition-colors hover:bg-grayscale-200 hover:text-grayscale-900 focus:outline-none ${
            editor.isActive("underline") ? "bg-purple-100 text-purple-600" : "text-grayscale-900"
          }`}
          aria-label="Underline"
        >
          <UnderlineIcon className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={`p-2 rounded transition-colors hover:bg-grayscale-200 hover:text-grayscale-900 focus:outline-none ${
            editor.isActive("code") ? "bg-purple-100 text-purple-600" : "text-grayscale-900"
          }`}
          aria-label="Code"
        >
          <CodeIcon className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded transition-colors hover:bg-grayscale-200 hover:text-grayscale-900 focus:outline-none${
            editor.isActive("bulletList") ? " bg-purple-100 text-purple-600" : " text-grayscale-900"
          }`}
          aria-label="Bullet List"
        >
          <ListBulletIcon className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`p-2 rounded transition-colors hover:bg-grayscale-200 hover:text-grayscale-900 focus:outline-none ${
            editor.isActive("blockquote") ? "bg-purple-100 text-purple-600" : "text-grayscale-900"
          }`}
          aria-label="Blockquote"
        >
          <QuoteIcon className="w-5 h-5" />
        </button>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;
