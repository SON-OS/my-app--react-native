import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import{ useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import Todo from './Todo';

const Completed = () => {
  const [doneTodos, setDoneTodos] = useState([]);
  const {todos} = useSelector(state => state.todo);

  useEffect(() => {
    if(todos){
      const filteredTodos = todos.filter(res => res.done);
      setDoneTodos(filteredTodos);
    }
  }, [todos]);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {doneTodos.length ? (
        <>
      {doneTodos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
        </>
      ): <Text>No Todos Found!</Text>}
    </View>
  )
}




// import { useNavigation, useRoute } from "@react-navigation/native";

// const Completed = () => {
//   const navigation = useNavigation();
//   const params = useRoute().params;
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "flex-start",
//         alignItems: "center",
//         padding: 100,
//         fontWeight: "bold",
//       }}
//     >
//       {params &&(
//         <View style={{textAlign:'center'}}>
//         <Text
//         style={{
//           fontWeight: "bold",
//           fontSize: 30,
//           marginBottom: 8,
//           paddingHorizontal: 100,
//           borderColor: "black",
//           backgroundColor: "white",
//           borderRadius: 10,
//           borderWidth: 3,
//           borderStyle: "solid",
//           textAlign:'center'
//         }}
//       >
//         {params.title}
//       </Text>
//       <Text
//         style={{
//           fontWeight: "bold",
//           fontSize: 20,
//           marginBottom: 20,
//           paddingHorizontal: 100,
//           paddingVertical:5,
//           borderColor: "black",
//           backgroundColor: "white",
//           borderRadius: 10,
//           borderWidth: 2,
//           borderStyle: "solid",
//           textAlign:'center'
//         }}
//       >
//         {params.id}
//       </Text>
//       </View>
// )}

//       <TouchableOpacity>
//         style={styles.button}
//         Text={"Back to home"}
//         onPress={() => navigation.navigate("Home")}
//         </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#eee",
//     alignItems: "center",
//     justifyContent: "flex-start",
//     paddingTop: 25,
//   },
//   button: {
//     alignItems: "center",
//     backgroundColor: "#aaa",
//     padding: 10,
//     borderWidth: 2,
//     borderRadius: 10,
//     width: 150,
//     fontWeight: "bolder",
//   },
// });

export default Completed;
