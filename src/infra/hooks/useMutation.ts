import {useState} from 'react';

export interface MutationOptions<TData> {
  onSuccess?: (data: TData) => void;
  onError?: (message: string) => void;
  errorMessage?: string;
}

export function useMutation<TVariables, TData>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: MutationOptions<TData>,
) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);
  async function mutate(variables: TVariables) {
    try {
      setLoading(true);
      setError(null);
      const data = await mutationFn(variables);
      if (options?.onSuccess) {
        options?.onSuccess(data);
      }
    } catch (mutaetError) {
      setError(false);
      if (options?.onError) {
        options.onError(options?.errorMessage || '');
      }
    } finally {
      setLoading(false);
    }
  }

  return {
    mutate,
    loading,
    error,
  };
}
