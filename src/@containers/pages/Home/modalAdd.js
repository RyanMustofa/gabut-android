import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Input from '../../../@core/component/Input';
import ModalCore from '../../../@core/component/Modal';

export default function ModalAdd({
  dataModal,
  setDataModal,
  visible,
  setVisible,
  setDataForm,
  onOk,
}) {
  return (
    <React.Fragment>
      <ModalCore
        isVisible={visible}
        onClose={() => {
          setVisible(false);
        }}>
        <View
          style={{
            backgroundColor: '#fff',
            padding: 20,
            borderRadius: 6,
            elevation: 3,
          }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold' }}>
              Add list
            </Text>
            <Text style={{ color: '#000', fontSize: 16 }}>x</Text>
          </View>
          <View
            style={{
              marginTop: 20,
            }}>
            <Input
              label="Name"
              name="name"
              form={dataModal}
              setForm={setDataModal}
              placeholder="input name"
              onEndEditing={e => {
                setDataForm(e)
              }}
              validation={(value, cb) => {
                let values = value || null;
                if (!values) {
                  return cb('Please enter name');
                }
                return cb();
              }}
            />
          </View>
          <View
            style={{
              marginTop: 20,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#6683D5',
                elevation: 4,
                flexDirection: 'row',
                justifyContent: 'center',
                paddingVertical: 10,
                borderRadius: 6,
              }}
              onPress={onOk}>
              <Text>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ModalCore>
    </React.Fragment>
  );
}
