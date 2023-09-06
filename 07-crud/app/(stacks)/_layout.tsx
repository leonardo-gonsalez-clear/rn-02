import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Stack, Tabs, useRouter } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';
import { Octicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter()

  return (
    <Stack >
      <Stack.Screen
        name="index"
        options={{
          title: 'Lista de usuários',
          headerRight: ({ tintColor }) => (
            <TouchableOpacity onPress={() => router.push("/UserForm")}>
              <Octicons color={tintColor} name='person-add' size={24} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="UserForm"
        options={{
          title: 'Adicionar',
        }}
      />
    </Stack>
  );
}
