import { 
  View, Text, Image, TextInput, TouchableOpacity, FlatList, Keyboard, Alert 
} from "react-native";
import { useState } from "react";
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

  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <Image source={logo} resizeMode="cover" width={111} height={32} />
      </View>

      <View style={style.inputContainer}>
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
      </View>

      <View style={[style.infoContainer, {marginBottom: 20, width: "100%"}]}>
        <View style={style.infoContainer}>
          <Text style={[style.textInfo, {color: "#4EA8DE"}]}>Criadas</Text>
          <Text style={style.textCounter}>{tasks.length}</Text>
        </View>

        <View style={style.infoContainer}>
          <Text style={[style.textInfo, {color: "#8284FA"}]}>Concluídas</Text>
          <Text style={style.textCounter}>{tasks.filter(task => task.checked).length}</Text>
        </View>
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
