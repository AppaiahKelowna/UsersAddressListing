import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import '../../global.css';
import { useState } from 'react';

const Home = () => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const handleUserDetails = () => {
    if (fName && lName && email) {
      const address = { firstName: fName, lastName: lName, email: email };
    }
  };
  return (
    <View className=" bg-gray-200 justify-center items-center gap-4 border-black m-5 p-5">
      <View className="flex-row items-center w-80 bg-red-300 px-5 rounded-md">
        <Text className="font-bold">First Name:</Text>
        <TextInput
          placeholder="Joe"
          value={fName}
          onChangeText={setFName}
        ></TextInput>
      </View>
      <View className="flex-row items-center w-80 bg-red-300 px-5 rounded-md">
        <Text className="font-bold">Second Name:</Text>
        <TextInput
          placeholder="Hart"
          value={lName}
          onChangeText={setLName}
        ></TextInput>
      </View>
      <View className="flex-row items-center w-80 bg-red-300 px-5 rounded-md">
        <Text className="font-bold">Email:</Text>
        <TextInput
          placeholder="joe@mail.com"
          value={email}
          onChangeText={setEmail}
        ></TextInput>
      </View>
      <TouchableOpacity
        className="bg-blue-700 p-2 rounded-md"
        onPress={handleUserDetails}
      >
        <Text className="color-white font-bold">Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
