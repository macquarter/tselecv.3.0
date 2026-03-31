import React, { useState, useEffect, useRef } from 'react';
import { useAdmin } from '../../contexts/AdminContext';
import { Edit3 } from 'lucide-react';

interface EditableTextProps {
  id: string;
  defaultText: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  multiline?: boolean;
}

export default function EditableText({ 
  id, 
  defaultText, 
  className = '', 
  as: Component = 'span',
  multiline = false 
}: EditableTextProps) {
  const { isEditMode, content, updateContent } = useAdmin();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(content[id] || defaultText);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    if (content[id] !== undefined) {
      setText(content[id]);
    }
  }, [content, id]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleBlur = () => {
    setIsEditing(false);
    updateContent(id, text);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !multiline) {
      handleBlur();
    }
    if (e.key === 'Escape') {
      setText(content[id] || defaultText);
      setIsEditing(false);
    }
  };

  if (!isEditMode) {
    return <Component className={className} dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, '<br/>') }} />;
  }

  if (isEditing) {
    return multiline ? (
      <textarea
        ref={inputRef as React.RefObject<HTMLTextAreaElement>}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className={`bg-white/10 border border-sky-400 rounded px-2 py-1 outline-none w-full resize-none ${className}`}
        rows={text.split('\n').length}
      />
    ) : (
      <input
        ref={inputRef as React.RefObject<HTMLInputElement>}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className={`bg-white/10 border border-sky-400 rounded px-2 py-1 outline-none w-full ${className}`}
      />
    );
  }

  return (
    <div 
      className={`relative group cursor-pointer border border-transparent hover:border-sky-400/50 rounded transition-colors ${className}`}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsEditing(true);
      }}
    >
      <Component dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, '<br/>') }} />
      <div className="absolute -top-3 -right-3 bg-sky-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-10">
        <Edit3 size={12} />
      </div>
    </div>
  );
}
