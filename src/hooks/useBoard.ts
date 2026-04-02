import { useState, useEffect } from 'react';

export interface Post {
  id: string;
  category: string;
  title: string;
  content: string;
  date: string;
  author: string;
  views: number;
  files?: { name: string; size: string; type: string }[];
}

export function useBoard(boardId: string, initialPosts: Post[] = []) {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(`board_${boardId}`);
    if (stored) {
      setPosts(JSON.parse(stored));
    } else {
      setPosts(initialPosts);
      localStorage.setItem(`board_${boardId}`, JSON.stringify(initialPosts));
    }
  }, [boardId]);

  const addPost = (post: Omit<Post, 'id' | 'date' | 'views'>) => {
    const newPost: Post = {
      ...post,
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0].replace(/-/g, '.'),
      views: 0,
    };
    const updated = [newPost, ...posts];
    setPosts(updated);
    localStorage.setItem(`board_${boardId}`, JSON.stringify(updated));
  };

  const updatePost = (id: string, updatedData: Partial<Post>) => {
    const updated = posts.map(p => p.id === id ? { ...p, ...updatedData } : p);
    setPosts(updated);
    localStorage.setItem(`board_${boardId}`, JSON.stringify(updated));
  };

  const deletePost = (id: string) => {
    const updated = posts.filter(p => p.id !== id);
    setPosts(updated);
    localStorage.setItem(`board_${boardId}`, JSON.stringify(updated));
  };

  const incrementViews = (id: string) => {
    const updated = posts.map(p => p.id === id ? { ...p, views: p.views + 1 } : p);
    setPosts(updated);
    localStorage.setItem(`board_${boardId}`, JSON.stringify(updated));
  };

  return { posts, addPost, updatePost, deletePost, incrementViews };
}
