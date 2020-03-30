import React from 'react';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';

import styles from './styles';

import logoImg from '../../assets/logo.png';

export default function Datail() {
    const navigation = useNavigation();
    const mensage = `Ola X, estou entrando em contato pois gostaria de ajudar no caso "cadelinha atropelada" com o valor de R$120,00.`;
    
    function navigateBack() {
        navigation.navigate('Incidents');
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: 'Herói do caso: Cadelinha atropelada', //assunto da mensagem
            recipients: ['teste@vaiquecola.com'], //para quem o e-mail sera enviado
            body: mensage, //mensagem do email
        })
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=+553399651096&text=${mensage}`)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                
                <TouchableOpacity style={styles.BackButton} onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
            <Text style={[styles.incidentProperty], {marginTop: 0}}>ONG:</Text>
                <Text style={styles.incidentValue}>APAD</Text>

                <Text style={styles.incidentProperty}>CASE:</Text>
                <Text style={styles.incidentValue}>Conserta a cadela da sua mão</Text>

                <Text style={styles.incidentProperty}>Valor:</Text>
                <Text style={styles.incidentValue}>R$ 120,00</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}