import { Text, View, TextInput, TouchableOpacity } from 'react-native';

const Home = () => {
  return (
    <View>
      <View className="flex-row">
        <Text>First Name</Text>
        <TextInput placeholder="Joe"></TextInput>
      </View>
      <View className="flex-row">
        <Text>Second Name</Text>
        <TextInput placeholder="Hart"></TextInput>
      </View>
      <TouchableOpacity>
        <Text>submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
