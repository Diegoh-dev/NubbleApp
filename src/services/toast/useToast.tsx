import {ToastService} from './toastTypes';
// import {useToastContext} from './useToastContext';
import {useToastServiceZustand, useToastZustend} from './useToastZustend';

export function useToast(): ToastService['toast'] {
  // return useToastContext();

  // const {toast} = useToastContext();
  // return toast;

  return useToastZustend();
  
}

export function useToastService(): Pick<
  ToastService,
  'showToast' | 'hideToast'
> {
  // const {showToast, hideToast} = useToastContext();

  // return {
  //   showToast,
  //   hideToast,
  // };

  const {showToast, hideToast} = useToastServiceZustand();

  return {
    showToast,
    hideToast,
  };
}
