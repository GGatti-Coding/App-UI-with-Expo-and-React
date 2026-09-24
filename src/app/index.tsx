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
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 55,
    paddingBottom: 12,
    paddingHorizontal: 16,
  },
  headerTitleBlock: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#8e8e8e',
    marginTop: 2,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 8,
  },
  avatarRing: {
    width: 78,
    height: 78,
    borderRadius: 39,
    borderWidth: 3,
    borderColor: '#f97316',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarCircle: {
    width: 66,
    height: 66,
    borderRadius: 33,
    backgroundColor: '#2f8fe0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 15,
  },
  statsRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 12,
  },
  statBlock: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  statLabel: {
    fontSize: 13,
    color: '#333',
    marginTop: 2,
  },
  bioSection: {
    alignItems: 'flex-start',
    paddingTop: 12,
    paddingHorizontal: 16,
  },
  displayName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  bioText: {
    fontSize: 13,
    color: '#000',
    marginTop: 2,
    textAlign: 'left',
  },
  memberButtonWrapper: {
    paddingHorizontal: 16,
    paddingTop: 14,
  },
  memberButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#dbdbdb',
    borderRadius: 8,
    paddingVertical: 8,
  },
  memberButtonText: {
    fontWeight: '600',
    fontSize: 14,
    color: '#000',
    marginRight: 4,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
  },
  gridItem: {
    width: '33.333%',
    aspectRatio: 1,
    padding: 1,
  },
  gridImage: {
    width: '100%',
    height: '100%',
  },
  alertButtonWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
    backgroundColor: '#fff',
  },
});