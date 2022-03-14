import { StyleSheet } from "react-native";
import colores from "./colores";

const estiloformulario = StyleSheet.create ({
    input: {
        marginBottom: 10,
    },
    btnSucces: {
        padding: 5,
        backgroundColor: colores.primary,
    },
    btnText: {
        marginTop: 10,
    },
    btnTextLabel: {
        color: colores.dark,
    },
});

export default estiloformulario;
