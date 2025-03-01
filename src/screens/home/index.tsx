import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useRef } from "react";
import { CirclePlus } from 'lucide-react-native';
import style from "./style";

const logo = require("../../../assets/logo-todo.png");

function Home(){
  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <Image source={logo} resizeMode="cover" width={111} height={32} />
      </View>

      <View style={style.inputContainer}>
        <TextInput 
          style={style.input}
          placeholder="Adicione uma nova tarefa" 
          placeholderTextColor="#808080"
        />

        <TouchableOpacity style={style.addButton}>
          <CirclePlus color="#F2F2F2" size={18} />
        </TouchableOpacity>
      </View>

      <View style={[style.infoContainer, {marginBottom: 20, width: "100%"}]}>
        <TouchableOpacity>
          <View style={style.infoContainer}>
            <Text style={[style.textInfo, {color: "#4EA8DE"}]}>Criadas</Text>
            <Text style={style.textCounter}>0</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={style.infoContainer}>
            <Text style={[style.textInfo, {color: "#8284FA"}]}>Concluídas</Text>
            <Text style={style.textCounter}>0</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
