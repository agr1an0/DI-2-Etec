import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style = {styles.pagina}>
      <ScrollView
      style = {styles.scroll}
      showsVerticalScrollIndicator = {true}

      contentContainerStyle = {{alignItems: 'center'}}
      >
      
    <View style = {styles.cantos}>
    </View>
    <View style = {styles.container1}>
      <Text style={{color: 'white', padding: 5, width: '75%', fontSize: 20}}>Florence Nightingale</Text>
      <StatusBar style="auto" />
    </View>
    <View style = {styles.container2} >
    <Image
    style = {{width: 200, height: 200, border: 'solid black 3px'}}
    source = {{ uri: 'https://www3.unicentro.br/petfisica/wp-content/uploads/sites/54/2022/05/Florence-Nightingale.jpg' }
  } 
    >
      
    </Image>
    </View>
    <View style = {styles.container3}>
      <Text style={{backgroundColor: '#dc0b0b', color: 'white', padding: 30, fontSize: 30, border: 'solid black 6px', justifyContent: 'center'}}>Dama da Lampada</Text>
      <Text style = {styles.texto}>A Florence foi uma mulher extremamente inteligente vinda de uma familía rica, a Semana da Enfermagem começa em sua data de nascimento, 12 de Maio</Text>
    </View>
    
    <View style = {styles.container3}>
        <Text style={{backgroundColor: '#08deff' ,color: 'white', padding: 30, width: 'auto', fontSize: 25, border: 'solid black 6px' }}>Por Que a Lampada?</Text>
      <Text style = {styles.texto}>
      Tendo em vista seus conhecimentos, o nome veio da imagem dela peregrinando com sua lampada durante as noites
      </Text>
    </View>
    
    <View style = {styles.container3}>
        <Text style={{backgroundColor: '#ff990b' ,color: 'white', padding: 30, width: 'auto', fontSize: 25, border: 'solid black 6px' }}>Quais Foram as Contribuições Dela?</Text>
      <Text style = {styles.texto}>
        Ela participou da guerra da Crimeia reduzindo as mortos por volta de 40% pra 4%, com seus estudos. Ela notou o impacto que o ambientes faz no paciente, necessidade de higienização e do isolamento de pacientes contagiosos. Ela fez diversos outros feitos que fizeram-a ser conhecida internacionalmente, como o uso de graficos para suas ideias. Vale resaltar que ela comprava alguns items necessarios do próprio dinheiro ao invés de recebe-los sempre dos hospitais, resaltando seu interesse no cuidado
      </Text>
    </View>
    
    <View style = {styles.container3}>
        <Text style={{backgroundColor: '#ff0cd6' ,color: 'white', padding: 30, width: 'auto', fontSize: 25, border: 'solid black 6px' }}>Ok, não sei o que falar mas...: </Text>
      <Text style = {styles.texto}>
        ELA TINHA 1 FUCKIN CORUJA, ELA CARREGAVA ELA NO FUCKIN BOLSO 0_0, também teve 60+ gatos; era britânica; se recusou a casar porque considerava isso o fim da carreira dela (ela era top pra época); fez diversas viagens pelo mundo.
      </Text>
    </View>
    
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  pagina: {
    flex: 1,
    backgroundColor: '#010371',
  },
  cantos: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    borderRightWidth: '3vw',
    borderLeftWidth: '3vw',
    borderColor: '#370071',
  },
  container1: {
    position: 'relative',
    width: 'auto',
    backgroundColor: '#3302e6',
    border: 'solid #fffb0c 3px' ,
    alignItems: 'center',
    alignSelf: 'center',
  },
  texto: {
    fontSize: 20,
    color: 'white',
    paddingBottom: 2,
  },
  container2:{
    position: 'relative',
    maxWidth: '40%',
    minWidth: '20%',
    maxHeight: '40%',
    minHeight: '20%',
    backgroundColor: '#3302e6',
    border: 'solid #fffb0c 3px',
    alignItems: 'center',
    alignSelf: 'center',
  },
  container3: {
    position: 'relative',
    width: '80%',
    backgroundColor: '#3900d7',
    alignItems: 'center',
    marginTop: 5,
    alignSelf: 'center',
    border: 'solid #fffb0c 3px',
  },
  scroll: {
    width: '100%',
    height: '100%',
  }
});
