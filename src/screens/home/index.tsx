import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { CirclePlus } from 'lucide-react-native';
import style from "./style";

const logo = require("../../../assets/logo-todo.png");

function Home(){
  return (
    <View style={style.container}>
      <View>
        <Image source={logo} resizeMode="cover" width={111} height={32} />
      </View>

      <View>
        <TextInput />

        <TouchableOpacity>
          <CirclePlus color="#F2F2F2" size={16} />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <View>
            <Text>Criadas</Text>
            <Text>0</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View>
            <Text>Concluídas</Text>
            <Text>0</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
