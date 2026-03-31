import React, { useState, useRef, useEffect } from 'react';
import { useAdmin } from '../../contexts/AdminContext';
import { Image as ImageIcon, Upload } from 'lucide-react';

interface EditableImageProps {
  id: string;
  defaultSrc: string;
  alt?: string;
  className?: string;
}

export default function EditableImage({ id, defaultSrc, alt = '', className = '' }: EditableImageProps) {
  const { isEditMode, content, updateContent } = useAdmin();
  const [src, setSrc] = useState(content[id] || defaultSrc);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (content[id]) {
      setSrc(content[id]);
    }
  }, [content, id]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setSrc(result);
        updateContent(id, result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isEditMode) {
    return <img src={src} alt={alt} className={className} referrerPolicy="no-referrer" />;
  }

  return (
    <div className={`relative group cursor-pointer ${className}`}>
      <img src={src} alt={alt} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      
      <div 
        className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2"
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="bg-sky-500 p-3 rounded-full text-white shadow-lg">
          <Upload size={20} />
        </div>
        <span className="text-white font-medium text-sm bg-black/50 px-3 py-1 rounded-full">이미지 변경</span>
      </div>
      
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleImageChange} 
        accept="image/*" 
        className="hidden" 
      />
    </div>
  );
}
