import { toast } from 'react-toastify';

export default function notify(message: string, type: string, options : any) {
        switch (type) {
        case 'error':
            return toast.error(message, { className: 'toast-container toast-error', ...options });
        case 'success':
            return toast.success(message, { className: 'toast-container toast-success', ...options });
        case 'warn':
            return toast.warn(message, { className: 'toast-warn', ...options });
        default:
            return toast.info(message, { className: 'toast-info', ...options });
        }
}
