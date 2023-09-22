import { View, Text, TouchableOpacity, TextInput, Image, Dimensions, Platform, ScrollView, Alert } from 'react-native'
import React from 'react'
import * as ImagePicker from 'expo-image-picker';
import { Container, ImageContainer, Input, PickImage, PickImageText, Submit, SubmitText, Title } from './addPhoto.styled';
import usePostStore from '../../stores/usePostStore';
import useUserStore from '../../stores/useUserStore';
import { useRouter } from 'expo-router';
import { uploadBytes, ref as refStorage } from 'firebase/storage';
import { storage } from '../../services/firebase';

interface IImage {
  uri: string
  base64: string
}

const AddPhoto = () => {
  const [image, setImage] = React.useState<IImage | null>(null)
  const [comment, setComment] = React.useState('')
  const height = Dimensions.get("window").width * 3 / 4
  const setPosts = usePostStore(state => state.setPosts)
  const posts = usePostStore(state => state.posts)
  const user = useUserStore(state => state.user)
  const router = useRouter()


  const pickImage = async () => {
    if (!user) return Alert.alert("Você precisa estar logado para adicionar uma foto")

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

  const handleSubmit = async () => {
    if (!image || !user) return Alert.alert("Você precisa estar logado e adicionar uma foto")

    const id = posts.length + 1
    const b64Image = `data:application/octet-stream;base64,${image.base64}`

    const file = await fetch(`file://${image.uri}`).then(res => res.blob())

    await uploadBytes(refStorage(storage, `posts/${id}`), file, { contentType: "image/jpeg" })
      .then((snapshot) => {
        console.log(snapshot.ref)
      })

    const newPost: IPost = {
      id,
      avatarUrl: user.avatarUrl || "",
      image: `https://firebasestorage.googleapis.com/v0/b/lambe-a52d9.appspot.com/o/posts%2F${id}?alt=media`,
      email: user.email,
      name: user.name,
      comments: comment ? [{
        name: user.name,
        comment,
      }] : []
    }

    setPosts([newPost, ...posts])

    setImage(null)
    setComment("")

    router.push("/")
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
