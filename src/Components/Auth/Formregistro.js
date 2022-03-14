import { View, Text } from 'react-native';
import React from 'react';
import {TextInput, Button} from "react-native-paper";
import {useFormik} from "formik";
import * as yup from "yup";
import {apideregisro} from "../../api/usuarios"
import {estiloformulario} from "../../styles";
import { ref } from 'yup';

export default function Formregistro(props) {

  const {cambioformulario} = props;

  const formik = useFormik ({
    initialValues: initialValues(),
    validationSchema: yup.object(validationSchema()),
    onSubmit: async (datosusuario) => {
      console.log(datosusuario)
      try {
        await apideregisro(datosusuario);
        console.log("ok")
        console.log(datosusuario)

      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <View>

      <TextInput 
      label="Correo" 
      style={estiloformulario.input}
      onChangeText = {(texto) => formik.setFieldValue("Correo", texto)}
      value={formik.values.Correo}
      error={formik.errors.Correo}
      />

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

      <TextInput 
      label=" Repetir contraseña" 
      style={estiloformulario.input} 
      secureTextEntry
      onChangeText = {(texto) => formik.setFieldValue("Rcontraseña", texto)}
      value={formik.values.Rcontraseña}
      error={formik.errors.Rcontraseña}
      />  
      
      <Button 
      mode='contained' 
      style={estiloformulario.btnSucces}
      onPress={formik.handleSubmit}
      >
        Registrarse
      </Button>

      <Button
      mode='Text' 
      style={estiloformulario.btnText} 
      labelStyle={estiloformulario.btnTextLabel}
      onPress={cambioformulario}
      >
        Iniciar sesión
      </Button>

    </View>
  );
}

function initialValues () {
  return {
    Correo: "",
    Usuario: "",
    Contraseña: "",
    Rcontraseña:""
  }
}

function validationSchema (){
  return{
    Correo: yup.string().email(true).required(true),
    Usuario: yup.string().required(true),
    Contraseña: yup.string().required(true),
    Rcontraseña: yup.string().required(true).oneOf([yup.ref("Contraseña")],true),
  };
}