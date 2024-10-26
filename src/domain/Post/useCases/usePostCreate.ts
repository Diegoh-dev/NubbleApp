
import {MutationOptions, QueryKeys} from '@infra';
import {ImageForUpload, multiMidiaService} from '@services';
import {useMutation, useQueryClient} from '@tanstack/react-query';

import {postService} from '../postService';
import {Post} from '../postTypes';

export function usePostCreate(options?: MutationOptions<Post>) {
    const queryClient = useQueryClient();
  const {mutate, isLoading, isError} = useMutation<
    Post,
    unknown,
    {text: string; imageCover: ImageForUpload}
  >({
    mutationFn: ({text, imageCover}) =>
      postService.createPost(text, imageCover),
    onSuccess: post => {
        queryClient.invalidateQueries({queryKey:[QueryKeys.PostList]});
      if (options?.onSuccess) {
        options.onSuccess(post);
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError(options.errorMessage || 'erro ao criar post');
      }
    },
  });

 async function createPost({
    description,
    imageUri,
  }: {
    description: string;
    imageUri: string;
  }) {
    const imageCover = await multiMidiaService.prepareImageForUpload(imageUri);

    mutate({
      text: description, imageCover,
    });
  }

  return {
    isLoading,
    isError,
    createPost,
  };
}
