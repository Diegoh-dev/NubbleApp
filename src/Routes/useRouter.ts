import {useAuthCrendentials, useShowOnboarding} from '@services';

export type Stacks = 'Loading' | 'Auth' | 'App' | 'Onboarding';
export function useRouter(): Stacks {
  const showOnboarding = useShowOnboarding();
  const {authCredentials, isLoading} = useAuthCrendentials();

  if (isLoading) {
    return 'Loading';
  }

  if (showOnboarding) {
    return 'Onboarding';
  }

  if (authCredentials) {
    return 'App';
  }

  return 'Auth';
}
