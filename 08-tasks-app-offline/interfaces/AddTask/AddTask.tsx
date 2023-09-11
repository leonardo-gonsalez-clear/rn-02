import { View, Text, Modal, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { Btn, BtnText, ButtonWrapper, Container, Content, Header, HeaderText, Input, Wrapper } from './addTask.styled'
import theme from '../../constants/colors'

interface Props {
  isVisible: boolean
  onClose: () => void
}

const AddTask = ({ isVisible, onClose }: Props) => {
  const [task, setTask] = React.useState<string>("")

  return (
    <Modal visible={isVisible} transparent animationType='fade'>
      <TouchableWithoutFeedback onPress={onClose}>
        <Container>
          <Wrapper activeOpacity={1}>
            <Header>
              <HeaderText>Nova tarefa</HeaderText>
            </Header>
            <Content>
              <Input
                placeholder='Adicionar tarefa...'
                onChangeText={(t) => setTask(t)}
                value={task}
              />
              <ButtonWrapper>
                <Btn style={{ backgroundColor: "transparent" }}>
                  <BtnText
                    style={{ color: theme.colors.today }}
                    onPress={onClose}
                  >
                    Cancelar
                  </BtnText>
                </Btn>
                <Btn>
                  <BtnText>Adicionar</BtnText>
                </Btn>
              </ButtonWrapper>
            </Content>
          </Wrapper>
        </Container>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

export default AddTask
