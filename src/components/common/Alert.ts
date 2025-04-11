import { Slide, toast } from 'react-toastify';

function info(message: string) {
	return toast(message, {
		position: 'bottom-center',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: false,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'colored',
		transition: Slide,
	});
}

function error(message: string) {
	return toast.error(message, {
		position: 'bottom-center',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: false,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'colored',
		transition: Slide,
	});
}

export const Alert = { info, error };
