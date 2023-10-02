import { View, Text, TouchableOpacity, TouchableWithoutFeedback, } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { changeTodoStatus, deleteTodo } from "../Redux/slices/Todo.slices"
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
const Todo = ({ todo }) => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  return (
    <TouchableOpacity
    activeOpacity={0.8}
    style={{
      width: 200,
      minHeight: 50,
      padding: 15,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "cadetblue",
      marginBottom: 10,
      borderRadius: 5,
    }}
  >
    <Text
      onPress={() => navigation.navigate("Todo-details", todo)}
      style={{ color: "#fff" }}
    >
      {todo.title}
    </Text>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
      <TouchableWithoutFeedback
        onPress={() => dispatch(deleteTodo({ id: todo.id }))}
      >
        <FontAwesome5 name="trash" size={15} color="red" />
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => dispatch(changeTodoStatus({ id: todo.id }))}
      >
        <FontAwesome name="check-circle" size={15} color="green" />
      </TouchableWithoutFeedback>
    </View>
    </TouchableOpacity>
  );
};

export default Todo;
