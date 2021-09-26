import ReactModal from 'react-modal';

ReactModal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,0.8)';

function Modal({ open, children }) {
	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
		},
	};

	return (
		<ReactModal ariaHideApp={false} isOpen={open} style={customStyles} contentLabel='Example Modal'>
			{children}
		</ReactModal>
	);
}

export default Modal;
