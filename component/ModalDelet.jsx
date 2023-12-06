import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Modal,
} from "react-native";
function ModalDelete({ modalVisible, setModalVisible, item }) {
  return (
    <>
      <Modal visible={modalVisible} transparent={true} style={styles.modal}>
        <View style={styles.conteinerItem}>
          <Text style={styles.tex}>{item} </Text>
          <Button
            title="Boton"
            color="#747bff"
            onPress={() => setModalVisible(false)}
          />
        </View>
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  modal: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
  conteinerItem: {
    flex: 1,
    backgroundColor: "#2135479f",
    alignItems: "center",
    justifyContent: "center",
  },
  tex: {     
    color:"#fff", 
    fontSize:"1rem",
    fontWeight: 600,   
    
  },
});
export default ModalDelete;