import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import React, { useState,useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Todos from "../component/Todos";
import { useDispatch } from "react-redux";
 import { addTodo } from "../Redux/slices/Todo.slices";

const Home = ({}) => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  

  const dispatch = useDispatch();

  useEffect(() => {
    trackStorage();
  }, []);

  const trackStorage = async () => {
    const asyncTodos = await AsyncStorage.getItem("todos");
    if (asyncTodos) setTodos(JSON.parse(asyncTodos));
  };

  const createTodo = async () => {
    dispatch(addTodo({ title, description }));
  };

  //     if (todos.find((item) => item.title === singleTodo.title)) {
  //       alert("duplicated title");
  //     } else {
  //       const allTodos = [...todos,singleTodo ];
  //       await AsyncStorage.setItem("todos", JSON.stringify(allTodos));
  //       setTodos(allTodos);
  //     }
  //   }
  // };

  // const removeItem = async (id) => {
  //   const NewItems = todos.filter((item) => id !== item.id);
  //   await AsyncStorage.setItem("todos", NewItems);
  //   setTodos(NewItems);
  // };
    //   const allTodos = [...todos, singleTodo];
    //   setTodos(allTodos);
    // }


  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 50,
      }}
    >
      <Text style={styles.title}>To-Do</Text>
      <TextInput
        onChangeText={(value) => setTitle(value)}
        style={styles.input}
        placeholder="Enter Your Todo"
      />
      <TextInput
        onChangeText={(value) => setDescription(value)}
        style={styles.input}
        placeholder="Description"
      />
      <TouchableOpacity style={styles.button} onPress={addTodo}>
        <Text style={{ color: "#fff", fontSize: 20 }}>Save</Text>
      </TouchableOpacity>
      {todos.length !== 0 && (
        <>
          <View style={styles.divider} />
          <Todos todos={todos} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "500",
    fontSize:30,
    marginBottom: 15,
    
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    width: 200,
    backgroundColor:"white",
  },
  button: {
    padding: 5,
    backgroundColor: "blue",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    paddingHorizontal: 40,
  },
  divider: {
    width: "95%",
    height: 1,
    backgroundColor: "gray",
    marginVertical: 20,
  },
});
export default Home;
