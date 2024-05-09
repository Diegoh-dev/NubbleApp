import {PostComment} from '@domain';
import {MutationOptions, QueryKeys} from '@infra';
import {useMutation, useQueryClient} from '@tanstack/react-query';

import {postCommentService} from '../postCommentService';

export function usePostCommentCreate(
  postId: number,
  options?: MutationOptions<PostComment>,
) {
  const queryClient = useQueryClient();
  // os generics que o useMutation recebe
  // export function useMutation<
  // TData = unknown,
  // TError = unknown,
  // TVariables = void,
  // TContext = unknown>

  const {mutate, isError, isLoading} = useMutation<
    PostComment,
    unknown,
    {message: string}
  >({
    mutationFn: variables =>
      postCommentService.create(postId, variables.message),
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.PostCommentList, postId],
      });

      if (options?.onSuccess) {
        //data => retorando no onSuccess da useQuery
        options.onSuccess(data);
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError(options.errorMessage || 'Ocorreu um erro');
      }
    },
  });
  // const {mutate, loading, error} = useMutation<{message: string}, PostComment>(
  //   ({message}) => postCommentService.create(postId, message),
  //   options,
  // );

  function createComment(message: string) {
    mutate({message});
  }

  return {
    createComment,
    isLoading,
    isError,
  };
}
