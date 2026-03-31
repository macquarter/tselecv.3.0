import React, { useState, useRef, useEffect } from 'react';
import { useAdmin } from '../../contexts/AdminContext';
import { Video, Upload } from 'lucide-react';

interface EditableVideoProps {
  id: string;
  defaultSrc: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
}

export default function EditableVideo({ 
  id, 
  defaultSrc, 
  className = '',
  autoPlay = true,
  loop = true,
  muted = true,
  controls = false
}: EditableVideoProps) {
  const { isEditMode, content, updateContent } = useAdmin();
  const [src, setSrc] = useState(content[id] || defaultSrc);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (content[id]) {
      setSrc(content[id]);
    }
  }, [content, id]);

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setSrc(url);
      // Note: Storing a local blob URL in localStorage won't persist across reloads.
      // In a real app, you'd upload the file to a server and save the URL.
      // For this template/demo, we'll store the object URL, but it will break on refresh.
      updateContent(id, url);
    }
  };

  if (!isEditMode) {
    return (
      <video 
        src={src} 
        className={className} 
        autoPlay={autoPlay} 
        loop={loop} 
        muted={muted} 
        controls={controls}
        playsInline
      />
    );
  }

  return (
    <div className={`relative group cursor-pointer ${className}`}>
      <video 
        src={src} 
        className="w-full h-full object-cover" 
        autoPlay={autoPlay} 
        loop={loop} 
        muted={muted} 
        controls={controls}
        playsInline
      />
      
      <div 
        className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 z-10"
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="bg-sky-500 p-3 rounded-full text-white shadow-lg">
          <Upload size={20} />
        </div>
        <span className="text-white font-medium text-sm bg-black/50 px-3 py-1 rounded-full">동영상 변경</span>
      </div>
      
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleVideoChange} 
        accept="video/*" 
        className="hidden" 
      />
    </div>
  );
}
