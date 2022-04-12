import React, {useState} from "react";
import { StyleSheet, Button, TextInput, Text, View } from "react-native";
const Content = () => {
    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [n3, setN3] = useState('');
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [num3, setNum3] = useState('');
    const [media, setMedia] = useState('');

    function calcMedia(){
         setMedia(((parseInt(n1)+parseInt(n2)+parseInt(n3)) / 3));
         alert(media);
        }
    function calcIntervalo(){

    }
    return(
        <View style={styles.container}>
            <View style={styles.forms}>
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
                title="Calcular"
                color= "#FF8E00"
                onPress={calcMedia}
                />  
            </View>
            <View style={styles.forms}>
                <Text>Número 1</Text>
                <TextInput
                style={styles.input}
                placeholder="Digite um número"
                keyboardType="numeric"
                onChangeText={(num1) => setNum1(num1)}
                value={num1}
                />

                <Text>Número 2</Text>
                <TextInput
                style={styles.input}
                placeholder="Digite um número"
                keyboardType="numeric"
                onChangeText={(num2) => setNum1(num2)}
                value={num2}
                />  

                <Text>Número 3</Text>
                <TextInput
                style={styles.input}
                placeholder="Digite um número"
                keyboardType="numeric"
                onChangeText={(num3) => setNum1(num3)}
                value={num3}
                />
                <Button 
                style={styles.btn}
                title="Calcular"
                color= "#FF8E00"
                />  
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignContent: 'center',
        justifyContent: 'center'
    },
    input:{
        paddingLeft: '25%',
        paddingRight: '25%',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#FF8E00',
        marginBottom: '5%'
    },
    btn:{
        marginTop: '2%',
        borderRadius: 5,
    },
    forms:{
        marginTop: '10%'
    }
});

export default Content;