import React from  'react';
import {View, Text, SafeAreaView, FlatList, Image, StyleSheet, Pressable} from 'react-native';

const DATA = [...Array(20).keys()].map((_, i) => {
  if (i % 2 === 0) {
    return {
      id: i,
      name: 'John Doe',
      message: 'Hey, how are you?',
      time: '12:00',
      avatar: `https://randomuser.me/api/portraits/thumb/men/${i}.jpg`,
    }
  }
  return {
    id: i,
    name: 'Jane Doe',
    message: 'Hey, how are you?',
    time: '12:00',
    avatar: `https://randomuser.me/api/portraits/thumb/women/${i}.jpg`,
  }
});

const ChatList = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <Pressable
        style={styles.card}
        onPress={() => navigation.navigate('ChatRoom', { name: item.name, id: item.id } )}
      >
        <Image source={{uri: item.avatar}} style={styles.avatar} />
        <View style={styles.cardContent}>
          <View style={styles.left}>
            <View style={styles.messageHeader}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
            <View style={styles.messageBody}>
              <Text style={styles.message}>{item.message}</Text>
              <View style={styles.messageBadge}>
                <Text style={styles.messageBadgeText}>1</Text>
              </View>
            </View>
          </View>
          {item.id !== DATA.length - 1 && <View style={styles.divider} />}
        </View>
      </Pressable>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Chats</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default ChatList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    backgroundColor: '#353E53',
    padding: 20,
    fontFamily: 'Quicksand-Bold',
    fontWeight: 'bold',
  },

  headerText: {
    color: '#eee',
    fontSize: 20,
  },

  card: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },

  cardContent: {
    flex: 1,
  },

  left: {
    flex: 1,
    marginBottom: 10,
  },

  messageHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  messageBody: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  messageBadge: {
    backgroundColor: '#FFC107',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  messageBadgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },

  divider: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: '#eee',
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Oxygen-Bold',
    marginBottom: 5,
  },

  message: {
    fontSize: 14,
    fontFamily: 'Oxygen-Regular',
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 20,
  },

  list: {
    backgroundColor: '#eee',
  }
});