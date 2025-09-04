import { useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import { Check, Trash2 } from "lucide-react-native";

import style from "./style";

import Animated, { 
  SlideInLeft, SlideOutLeft, Easing, LinearTransition,
  useSharedValue, useAnimatedStyle, withTiming
} from "react-native-reanimated";

import TasksProps from "../../types/task";

function TaskItem({ data, onCheck, onRemove }: { 
  data: TasksProps, 
  onCheck: (data: TasksProps) => void,
  onRemove: (id: number) => void 
}) {
  const checked = useSharedValue(false);

  const checkedAnimation = useAnimatedStyle(() => {
    return {
      color: checked.value ? withTiming("#808080") : withTiming("#F2F2F2"),
      textDecorationLine: checked.value ? "line-through" : "none",
    }
  });

  useEffect(() => {
    checked.value = data.checked;
  }, [data.checked])

  return (
    <Animated.View
      entering={SlideInLeft.duration(1000).easing(Easing.bounce)} 
      exiting={SlideOutLeft.duration(300)}
      layout={LinearTransition.springify()}
      style={[
        style.viewContainer, 
        data.checked ? { borderColor: "#262626", elevation: 0, shadowColor: "transparent", shadowOpacity: 0 } : "" 
      ]}
    >
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
      
      <Animated.Text style={[ style.textTask, checkedAnimation ]}>
        {data.task}
      </Animated.Text>

      <TouchableOpacity style={style.removeButton} onPress={() => onRemove(data.id)}>
        <Trash2 color="#808080" />      
      </TouchableOpacity>
    </Animated.View>
  );
}
export default TaskItem;