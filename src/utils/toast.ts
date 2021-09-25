import { toast } from 'react-toastify';
import type { ToastOptions } from 'react-toastify';

type ToastVariant = 'SUCCESS' | 'ERROR';
interface IToast {
  text: string;
  variant: ToastVariant;
}

function fireToast({ text, variant }: IToast) {
  const toastSettings: ToastOptions = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
  switch (variant) {
    case 'SUCCESS':
      toast.success(text, toastSettings);
      break;
    case 'ERROR':
      toast.error(text, toastSettings);
      break;
    default:
      toast.info(text, toastSettings);
  }
}

export { fireToast };
