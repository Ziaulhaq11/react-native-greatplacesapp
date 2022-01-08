import React , {useState} from "react";
import { View, Button, Text, Image, StyleSheet, Alert } from "react-native";
import Colors from "../constants/Colors";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions"; // Not required in current version. Here using just for ios

const ImageSelector = (props) => {
    const [pickedImage,setPickedImage] = useState()
  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA); //one time granted it will be saved
    if (result.status !== "granted") {
      Alert.alert(
        "Insufficient permissions!",
        "You need to grant camera permissions to use this app",
        [{ text: "Okay" }]
        );
        return false
      }
      return true;
  };

  const takeImageHandler = async () => {
      const hasPermission = await verifyPermissions()
      if (!hasPermission) {
          return
      }
    //   ImagePicker.launchCameraAsync(); this also works but we are not getting image
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 0.5, // highest 1 lowest 0
      aspect: [16, 9],
    });
      setPickedImage(image.uri)
      props.onImageTaken(image.uri) //we are calling this function here which will eventually store this image ina parent component
  };

  return (
    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
              {!pickedImage ? <Text>No Image picked yet!</Text> :
        <Image style={styles.image} source={{uri : pickedImage}}/>}
      </View>
      <Button
        title="Take Image"
        color={Colors.primary}
        onPress={takeImageHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imagePicker: {
        alignItems: "center",
      marginBottom : 15
  },
  imagePreview: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageSelector;
