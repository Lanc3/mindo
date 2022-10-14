import * as Font from "expo-font";

export default useFonts = async () => {
   await Font.loadAsync({
      "Merriweather": require("../assets/fonts/Merriweather-Regular.ttf"),
    });
};