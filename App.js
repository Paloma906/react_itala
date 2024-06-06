import React, {Component} from "react";
import { View, Text, Image,Button,StyleSheet,TextInput, TouchableOpacity} from "react-native";

/*function App(){
  return(
    <View>
      <Text style = {{color: 'blue', fontSize:50 , margin:20}}>Aula DS</Text>

    </View>
  )
  
};

export default App; */

/*-------------------------------------------------------------------------------- */

/*class App extends Component{
  
  render(){
    let nome = `Paisagem`;
    let img = `https://img.freepik.com/fotos-premium/ponto-de-vista-de-praia-vista-aerea-de-phuket-tailandia_33835-982.jpg?w=826`
    return(
      <View>
        <Text style = {{color:'red',fontSize:30,margin:35}}>Aula de Desenvolvimento</Text>
        <Image>
        source={{uri:img}}
        style={{width: 300, height:300}}
        </Image>
        <Text style={{fontSize:20}}>{nome}</Text>
        

        
      </View>

      
    );
  }
}
*/

/*------------------------------------------------------------------------------- */

/*class App extends Component{
  constructor(props){
    super(props);{
      this.state={
        nome: `Paloma`
      }
    }
    this.entrar = this.entrar.bind(this);
  }

  entrar(){
    this.setState({ 
      nome: 'Ana'
    })
  }
  
  render(){
    
    return(
      <View> style ={{marginTop: 30}}
      <Button title="Entrar" onPress={this.entrar}></Button>
        <Text style = {{color:'red',fontSize:30,margin:35, textAlign:`center`}}>
        {this.state.nome}
        </Text>
        
        
       
        

        
      </View>

      
    );
  }
}
*/

*class App extends Component{
  
  
  render(){
    
    return(
      <View> style ={{marginTop: 30}}
      <Image>
        source={require('./src/biscoito.png')}
        style={styles.img}

        
      </Image>
      <text>Frase</text>
      <TouchableOpacity style = {styles.botao}>
        <View style = {styles.btnArea}>
          <Text style = {styles.btnTexto}> Quebrar biscoito</Text>
        </View>
        
      </TouchableOpacity>
        
        
       
        

        
      </View>

      
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  img:{
    width:250,
    height:250
  },

  trextFrase:{
    fontSize:20,
    color:'#dd7b22',
    margin:30,
    fontStyle:'italic',
    textAlign:'center'


  },
  botao:{
    widht:230,
    height:50,
    borderWidth:2,
    borderColor:'#dd7b22',
    borderRadius:25,
  },

  btnArea:{
    flex:1,

  }
})

