import {useState} from 'react';

import {postCommentService} from '../postCommentService';

export function usePostCommentCreate(postId: number) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);
  async function createComment(message: string) {
    try {
      setLoading(true);
      setError(null);
      await postCommentService.create(postId, message);
    } catch (er) {
      setError(false);
    } finally {
      setLoading(false);
    }
  }

  return {
    createComment,
    loading,
    error,
  };
}
