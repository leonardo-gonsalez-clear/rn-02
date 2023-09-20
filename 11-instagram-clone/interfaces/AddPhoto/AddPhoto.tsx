import { View, Text, TouchableOpacity, TextInput, Image, Dimensions, Platform, ScrollView, Alert } from 'react-native'
import React from 'react'
import * as ImagePicker from 'expo-image-picker';
import { Container, ImageContainer, Input, PickImage, PickImageText, Submit, SubmitText, Title } from './addPhoto.styled';

interface IImage {
  uri: string
  base64: string
}

const AddPhoto = () => {
  const [image, setImage] = React.useState<IImage | null>(null)
  const [comment, setComment] = React.useState('')
  const height = Dimensions.get("window").width * 3 / 4

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Desculpe, precisamos da permissão para acessar a câmera!');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      base64: true,
      allowsMultipleSelection: false,

    });
    if (!result.canceled) {
      const image = result.assets[0]
      setImage({ uri: image.uri, base64: image.base64 || "" });
    }
  }

  const handleSubmit = () => {
    Alert.alert("Imagem adicionada", comment)
  }


  return (
    <ScrollView>
      <Container>
        <Title>Adicione uma foto</Title>

        <ImageContainer
          style={{ height }}
        >
          <Image
            source={{ uri: image?.uri }}
            style={{ width: '100%', height }}
            resizeMode="cover"
          />
        </ImageContainer>

        <PickImage onPress={pickImage}>
          <PickImageText>Escolha uma foto</PickImageText>
        </PickImage>

        <Input
          placeholder='adicione um comentário'
          value={comment}
          onChangeText={setComment}
        />

        <Submit onPress={handleSubmit}>
          <SubmitText>Compartilhar</SubmitText>
        </Submit>

      </Container>
    </ScrollView>
  )
}

export default AddPhoto
