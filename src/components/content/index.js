import React, {useState} from "react";
import { StyleSheet, Button, TextInput, Text, View } from "react-native";
const Content = () => {
    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [n3, setN3] = useState('');
    const [media, setMedia] = useState('');

    function calcMedia(){
         setMedia(((parseInt(n1)+parseInt(n2)+parseInt(n3)) / 3));
         alert(media);
        }

    return(
        <View style={styles.container}>
            <Text>Nota 1</Text>
            <TextInput
            style={styles.input}
            placeholder="Digite a nota 1"
            keyboardType="numeric"
            onChangeText={(n1) => setN1(n1)}
            value={n1}
            
            />
            <Text>Nota 2</Text>
            <TextInput 
            style={styles.input}
            placeholder="Digite a nota 2"
            keyboardType="numeric"
            onChangeText={(n2) => setN2(n2)} 
            value={n2}
            
            />
            <Text>Nota 3</Text>
            <TextInput
            style={styles.input}
            placeholder="Digite a nota 3"
            keyboardType="numeric"
            onChangeText={(n3) => setN3(n3)}
            value={n3}
            
            />
            <Button 
            style={styles.btn}
            title="Calcular média"
            color= "#FF8E00"
            onPress={calcMedia}
            />    
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: '15%',
        alignContent: 'center',
        justifyContent: 'center'
    },
    input:{
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#FF8E00',
        marginBottom: '4%'
    },
    btn:{
        marginTop: '5%',
        borderRadius: 5
    }
});

export default Content;