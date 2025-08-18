import { Text } from 'react-native';
import { fetchFromState } from '../slice/addressListSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectAddressList } from '../slice/addressListSlice';

const AddressDetails = () => {
  const addressList = useSelector(selectAddressList);
  console.log('in Home', addressList);
  return (
    <>
      <Text>Hello Address Details</Text>
    </>
  );
};

export default AddressDetails;
