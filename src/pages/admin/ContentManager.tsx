import React, { useState } from 'react';
import { useAdmin } from '../../contexts/AdminContext';
import { Save, Search } from 'lucide-react';

export default function ContentManager() {
  const { content, updateContent } = useAdmin();
  const [searchTerm, setSearchTerm] = useState('');
  const [editState, setEditState] = useState<Record<string, string>>({});

  const keys = Object.keys(content).sort();
  const filteredKeys = keys.filter(key => key.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleSave = (key: string) => {
    if (editState[key] !== undefined) {
      updateContent(key, editState[key]);
      // Optional: show a toast or success indicator
    }
  };

  return (
    <div className="p-8 md:p-12 text-white">
      <header className="mb-12">
        <h2 className="text-3xl font-bold mb-2">콘텐츠 관리</h2>
        <p className="text-gray-400">웹사이트의 모든 텍스트 및 이미지 데이터를 직접 수정할 수 있습니다.</p>
      </header>

      <div className="bg-[#111] border border-white/10 rounded-2xl p-6 mb-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="키(Key) 검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-black border border-white/10 rounded-xl pl-10 pr-4 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        <div className="space-y-4">
          {filteredKeys.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              저장된 콘텐츠 데이터가 없거나 검색 결과가 없습니다.
            </div>
          ) : (
            filteredKeys.map(key => {
              const value = editState[key] !== undefined ? editState[key] : content[key];
              const isModified = editState[key] !== undefined && editState[key] !== content[key];

              return (
                <div key={key} className="bg-black border border-white/5 rounded-xl p-4 flex flex-col md:flex-row gap-4 items-start md:items-center">
                  <div className="w-full md:w-1/3">
                    <span className="text-sm font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded">
                      {key}
                    </span>
                  </div>
                  <div className="flex-1 w-full">
                    <textarea
                      value={value}
                      onChange={(e) => setEditState(prev => ({ ...prev, [key]: e.target.value }))}
                      className="w-full bg-[#111] border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-300 focus:outline-none focus:border-blue-500 transition-colors resize-y min-h-[40px]"
                      rows={value.split('\n').length > 1 ? Math.min(value.split('\n').length, 5) : 1}
                    />
                  </div>
                  <div className="w-full md:w-auto flex justify-end">
                    <button
                      onClick={() => handleSave(key)}
                      disabled={!isModified}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isModified 
                          ? 'bg-blue-600 hover:bg-blue-500 text-white' 
                          : 'bg-white/5 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      <Save size={16} />
                      저장
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
