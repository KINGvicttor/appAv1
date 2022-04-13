import React, {useState} from "react";
import { StyleSheet, Button, TextInput, Text, View, ScrollView} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const Content = () => {
    const [n1, setN1] = useState(null);
    const [n2, setN2] = useState(null);
    const [n3, setN3] = useState(null);
    const [num, setNum] = useState('');
    const [media, setMedia] = useState(0);

    function calcMedia(){
         setMedia(((parseFloat(n1)+parseFloat(n2)+parseFloat(n3)) / 3));
         if(parseFloat(media) >= 7){
             alert('Sua média é: ' + parseFloat(media) + ", você está aprovado!")
         }else{
            alert('Sua média é: ' + parseFloat(media) + ", você está reprovado.")
         }
        }
    function calcIntervalo(){
        if(parseFloat(num) > 0 && parseFloat(num) <= 10){
            alert('O numero está entre 1 e 10.')
        }else if(parseFloat(num) > 10 && parseFloat(num) <= 20){
            alert('O numero está entre 10 e 20.')
        }else if(parseFloat(num) > 20 && parseFloat(num) <= 30){
            alert('O numero está entre 10 e 20.')
        }
    }
    return(
        
        <ScrollView style={styles.container}>
            <View style={styles.forms}>
                <LinearGradient style={styles.titleBg} colors={['#F5AF19','#F12711']} start={{x:0,y:1}} end={{x:1,y:0}}>
                <Text style={styles.titleText}>Calcular Média</Text>
                </LinearGradient>                
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
                <LinearGradient style={styles.titleBg} colors={['#F5AF19','#F12711']} start={{x:0,y:1}} end={{x:1,y:0}}>
                <Text style={styles.titleText}>Calcular Intervalo</Text>
                </LinearGradient>              
                <Text>Número 1</Text>
                <TextInput
                style={styles.input}
                placeholder="Digite um número"
                keyboardType="numeric"
                onChangeText={(num) => setNum(num)}
                value={num}
                />
                <Button 
                style={styles.btn}
                title="Calcular"
                color= "#FF8E00"
                onPress={calcIntervalo}
                />  

                <Text>Número 2</Text>
                <TextInput
                style={styles.input}
                placeholder="Digite um número"
                keyboardType="numeric"
                onChangeText={(num) => setNum(num)}
                value={num}
                />  
                <Button 
                style={styles.btn}
                title="Calcular"
                color= "#FF8E00"
                onPress={calcIntervalo}
                />  

                <Text>Número 3</Text>
                <TextInput
                style={styles.input}
                placeholder="Digite um número"
                keyboardType="numeric"
                onChangeText={(num) => setNum(num)}
                value={num}
                />
                <Button 
                style={styles.btn}
                title="Calcular"
                color= "#FF8E00"
                onPress={calcIntervalo}
                />  
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '80%'
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
        marginLeft: '15%',
        width: '75%',
        marginTop: '10%'
    },
    titleBg: {
        marginLeft: '25%',
        width: '50%',
        marginBottom: '2%',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,

    },
    titleText: {
        color: 'white',
        borderRadius: 5,

    }
});

export default Content;