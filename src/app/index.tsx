import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// TODO: add image links
const gridPhotos = [];

export default function GroupProfileScreen() {
  const handleAlertPress = () => {
    Alert.alert('Alert Button pressed');
  };

  return (
    <View style={styles.screen}>
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="chevron-back" size={26} color="#000" />
          </TouchableOpacity>
          <View style={styles.headerTitleBlock}>
            <Text style={styles.headerTitle}>Group Profile</Text>
            <Text style={styles.headerSubtitle}>ootd_everyday</Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="add" size={26} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Avatar + stats row */}
        <View style={styles.profileRow}>
          <View style={styles.avatarRing}>
            <View style={styles.avatarCircle}>
              <Text style={styles.avatarText}>OO{'\n'}TD</Text>
            </View>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.statBlock}>
              <Text style={styles.statNumber}>53</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
            <View style={styles.statBlock}>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Members</Text>
            </View>
            <View style={styles.statBlock}>
              <Text style={styles.statNumber}>1</Text>
              <Text style={styles.statLabel}>Admins</Text>
            </View>
          </View>
        </View>

        {/* Bio */}
        <View style={styles.bioSection}>
          <Text style={styles.displayName}>OOTD Everyday</Text>
          <Text style={styles.bioText}>Fit check! 👕</Text>
          <Text style={styles.bioText}>You know we'll hype you up.</Text>
        </View>

        {/* Member dropdown button */}
        <View style={styles.memberButtonWrapper}>
          <TouchableOpacity style={styles.memberButton}>
            <Text style={styles.memberButtonText}>Member</Text>
            <Ionicons name="chevron-down" size={16} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Photo grid */}
        <View style={styles.grid}>
          {gridPhotos.map((uri, index) => (
            <View key={index} style={styles.gridItem}>
              <Image source={{ uri }} style={styles.gridImage} />
            </View>
          ))}
        </View>

        {/* Alert button */}
        <View style={styles.alertButtonWrapper}>
          <Button title="Alert" onPress={handleAlertPress} color="#ED4956" />
        </View>
      </ScrollView>

      {/* Bottom tab bar */}
      <View style={styles.tabBar}>
        <Ionicons name="home-outline" size={26} color="#000" />
        <Ionicons name="search-outline" size={26} color="#000" />
        <Ionicons name="film-outline" size={26} color="#000" />
        <Ionicons name="bag-outline" size={26} color="#000" />
        <Ionicons name="person-circle-outline" size={26} color="#000" />
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  screen: {
    // TODO: styling
  },
  container: {
    // TODO: styling
  },
  header: {
    // TODO: styling
  },
  headerTitleBlock: {
    // TODO: styling
  },
  headerTitle: {
    // TODO: styling
  },
  headerSubtitle: {
    // TODO: styling
  },
  profileRow: {
    // TODO: styling
  },
  avatarRing: {
    // TODO: styling
  },
  avatarCircle: {
    // TODO: styling
  },
  avatarText: {
    // TODO: styling
  },
  statsRow: {
    // TODO: styling
  },
  statBlock: {
    // TODO: styling
  },
  statNumber: {
    // TODO: styling
  },
  statLabel: {
    // TODO: styling
  },
  bioSection: {
    // TODO: styling
  },
  displayName: {
    // TODO: styling
  },
  bioText: {
    // TODO: styling
  },
  memberButtonWrapper: {
    // TODO: styling
  },
  memberButton: {
    // TODO: styling
  },
  memberButtonText: {
    // TODO: styling
  },
  grid: {
    // TODO: styling
  },
  gridItem: {
    // TODO: styling
  },
  gridImage: {
    // TODO: styling
  },
  alertButtonWrapper: {
    // TODO: styling
  },
  tabBar: {
    // TODO: styling
  },
});