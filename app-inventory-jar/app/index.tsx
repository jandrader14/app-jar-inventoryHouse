import { Text, View , Button} from "react-native";
import { router } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hola Mundo!</Text>

      
    <Button
        title="Ir al Login"
        onPress={() => router.push("/login")}
      />
    </View>
  );
}
