import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/button';
import { colors } from '../themes/colors';

export default Home = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getPosts = async () => {
    try {
      const response = await fetch('https://appbackend.datavancedbd.com/api/posts');
      const json = await response.json();
      setData(json.posts);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? <ActivityIndicator /> : (
       <ScrollView>
         <View style={{paddingHorizontal: 20}}>
         <Button title={'Create Post'} customStyles={{ alignSelf: "center", width: '100%', marginBottom: 20,  }} onPress={() => { navigation.navigate('CreateNote') }
                }></Button>
         </View>
          <FlatList
          data={data}
          keyExtractor={item => item._id.toString()}
          renderItem={({ item }) => (
            <>
            <View style={styles.singlePost}>
            <View style={styles.postCreator}>
              <View style={styles.profilePhoto}></View>
              <View >
                <Text style={styles.userName}>{item.username}</Text>
                <Text style={{ fontSize:12}}>Today 02:24 PM</Text>
              </View>
            </View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.body}>{item.body}</Text>
            </View>
            </>
          )}
        />
       </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  singlePost:{
    marginHorizontal:16,
    backgroundColor:"#F2FBFF",
    marginBottom:12,
    padding:16 
  },
  title:{
    fontSize:16,
    fontWeight:"bold",
    marginBottom:4
  },
  body:{
    fontSize:16
  },
  profilePhoto:{
    width:50,
    height:50,
    borderRadius:25,
    backgroundColor:colors.gray,
    marginBottom:10,
    marginRight:12
  },
  postCreator:{
    display:'flex',
    flexDirection:"row",
    alignItems:'center',
    marginBottom:16
  },
  userName:{
    fontSize:16,
    fontWeight:'bold'
  }
})