import React, { useEffect, useRef } from 'react';
import './codeMirror.css';  // Create and import your CSS file

const CodeMirrorEditor = ({ code, setCode }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      const editor = window.CodeMirror(editorRef.current, {
        value: code,
        mode: 'htmlmixed',
        theme: 'monokai',
        lineNumbers: true,
        autoCloseTags: true,
        autoCloseBrackets: true,
      });

      editor.on('change', (instance) => {
        setCode(instance.getValue());
      });

      return () => editor.toTextArea();
    }
  }, [code, setCode]);

  return <div ref={editorRef} className="codeMirrorContainer" />;
};

export default CodeMirrorEditor;
