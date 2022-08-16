import { Pressable, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View } from '../components/Themed';
import { decrement, increment, selectCount } from '../store/counterSlice';
import { selectTheme, toggleTheme } from '../store/themeSlice';
import { RootTabScreenProps } from '../types';


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const mode = useSelector(selectTheme);

  const bgColor = mode === 'light' ? 'red' : 'black';
  const textColor = mode === 'light' ? 'black' : 'white';
  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      <Text style={[styles.title, {color: textColor}]}>Count {count}</Text>
      <Pressable onPress={()=> dispatch(increment())}>
          <Text style={{color: textColor}}>Increment</Text>
      </Pressable>
      <Pressable onPress={()=> dispatch(decrement())}>
          <Text style={{color: textColor}}>Decrement</Text>
      </Pressable>

      <Pressable onPress={()=> dispatch(toggleTheme("dark"))}>
          <Text style={{color: textColor}}>Make Theme Dark</Text>
      </Pressable>
      <Pressable onPress={()=> dispatch(toggleTheme("light"))}>
          <Text style={{color: textColor}}>Make Theme Light</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
