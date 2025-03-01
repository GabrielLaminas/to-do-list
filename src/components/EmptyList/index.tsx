import { View, Text, Image } from "react-native";
import style from "./style";

const clipboard = require("../../../assets/clipboard.png");

function EmptyList() {
  return (
    <View style={style.viewContainer}>
      <View style={style.imageContainer}>
        <Image 
          source={clipboard} resizeMode="cover" 
          width={56} height={56}
        />
      </View>

      <Text style={style.textEmpty}>
        <Text style={style.textEmptyBold}>Você ainda não tem tarefas cadastradas</Text>{"\n"}
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
export default EmptyList