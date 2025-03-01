import { View, Text, TouchableOpacity } from "react-native";
import { Check, Trash2 } from "lucide-react-native";
import TasksProps from "../../types/task";
import style from "./style";

function TaskItem({ data }: { data: TasksProps}) {
  return (
    <View style={
      [
        style.viewContainer, 
        data.checked ? { borderColor: "#262626", elevation: 0, shadowColor: "transparent", shadowOpacity: 0 } : "" ]
      }>
      <TouchableOpacity style={style.buttonChecked}>
        {
          data.checked 
          ? (
            <View style={style.viewChecked}>
              <Check color="#F2F2F2" width={14} height={14} />
            </View>
          ) 
          : <View style={style.viewNoChecked}></View> 
        }
      </TouchableOpacity>
      
      <Text 
        style={
          [style.textTask, data.checked ? { color: "#808080", textDecorationLine:"line-through" } : ""]
        }>
        {data.task}
      </Text>

      <TouchableOpacity style={style.removeButton}>
        <Trash2 color="#808080" />      
      </TouchableOpacity>
    </View>
  );
}
export default TaskItem;