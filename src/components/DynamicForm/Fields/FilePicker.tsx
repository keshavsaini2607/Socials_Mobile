import {Text, Pressable, StyleSheet} from 'react-native';
import React, {useCallback} from 'react';
import DocumentPicker from 'react-native-document-picker';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import {HStack} from 'native-base';

const FilePicker = () => {
  const pickFile = useCallback(async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });

      //   uploadyContext.upload(res);
      console.log(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log(
          'User cancelled the picker, exit any dialogs or menus and move on',
        );
      } else {
        throw err;
      }
    }
  }, []);
  return (
    <Pressable onPress={pickFile} style={styles.uploadButton}>
      <HStack alignItems="center" space={2} justifyContent="center">
        <AntDesignIcons name="upload" size={20} />
        <Text>Upload File</Text>
      </HStack>
    </Pressable>
  );
};

export default FilePicker;

const styles = StyleSheet.create({
  uploadButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
    paddingVertical: 14,
    borderRadius: 5,
  },
});
