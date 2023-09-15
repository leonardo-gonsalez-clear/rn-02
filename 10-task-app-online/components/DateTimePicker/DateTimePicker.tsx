import { View, Text, Button } from 'react-native'
import React from 'react'
import DatePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker'
import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'


interface Props {
  date: Date
  setDate: React.Dispatch<React.SetStateAction<Date>>
}

const DateTimePicker = ({ date = new Date(), setDate }: Props) => {
  const [show, setShow] = React.useState(false)

  const handleDateChange = (_: DateTimePickerEvent, date: Date | undefined) => {
    setShow(false)
    console.log(date)
    setDate(date || new Date())
  }

  return (
    <View>
      <Button title="Selecionar data" onPress={() => setShow(true)} />
      {show && (
        <DatePicker
          mode='date'
          display='spinner'
          testID='123'
          onChange={handleDateChange}
          value={date}
          locale='ptBR'
          minimumDate={new Date()}
        />
      )}
      {(
        <Text>{format(date, "EEEE',' dd MMMM", { locale: ptBR })}</Text>
      )}
    </View>
  )
}

export default DateTimePicker
