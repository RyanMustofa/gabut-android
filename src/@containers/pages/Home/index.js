import React, { useEffect, useState } from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Http from '../../../@core/utils/axios';
import ModalAdd from './modalAdd';

export default function Home() {
  const [dataModal, setDataModal] = useState(null);
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([])
  const [dataForm, setDataForm] = useState(null)
  const httpRequest = Http()

  const getData = async () => {
    await httpRequest({
      url: 'api/show',
      method: 'get',
    }).then(res => {
      console.log(res)
      setData(res?.data?.data)
    }).then(err => {
      console.log(err.response)
    })
  }

  useEffect(() => {
    getData()
  }, []);

  const handleSubmit = async () => {
    await httpRequest({
      url: 'api/store',
      method: 'post',
      data: {
        name: dataForm
      }
    }).then(res => {
      console.log(res)
      getData()
      setVisible(false)
      setDataForm(null)
    }).catch(err => {
      console.log(err.response)
    })
  }

  const handleDelete = async (id) => {
    console.log(id)
    await httpRequest({
      url: 'api/delete/' + id,
      method: 'delete',
    }).then(res => {
      console.log(res)
      getData()
    }).catch(err => {
      console.log(err.response)
    })
  }
  return (
    <React.Fragment>
      <ImageBackground
        style={style.backgroundImage}
        source={{
          uri: 'https://images.unsplash.com/photo-1668863699009-1e3b4118675d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        }}>
        <View style={style.container}>
          <View style={style.content}>
            <ScrollView
              style={{
                padding: 50,
              }}>
              <View
                style={{
                  marginTop: 40,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Icon name="user" size={50} color="#eaeaea" />
                <Text
                  style={{
                    color: '#eaeaea',
                    fontSize: 30,
                    marginLeft: 20,
                    fontWeight: 'bold',
                  }}>
                  Input
                </Text>
              </View>
              <View
                style={{
                  marginTop: 20,
                }}>
                {
                  data.map(el => (
                    <View style={style.list} key={el.id}>
                      <Text
                        style={{
                          color: '#000',
                          fontWeight: 'bold',
                        }}>
                        {el.name}
                      </Text>
                      <View style={{
                        position: 'absolute',
                        right: 20,
                        top: 20
                      }}>
                        <TouchableOpacity onPress={() => handleDelete(el.id)}>

                          <Icon name='trash' color="#f50" size={20} />
                        </TouchableOpacity>
                      </View>
                    </View>

                  ))
                }

              </View>
            </ScrollView>
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 30,
              right: 30,
            }}>
            <TouchableOpacity
              style={style.button}
              onPress={() => {
                setVisible(true);
              }}>
              <Text style={{ fontSize: 20 }}>+</Text>
            </TouchableOpacity>
          </View>
          <ModalAdd
            dataModal={dataModal}
            setDataForm={setDataForm}
            visible={visible}
            setVisible={setVisible}
            setDataModal={setDataModal}
            onOk={handleSubmit}
          />
        </View>
      </ImageBackground>
    </React.Fragment>
  );
}

const style = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  list: {
    padding: 20,
    backgroundColor: '#eaeaea',
    marginTop: 10,
    borderRadius: 6,
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6683D5',
    elevation: 4,
  },
});
