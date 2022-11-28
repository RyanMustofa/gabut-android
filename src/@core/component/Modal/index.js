import React from 'react';
import Modal from 'react-native-modal';

export default function ModalCore(props) {
	return (
		<React.Fragment>
			<Modal {...props} onBackButtonPress={props.onClose} onBackdropPress={props.onClose}>
				{props.children}
			</Modal>
		</React.Fragment>
	)
}