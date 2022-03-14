import { View, Text } from 'react-native'
import React from 'react'
import {TextInput, Button} from "react-native-paper"
import { useFormik } from 'formik';
import * as yup from "yup";
import {estiloformulario} from "../../styles";

export default function Formlogin(props) {

  const {cambioformulario} = props;

  const formik = useFormik ({
    initialValues: initialValues(),
    validationSchema: yup.object(validationSchema()),
    onSubmit: (datosusuario) => {
      console.log("Registro de usuario enviado");
      console.log(datosusuario);
    },
  });


  return (
    <View>

      <TextInput 
      label="Nombre de usuario" 
      style={estiloformulario.input}
      onChangeText = {(texto) => formik.setFieldValue("Usuario", texto)}
      value={formik.values.Usuario}
      error={formik.errors.Usuario}
      />

      <TextInput 
      label="Contraseña" 
      style={estiloformulario.input} 
      secureTextEntry
      onChangeText = {(texto) => formik.setFieldValue("Contraseña", texto)}
      value={formik.values.Contraseña}
      error={formik.errors.Contraseña}
      />

      <Button
      mode='Text' 
      style={estiloformulario.btnText} 
      labelStyle={estiloformulario.btnTextLabel}
      onPress = {formik.handleSubmit}
      >
        Iniciar sesión
      </Button>
      
      <Button
      mode='contained' 
      style={estiloformulario.btnSucces}
      onPress={cambioformulario}
    >
        Registrarse
      </Button>

    </View>
  );
}

function initialValues () {
  return {
    Usuario: "",
    Contraseña: ""
  }
}

function validationSchema (){
  return{
    Usuario: yup.string().required(true),
    Contraseña: yup.string().required(true),
  };
}