import React , {useState} from 'react';

import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    Button,
    Alert,
    FlatList,
    TextInput,
    Modal,
    Pressable,

} from 'react-native'

import {
    Colors
} from 'react-native/Libraries/NewAppScreen';
const Item = ({ name }) => {
    return (
        <View> 
            <Text>{name}</Text>
        </View>
    )
}
const TestComponent = () => {

    let data = [
        {
            id: 1,
            name: "book one"
        },
        {
            id: 2,
            name: "book two"
        },
        {
            id: 3,
            name: "book three"
        },
    ];
    const [books, setBook] = useState(data);
    const [text, onChangeText] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const renderItem =  ({ item }) => (
        <Item name ={  item.name} />
    )

    const onClick = () => {
        const book = {id: books.length +1 , name: `book ${text}`}
        setBook([book, ...books])
        onChangeText("")
        Alert.alert("A book has been added "+ book.name);
    };

    
    return (
        <View style={[styles.initial, styles.vertical]}>

            <Modal
                animationType="slide"
                transparent={true}
                visible= {modalVisible}
                style={styles.modal}
                onRequestClose = {() => {
                    setModalVisible(!modalVisible)
                }}
            >
                <View style={styles.modalView}>
                    <Text>Modal</Text>
                    <Pressable
                        style={styles.pressable}
                        onPress = {() => setModalVisible(!modalVisible)}
                    >
                        <Text>{ modalVisible ? 'Hide': 'Show' } modal</Text>
                    </Pressable>
                </View>
            </Modal>
            <Text>Hello world</Text>
            <ActivityIndicator size="large" color="red" animating={false} />
            <Button title="Click" onPress= {() => onClick()} />
            <Pressable
                    style={styles.pressable}
                    onPress = {() => setModalVisible(true)}
                >
                    <Text>{ modalVisible ? 'Hide': 'Show' } modal</Text>
                </Pressable>
            <TextInput
                style={styles.textField}
                value ={text}
                onChangeText={onChangeText}
            />
            <FlatList
                data={books}
                renderItem={renderItem}
                keyExtractor ={ item => item.id}
            />
        </View>

    );
};

const styles  = StyleSheet.create({
   initial: {
    flex: 1,  
    color: Colors.white,
    backgroundColor: "#eee"
   },
   vertical: {
    padding: 10,
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
   },
   horizontal: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
   },
   textField: {
       borderWidth: 1
   },
   pressable: {
       backgroundColor: "red",
       borderRadius: 10,
       padding: 10
   },

   modalView:{
       backgroundColor: "yellow",
       flexDirection: "column",
       justifyContent: "center",
       alignItems: "center",
       height: "100%"
   }
})

export default TestComponent;