import React from 'react';
import {Icon, Input, VStack} from 'native-base';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Searchbar = () => {
  return (
    <VStack w="95%" space={5} alignSelf="center">
      <Input
        placeholder="Find your mentor over here"
        width="100%"
        borderRadius="4"
        py="3"
        px="1"
        fontSize="14"
        InputLeftElement={
          <Icon
            m="2"
            ml="3"
            size="6"
            color="gray.400"
            as={<MaterialIcons name="search" />}
          />
        }
        InputRightElement={
          <Icon
            m="2"
            mr="3"
            size="6"
            color="gray.400"
            as={<MaterialIcons name="mic" />}
          />
        }
      />
    </VStack>
  );
};

export default Searchbar;
