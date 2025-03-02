import { View, Text, TouchableOpacity } from "react-native";
import { Check, Trash2 } from "lucide-react-native";
import TasksProps from "../../types/task";
import style from "./style";

function TaskItem({ data, onCheck, onRemove }: { 
  data: TasksProps, 
  onCheck: (data: TasksProps) => void,
  onRemove: (id: number) => void 
}) {
  return (
    <View style={
      [
        style.viewContainer, 
        data.checked ? { borderColor: "#262626", elevation: 0, shadowColor: "transparent", shadowOpacity: 0 } : "" ]
      }>
      <TouchableOpacity style={style.buttonChecked} onPress={() => onCheck(data)}>
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

      <TouchableOpacity style={style.removeButton} onPress={() => onRemove(data.id)}>
        <Trash2 color="#808080" />      
      </TouchableOpacity>
    </View>
  );
}
export default TaskItem;