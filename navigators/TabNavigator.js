import React from 'react'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import StatusDaSemanaScreen from '../screens/StatusdaSemanaScreen';
import BenchmarkingComparativoScreen from '../screens/BenchmarkingComparativoScreen';
import ViewCompaniesScreen from '../screens/ViewCompaniesScreen'; // Certifique-se de que o caminho está correto
import { AntDesign, MaterialIcons, Foundation } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import CompanyRegistrationScreen from '../screens/CompanyRegistrationScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: '#6495ED', // Cor de fundo da barra de navegação
          borderTopWidth: 0,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          let IconComponent;

          if (route.name === 'Home') {
            iconName = 'home';
            IconComponent = AntDesign;
          } else if (route.name === 'StatusDaSemana') {
            iconName = 'event'; // Nome alternativo para o ícone de calendário
            IconComponent = MaterialIcons;
          } else if (route.name === 'BenchmarkingComparativo') {
            iconName = 'graph-bar';
            IconComponent = Foundation;
          } else if (route.name === 'CompanyRegistration') {
            iconName = 'plus';
            IconComponent = Foundation;
          } else if (route.name === 'ViewCompaniesScreen') { // Adicione esta linha
            iconName = 'eye'; // Escolha um ícone adequado
            IconComponent = AntDesign; // Escolha o componente de ícone
          }

          return <IconComponent name={iconName} size={size} color="#FFFFFF" />;
        },
        tabBarLabelStyle: {
          display: 'none', // Esconde os rótulos das abas
        },
        headerStyle: {
          backgroundColor: '#6495ED', // Cor de fundo do cabeçalho
        },
        headerTintColor: '#FFFFFF', // Cor do texto do cabeçalho
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Inicial' }}
      />
      <Tab.Screen
        name="StatusDaSemana"
        component={StatusDaSemanaScreen}
        options={{ title: 'Status da Semana' }}
      />
      <Tab.Screen
        name="BenchmarkingComparativo"
        component={BenchmarkingComparativoScreen}
        options={{ title: 'Benchmarking Comparativo' }}
      />
      <Tab.Screen
        name="CompanyRegistration"
        component={CompanyRegistrationScreen}
        options={{ title: 'Cadastro de Empresa' }} // Título que aparecerá no cabeçalho
      />
      <Tab.Screen
        name="ViewCompaniesScreen"
        component={ViewCompaniesScreen}
        options={{ title: 'Visualizar Empresas' }} // Título para visualizar empresas
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
