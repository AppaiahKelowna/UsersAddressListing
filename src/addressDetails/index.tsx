import { FlatList, Text, View } from 'react-native';
import { fetchFromState } from '../slice/addressListSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectAddressList } from '../slice/addressListSlice';
import '../../global.css';

const AddressView = ({ address }) => (
  <View className="border border-gray-700 p-4">
    <Text>{address.firstName ?? ''}</Text>
    <Text>{address.lastName ?? ''}</Text>
    <Text>{address.email ?? ''}</Text>
  </View>
);

const AddressDetails = () => {
  const addressList = useSelector(selectAddressList);
  return (
    <>
      <Text>Hello Address Details</Text>
      <FlatList
        data={addressList}
        renderItem={({ item }) => <AddressView address={item} />}
      ></FlatList>
    </>
  );
};

export default AddressDetails;
