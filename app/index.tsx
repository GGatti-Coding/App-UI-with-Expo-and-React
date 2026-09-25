import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; // Fixed import source[cite: 6]
import { ProfileHeader } from '../components/ProfileHeader';
import { TabBarPlaceholder } from '../components/TabBarPlaceholder';
import { ContentPlaceholder } from '../components/ContentPlaceholder';
import { BottomNavigation } from '../components/BottomNavigation';

export default function IndexScreen() {
  const showAlert = () => Alert.alert('Alert Button pressed');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView>
          <ProfileHeader />
          <TabBarPlaceholder />
          <ContentPlaceholder />
        </ScrollView>
        <BottomNavigation />
        <Pressable 
          onPress={showAlert} 
          style={({ pressed }) => [
            styles.alertButton, 
            pressed && styles.pressed
          ]}
        >
          <Text style={styles.alertText}>Alert</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  alertButton: {
    backgroundColor: '#2563EB',
    padding: 16,
    margin: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.8,
  },
  alertText: {
    color: 'white',
    fontWeight: '700',
  },
});