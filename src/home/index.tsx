import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import '../../global.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  saveToState,
  selectAddressList,
  saveAddress,
  fetchAddress,
} from '../slice/addressListSlice';
import formSchema from '../schema/formSchema';
import { formatError } from 'zod/v4';

const Home = ({ navigation }) => {
  const [form, setForm] = useState({ email: '', firstName: '', lastName: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const dispatch = useDispatch();
  const addressLst = useSelector(selectAddressList);
  const handleUserDetails = () => {
    const result = formSchema.safeParse(form);
    if (result.success) {
      dispatch(saveToState(form));
      dispatch(saveAddress([...addressLst, form]));
      navigation.navigate('Address Details');
    } else {
      const formattedErrors: { [key: string]: string } = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          console.log(err.path);
          console.log(err.path[0]);
          formattedErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(formattedErrors);
    }
  };

  useEffect(() => {
    console.log('UseEffect called while app loading', addressLst);
    dispatch(fetchAddress());
  }, [dispatch]);

  // React when state updates
  useEffect(() => {
    if (addressLst.length > 0) {
      navigation.navigate('Address Details');
    }
  }, [addressLst, navigation]);

  return (
    <View className=" bg-gray-200 justify-center items-center gap-4 border-black m-5 p-5">
      <View className="flex-row items-center w-80 bg-red-300 px-5 rounded-md">
        <Text className="font-bold">First Name:</Text>
        <TextInput
          placeholder="Joe"
          value={form.firstName}
          onChangeText={text => setForm({ ...form, firstName: text })}
        ></TextInput>
      </View>
      {errors.firstName && (
        <Text className="text-red-900 font-bold ">{errors.firstName}</Text>
      )}
      <View className="flex-row items-center w-80 bg-red-300 px-5 rounded-md">
        <Text className="font-bold">Second Name:</Text>
        <TextInput
          placeholder="Hart"
          value={form.lastName}
          onChangeText={text => setForm({ ...form, lastName: text })}
        ></TextInput>
      </View>
      {errors.lastName && (
        <Text className="text-red-900 font-bold">{errors.lastName}</Text>
      )}
      <View className="flex-row items-center w-80 bg-red-300 px-5 rounded-md">
        <Text className="font-bold">Email:</Text>
        <TextInput
          placeholder="joe@mail.com"
          value={form.email}
          onChangeText={text => setForm({ ...form, email: text })}
        ></TextInput>
      </View>
      {errors.email && (
        <Text className="text-red-900 font-bold">{errors.email}</Text>
      )}
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
