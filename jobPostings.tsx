import React from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const jobs = [
  { id: '1', title: 'Driver', location: 'ECR, Chennai', date: 'Oct 5, 2023' },
  { id: '2', title: 'Petrol Station worker', location: 'Anna Nagar, Chennai', date: 'Oct 3, 2023' },
  { id: '3', title: 'Cashier', location: 'Guindy, Chennai', date: 'Oct 1, 2023' },
];

const JobPostingScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/JobPostingScreen_Image.png')} style={styles.headerImage}>
        <View style={styles.headerOverlay}>
          <Text style={styles.headerText}>Hello there! Find flexi jobs</Text>
        </View>
      </ImageBackground>
      
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search for jobs..." placeholderTextColor="#777" />
      </View>
      
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.jobCard}>
            <Text style={styles.jobTitle}>{item.title}</Text>
            <Text style={styles.jobDetails}>Location: {item.location} - Posted on: {item.date}</Text>
            <TouchableOpacity style={styles.applyButton}>
              <Text style={styles.applyText}>Apply</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.footerNav}>
        <Ionicons name="home" size={24} color="#004D61" />
        <Ionicons name="chatbubble-ellipses" size={24} color="#004D61" />
        <Ionicons name="calendar" size={24} color="#004D61" />
        <Ionicons name="notifications" size={24} color="#004D61" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  headerImage: {
    width: '100%',
    height: 180,
    justifyContent: 'center',
  },
  headerOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  headerText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  searchContainer: {
    padding: 10,
  },
  searchInput: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 40,
    elevation: 2,
  },
  jobCard: {
    backgroundColor: 'white',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    elevation: 2,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  jobDetails: {
    color: '#555',
    marginVertical: 5,
  },
  applyButton: {
    backgroundColor: '#004D61',
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  applyText: {
    color: 'white',
    fontWeight: 'bold',
  },
  footerNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: 'white',
    elevation: 5,
  },
});

export default JobPostingScreen;
