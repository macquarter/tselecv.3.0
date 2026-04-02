import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, FileText, Download, Plus, Edit, Trash2, X, Eye } from 'lucide-react';
import { useBoard, Post } from '../hooks/useBoard';
import { useAdmin } from '../contexts/AdminContext';

interface BoardProps {
  boardId: string;
  title: string;
  description: string;
  categories: string[];
  initialPosts: Post[];
  showFiles?: boolean;
}

export default function Board({ boardId, title, description, categories, initialPosts, showFiles = false }: BoardProps) {
  const { posts, addPost, updatePost, deletePost, incrementViews } = useBoard(boardId, initialPosts);
  const { isAdmin } = useAdmin();
  const [filter, setFilter] = useState('전체');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Partial<Post>>({});

  const filteredPosts = posts.filter(post => {
    const matchesFilter = filter === '전체' || post.category === filter;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleOpenPost = (post: Post) => {
    incrementViews(post.id);
    setSelectedPost(post);
  };

  const handleSave = () => {
    if (isEditing && selectedPost) {
      updatePost(selectedPost.id, formData);
    } else {
      addPost({
        title: formData.title || '',
        content: formData.content || '',
        category: formData.category || categories[0],
        author: formData.author || '관리자',
        files: formData.files || []
      });
    }
    setIsEditing(false);
    setSelectedPost(null);
    setFormData({});
  };

  const handleDelete = (id: string) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      deletePost(id);
      setSelectedPost(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6"
        >
          {title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg md:text-xl font-light max-w-2xl"
        >
          {description}
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col md:flex-row gap-4 mb-12 justify-between items-center"
      >
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto flex-1">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input 
              type="text" 
              placeholder="검색어 입력..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            {['전체', ...categories].map((cat, i) => (
              <button 
                key={i}
                onClick={() => setFilter(cat)}
                className={`px-6 py-4 rounded-xl whitespace-nowrap text-sm font-medium transition-colors ${
                  filter === cat ? 'bg-white text-black' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        {isAdmin && (
          <button 
            onClick={() => {
              setFormData({ category: categories[0] });
              setIsEditing(true);
              setSelectedPost(null);
            }}
            className="flex items-center gap-2 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors whitespace-nowrap"
          >
            <Plus size={20} />
            글쓰기
          </button>
        )}
      </motion.div>

      {/* List */}
      <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden">
        <div className="hidden md:grid grid-cols-12 gap-4 p-6 border-b border-white/5 text-sm font-medium text-gray-400 uppercase tracking-wider">
          <div className="col-span-1 text-center">번호</div>
          <div className="col-span-2 text-center">분류</div>
          <div className="col-span-5">제목</div>
          <div className="col-span-2 text-center">작성자</div>
          <div className="col-span-1 text-center">작성일</div>
          <div className="col-span-1 text-center">조회수</div>
        </div>
        <div className="divide-y divide-white/5">
          {filteredPosts.map((post, index) => (
            <div 
              key={post.id}
              onClick={() => handleOpenPost(post)}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 hover:bg-[#111] transition-colors cursor-pointer items-center group"
            >
              <div className="hidden md:block col-span-1 text-center text-gray-500 font-mono text-sm">
                {filteredPosts.length - index}
              </div>
              <div className="col-span-1 md:col-span-2 text-left md:text-center">
                <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-blue-400 text-xs font-semibold tracking-wider uppercase">
                  {post.category}
                </span>
              </div>
              <div className="col-span-1 md:col-span-5">
                <h3 className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors truncate">
                  {post.title}
                </h3>
              </div>
              <div className="hidden md:block col-span-2 text-center text-gray-400 text-sm">
                {post.author}
              </div>
              <div className="col-span-1 md:col-span-1 text-left md:text-center text-gray-500 font-mono text-sm">
                {post.date}
              </div>
              <div className="hidden md:block col-span-1 text-center text-gray-500 font-mono text-sm">
                {post.views}
              </div>
            </div>
          ))}
          {filteredPosts.length === 0 && (
            <div className="p-12 text-center text-gray-500">
              등록된 게시글이 없습니다.
            </div>
          )}
        </div>
      </div>

      {/* Post Modal */}
      <AnimatePresence>
        {(selectedPost && !isEditing) && (
          <motion.div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedPost(null)} />
            <motion.div 
              className="bg-[#111] w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden relative z-10 flex flex-col shadow-2xl border border-white/10"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
            >
              <div className="p-6 border-b border-white/10 flex justify-between items-start">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-4">
                    {selectedPost.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{selectedPost.title}</h2>
                  <div className="flex items-center gap-6 text-sm text-gray-400 font-mono">
                    <span>작성자: {selectedPost.author}</span>
                    <span>작성일: {selectedPost.date}</span>
                    <span className="flex items-center gap-1"><Eye size={14} /> {selectedPost.views}</span>
                  </div>
                </div>
                <button onClick={() => setSelectedPost(null)} className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-colors">
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-6 md:p-8 overflow-y-auto flex-1 text-gray-300 leading-relaxed whitespace-pre-wrap">
                {selectedPost.content}
              </div>

              {showFiles && selectedPost.files && selectedPost.files.length > 0 && (
                <div className="p-6 border-t border-white/10 bg-[#0a0a0a]">
                  <h4 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4">첨부파일</h4>
                  <div className="flex flex-col gap-2">
                    {selectedPost.files.map((file, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-[#111] border border-white/5 hover:border-white/10 transition-colors">
                        <div className="flex items-center gap-4">
                          <FileText className="text-blue-400" size={20} />
                          <span className="text-gray-200">{file.name}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-gray-500 font-mono">{file.size}</span>
                          <button className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors">
                            <Download size={18} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {isAdmin && (
                <div className="p-6 border-t border-white/10 bg-[#0a0a0a] flex justify-end gap-4">
                  <button 
                    onClick={() => {
                      setFormData(selectedPost);
                      setIsEditing(true);
                    }}
                    className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium transition-colors"
                  >
                    <Edit size={18} />
                    수정
                  </button>
                  <button 
                    onClick={() => handleDelete(selectedPost.id)}
                    className="flex items-center gap-2 px-6 py-3 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-xl font-medium transition-colors"
                  >
                    <Trash2 size={18} />
                    삭제
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}

        {/* Edit Modal */}
        {isEditing && (
          <motion.div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsEditing(false)} />
            <motion.div 
              className="bg-[#111] w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden relative z-10 flex flex-col shadow-2xl border border-white/10"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
            >
              <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#0a0a0a]">
                <h2 className="text-2xl font-bold text-white">{selectedPost ? '게시글 수정' : '새 게시글 작성'}</h2>
                <button onClick={() => setIsEditing(false)} className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-colors">
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-6 md:p-8 overflow-y-auto flex-1 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-400">분류</label>
                  <select 
                    value={formData.category || categories[0]}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500/50"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat} className="bg-[#111] text-white">{cat}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-400">제목</label>
                  <input 
                    type="text"
                    value={formData.title || ''}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="제목을 입력하세요"
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500/50"
                  />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label className="text-sm font-medium text-gray-400">내용</label>
                  <textarea 
                    value={formData.content || ''}
                    onChange={(e) => setFormData({...formData, content: e.target.value})}
                    placeholder="내용을 입력하세요"
                    className="w-full h-64 bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500/50 resize-none"
                  />
                </div>
              </div>

              <div className="p-6 border-t border-white/10 bg-[#0a0a0a] flex justify-end gap-4">
                <button 
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl font-medium transition-colors"
                >
                  취소
                </button>
                <button 
                  onClick={handleSave}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors"
                >
                  저장
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
