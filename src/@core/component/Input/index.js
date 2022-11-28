import React, { useState } from 'react';
import { TextInput, View, HelperText, Text } from 'react-native';

export default function Input({ label, placeholder, onEndEditing, validation, name, setForm, form }) {
	const [color, setColor] = useState('#393E46');
	const [isFocus, setIsFocus] = useState(false);
	const [message, setMessage] = useState('');
	return (
		<View>
			<View>
				<Text style={{ color: '#000', marginBottom: 10, fontSize: 15 }}>
					{label}
				</Text>
			</View>
			<TextInput
				// onEndEditing={e => {
				// 	onEndEditing(e.nativeEvent.text.trim());
				// }}
				placeholder={placeholder}
				placeholderTextColor="#65647C80"
				onFocus={() => {
					setIsFocus(true);
					setColor('#009EFF');
				}}
				onBlur={() => {
					setIsFocus(false);
					setColor('#393E46');
				}}
				onChangeText={e => {
					onEndEditing(e)
					validation(e, value => {
						if (value) {
							setColor('#f50');
							setMessage(value);
						} else {
							if (isFocus) {
								setColor('#009EFF');
							} else {
								setColor('#393E46');
							}
						}
					});
				}}
				style={{
					color: '#000',
					paddingHorizontal: 20,
					borderRadius: 6,
					borderWidth: 1,
					borderColor: color,
				}}
				underlineColorAndroid="transparent"
			/>
			{message !== '' && (
				<View>
					<Text
						style={{
							color,
							marginTop: 5,
						}}>
						{message}
					</Text>
				</View>
			)}
		</View>
	);
}
