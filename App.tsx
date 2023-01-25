import { StatusBar } from 'expo-status-bar';
import { Text, Image } from 'react-native';
import { Container, Profile } from "./src/components/Container";

export default function App() {
  return (
    <Container>
      <Profile>
        <Image
          source={require("./assets/rectangle-11.png")}
        />
        <Text style={{ color: '#fff' }}>Toni Kross</Text>
      </Profile>
      <StatusBar style="light" />
    </Container>
  );
}


