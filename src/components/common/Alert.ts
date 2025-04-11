import { Slide, toast } from 'react-toastify';
import { ReactNode } from 'react';

function info(message: string | ReactNode) {
	return toast(message, {
		position: 'bottom-center',
		hideProgressBar: true,
		closeOnClick: false,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'colored',
		transition: Slide,
	});
}

function error(message: string | ReactNode) {
	return toast.error(message, {
		position: 'bottom-center',
		hideProgressBar: true,
		closeOnClick: false,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'colored',
		transition: Slide,
	});
}

function warning(message: string | ReactNode) {
	return toast.warning(message, {
		position: 'bottom-center',
		hideProgressBar: true,
		closeOnClick: false,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'light',
		transition: Slide,
	});
}

export const Alert = { info, warning, error };
