import { 
  View, Text, Image, TextInput, TouchableOpacity, FlatList, Keyboard, Alert 
} from "react-native";
import { useEffect, useState } from "react";

import Animated, { 
  Easing, useSharedValue, useAnimatedStyle, 
  withTiming, withSequence, interpolate,
  FadeInLeft, FadeInRight
} from "react-native-reanimated";

import { CirclePlus } from 'lucide-react-native';
import EmptyList from "../../components/EmptyList";
import TaskItem from "../../components/TaskItem";
import TasksProps from "../../types/task";
import style from "./style";

const logo = require("../../../assets/logo-todo.png");

function Home(){
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState<TasksProps[]>([]);
  const [focus, setFocus] = useState(false);

  const header = useSharedValue(-120);
  const input = useSharedValue(0);

  function handleAddTask(taskText: string) {
    if(!taskText) return;

    setTasks((prevState) => [
      { 
        id: tasks.length > 0 ? tasks[0].id + 1 : 1, 
        task: taskText,
        checked: false
      },
      ...prevState, 
    ]);
    setTaskText('');
    setFocus(false);
    Keyboard.dismiss();
  }

  function handlleCheckTask(task: TasksProps){
    setTasks((prevState) => prevState.map(prev => {
      if(prev.id === task.id){
        prev.checked = !task.checked
      }
      return prev
    }));
  }

  function handleRemoveTask(taskId: number){
    Alert.alert("Excluir tarefa", "Tem certeza que deseja excluir está tarefa?", [
      {
        text: "Cancelar",
        style: "cancel"
      },
      {
        text: "Sim",
        style: "destructive",
        onPress: () => setTasks((prevState) => prevState.filter(task => task.id !== taskId))
      }
    ]);
  }

  function renderItem({ item }: { item: TasksProps }){
    return (
      <TaskItem 
        data={item} 
        onCheck={handlleCheckTask}
        onRemove={handleRemoveTask} 
      />
    )
  }

  const animatedHeader = useAnimatedStyle(() => {
    return {
      transform: [ { translateY: header.value } ]
    } 
  });

  const animatedInput = useAnimatedStyle(() => {
    return {
      transform: [ { translateY: interpolate(input.value, [0, 0.5, 1], [-50, 25, 0])  } ],
      opacity: interpolate(input.value, [0, 1], [0, 1]),
    } 
  });

  useEffect(() => {
    header.value = withSequence(
      withTiming(header.value, { duration: 400 }), 
      withTiming(35, { duration: 600 }), 
      withTiming(0, { duration: 800 })
    );

    input.value = withTiming(1, { duration: 2000, easing: Easing.ease });
  }, []);

  return (
    <View style={style.container}>
      <Animated.View style={[style.imageContainer, animatedHeader]}>
        <Image source={logo} resizeMode="cover" width={111} height={32} alt="todo logo" />
      </Animated.View>

      <Animated.View style={[style.inputContainer, animatedInput]}>
        <TextInput 
          style={[style.input, focus ? { borderColor: "#5E60CE" } : { borderColor: "#0D0D0D" }]}
          value={taskText}
          onChangeText={(text) => setTaskText(text)}
          onSubmitEditing={() => handleAddTask(taskText)}
          onFocus={() => setFocus(true)}  
          onBlur={() => setFocus(false)}
          returnKeyType="go"
          placeholder="Adicione uma nova tarefa" 
          placeholderTextColor="#808080"
        />

        <TouchableOpacity style={style.addButton} onPress={() => handleAddTask(taskText)}>
          <CirclePlus color="#F2F2F2" size={18} />
        </TouchableOpacity>
      </Animated.View>

      <View style={[style.infoContainer, {marginBottom: 20, width: "100%"}]}>
        <Animated.View style={style.infoContainer} entering={FadeInLeft.duration(1000).easing(Easing.ease)}>
          <Text style={[style.textInfo, {color: "#4EA8DE"}]}>Criadas</Text>
          <Text style={style.textCounter}>{tasks.length}</Text>
        </Animated.View>

        <Animated.View style={style.infoContainer} entering={FadeInRight.duration(1000).easing(Easing.ease)}>
          <Text style={[style.textInfo, {color: "#8284FA"}]}>Concluídas</Text>
          <Text style={style.textCounter}>{tasks.filter(task => task.checked).length}</Text>
        </Animated.View>
      </View>

      <FlatList 
        style={style.list}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{gap: 8, paddingBottom: 20}}
        data={tasks}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        ListEmptyComponent={() => <EmptyList />}
      />
    </View>
  );
};

export default Home;
