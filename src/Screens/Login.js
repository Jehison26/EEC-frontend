import react, {useState} from "react";
import {StyleSheet, View, Text, Image, KeyboardAvoidingView, Platform} from "react-native";
import Formregistro from "../Components/Auth/Formregistro";
import Formlogin from "../Components/Auth/formlogin";
import logo from "../../assets/logo.png"
import {layoutStyle} from "../styles";

export default function Login () {
 const [showLogin, setshowLogin] = useState(false);

 const cambioformulario = ()=> setshowLogin(!showLogin);



    return(
    <View style = { layoutStyle.container } >
    <Image style = {styles.logo} source={logo} />
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            {showLogin ? <Formlogin cambioformulario={cambioformulario}/> : <Formregistro cambioformulario={cambioformulario}/>}
        </KeyboardAvoidingView>
    </View>
    )
};

const styles = StyleSheet.create({
    logo: {
        width:"100%",
        height: 100,
        resizeMode: "contain",
        marginBottom: 10
    },
});