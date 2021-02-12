import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, 
        Text, 
        TouchableOpacity, 
        View, 
        Image,
        Alert,
        Button } from 'react-native';
import { tailwind } from './tailwind.js';

const App = () => {

  const aPic = {
                width: 200,
                height: 300,
                uri: "https://picsum.photos/200/300", };

  return (
    <SafeAreaView style={tailwind('h-full bg-gray-100')}>
      
      <View style={tailwind('pt-12 items-center')}>

        <View style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>
          <Text 
            style={tailwind('text-lg text-blue-800 font-semibold')}
            numberOfLines={1}
            ellipsizeMode={'tail'}>
            Hello World! Feel free to have a look around.
          </Text>
        </View>

        <View style={tailwind('p-1')} />

        <View style={tailwind('bg-blue-200 px-3 py-1 rounded-md')}>
          <TouchableOpacity onPress={() => console.log("Correct!")}>
            <Image
              blurRadius={0.5}
              source={aPic} />
          </TouchableOpacity>
        </View>

        <View style={tailwind('p-1')} />

        <View style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>
          <Button
            color="blue"
            title="I am a clickable button."
            onPress={() => Alert.alert("Correct!", "This is a button", [
              { text: "Yes", onPress: () => console.log("Yes indeed.") }, 
              { text: "No", onPress: () => console.log("No indeed.") },
            ])}
          />

        </View>

        <StatusBar style="auto" />

      </View>

    </SafeAreaView>
  );
}

export default App;
