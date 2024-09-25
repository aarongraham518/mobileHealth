based off of this code, add one scroll wheel that will allow my profile (primaryUserData) to be matched by anyone (usersData) 500 ft or more away from me.

import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";

// Primary User Data
const primaryUserData = {
  id: Math.random(),
  firstName: "Aaron",
  lastName: "Graham",
  description: "A mobile developer who enjoys the sound of beach waves and is always seeking new projects to enhance user experience.",
  age: 46,
  gender: "male",
  identifyAs: "Man",
  orientation: "Straight",
  number: 5182758237,
  rating: 1.0,
  sparkBalance: 22,
  likeBalance: 25,
  premiumMember: false,
  profileImage: require("../assets/myavatar.png"),
  latitude: 28.021,
  longitude: -82.774,
  profiles: {
    dating: {
      industry: ["technology", "ecommerce"],
      interests: ["fitness", "traveler", "career-driven", "exploring options"],
      signs: ["Aquarius", "Leo", "Sagittarius"],
      socialLinks: {
        facebook: "https://facebook.com/aarongraham",
        instagram: "https://instagram.com/aarongraham",
        linkedin: "https://linkedin.com/in/aarongraham",
      },
      gender: "man",
      sexualOrientation: "Straight",
    },
    friendship: {
      industry: ["technology", "ecommerce"],
      interests: ["fitness", "homebody", "foodie"],
      signs: ["Aquarius", "Leo", "Sagittarius"],
      socialLinks: {
        facebook: "https://facebook.com/aarongraham",
        instagram: "https://instagram.com/aarongraham",
        linkedin: "https://linkedin.com/in/aarongraham",
      },
      gender: "man",
      sexualOrientation: "Straight",
      schoolInfo: {
        schoolName: "University of Technology",
        major: "Computer Science",
        graduationYear: 2002,
      },
    },
    business: {
      industry: ["technology", "ecommerce"],
      interests: ["career-driven", "traveler", "fitness"],
      socialLinks: {
        facebook: "https://facebook.com/aarongraham",
        instagram: "https://instagram.com/aarongraham",
        linkedin: "https://linkedin.com/in/aarongraham",
      },
      gender: "man",
      sexualOrientation: "Straight",
      student: false,
      schoolInfo: {
        schoolName: "University of Technology",
        major: "Computer Science",
        graduationYear: 2002,
      },
      jobTitle: "Senior Mobile Developer",
      company: "Tech Solutions Inc.",
      websitePortfolio: "https://aarongraham.dev",
    //   resumeUpload: require("../assets/resume_aaron_graham.pdf"),
    },
  },
};


const usersData = [
  {
    id: Math.random(),
    firstName: "Sophie",
    lastName: "Miller",
    description: "A passionate artist with a love for creativity and expression.",
    age: 32,
    gender: "female",
    identifyAs: "Woman",
    orientation: "Straight",
    number: 1234567890,
    rating: 4.5,
    sparkBalance: 45,
    likeBalance: 50,
    premiumMember: true,
    profileImage: require("../assets/femaledoc5.png"),
    latitude: 28.022,
    longitude: -82.775,
    profiles: {
      dating: {
        industry: ["arts", "design"],
        interests: ["creative", "career-driven", "exploring options"],
        signs: ["Pisces", "Scorpio", "Cancer"],
        socialLinks: {
          facebook: "https://facebook.com/sophiemiller",
          instagram: "https://instagram.com/sophiemiller",
          linkedin: "https://linkedin.com/in/sophiemiller",
        },
        gender: "woman",
        sexualOrientation: "Straight",
      },
      friendship: {
        industry: ["arts", "design"],
        interests: ["creative", "foodie", "homebody"],
        signs: ["Pisces", "Scorpio", "Cancer"],
        socialLinks: {
          facebook: "https://facebook.com/sophiemiller",
          instagram: "https://instagram.com/sophiemiller",
          linkedin: "https://linkedin.com/in/sophiemiller",
        },
        gender: "woman",
        sexualOrientation: "Straight",
        schoolInfo: {
          schoolName: "Fine Arts Academy",
          major: "Visual Arts",
          graduationYear: 2014,
        },
      },
      business: {
        industry: ["arts", "design"],
        interests: ["career-driven", "traveler", "creative"],
        socialLinks: {
          facebook: "https://facebook.com/sophiemiller",
          instagram: "https://instagram.com/sophiemiller",
          linkedin: "https://linkedin.com/in/sophiemiller",
        },
        gender: "woman",
        sexualOrientation: "Straight",
        student: false,
        schoolInfo: {
          schoolName: "Fine Arts Academy",
          major: "Visual Arts",
          graduationYear: 2014,
        },
        jobTitle: "Creative Director",
        company: "Art & Design Co.",
        websitePortfolio: "https://sophiemillerart.com",
        // resumeUpload: require("../assets/resume_sophie_miller.pdf"),
      },
    },
  },
  {
    id: Math.random(),
    firstName: "Sandra",
    lastName: "Whyne",
    description: "A passionate artist with a love for creativity and expression.",
    age: 32,
    gender: "female",
    identifyAs: "Woman",
    orientation: "Straight",
    number: 1234567890,
    rating: 4.5,
    sparkBalance: 45,
    likeBalance: 50,
    premiumMember: true,
    profileImage: require("../assets/femaledoc4.png"),
    latitude: 28.0222,
    longitude: -82.773,
    profiles: {
      dating: {
        industry: ["arts", "design"],
        interests: ["creative", "career-driven", "exploring options"],
        signs: ["Pisces", "Scorpio", "Cancer"],
        socialLinks: {
          facebook: "https://facebook.com/sophiemiller",
          instagram: "https://instagram.com/sophiemiller",
          linkedin: "https://linkedin.com/in/sophiemiller",
        },
        gender: "woman",
        sexualOrientation: "Straight",
      },
      friendship: {
        industry: ["arts", "design"],
        interests: ["creative", "foodie", "homebody"],
        signs: ["Pisces", "Scorpio", "Cancer"],
        socialLinks: {
          facebook: "https://facebook.com/sophiemiller",
          instagram: "https://instagram.com/sophiemiller",
          linkedin: "https://linkedin.com/in/sophiemiller",
        },
        gender: "woman",
        sexualOrientation: "Straight",
        schoolInfo: {
          schoolName: "Fine Arts Academy",
          major: "Visual Arts",
          graduationYear: 2014,
        },
      },
      business: {
        industry: ["arts", "design"],
        interests: ["career-driven", "traveler", "creative"],
        socialLinks: {
          facebook: "https://facebook.com/sophiemiller",
          instagram: "https://instagram.com/sophiemiller",
          linkedin: "https://linkedin.com/in/sophiemiller",
        },
        gender: "woman",
        sexualOrientation: "Straight",
        student: false,
        schoolInfo: {
          schoolName: "Fine Arts Academy",
          major: "Visual Arts",
          graduationYear: 2014,
        },
        jobTitle: "Creative Director",
        company: "Art & Design Co.",
        websitePortfolio: "https://sophiemillerart.com",
        // resumeUpload: require("../assets/resume_sophie_miller.pdf"),
      },
    },
  }
  // Add other dummy users with same structure...
];

// UserCard Component
const UserCard = ({ user }) => (
  <View style={styles.card}>
    <Image source={user.profileImage} style={styles.avatar} />
    <Text style={styles.name}>
      {user.firstName} {user.lastName}, {user.age}
    </Text>
    <Text>{user.description}</Text>
    <Text>Rating: {user.rating}</Text>
    <Text>Sparks: {user.sparkBalance}, Likes: {user.likeBalance}</Text>
    <Text>{user.premiumMember ? "Premium Member" : "Free Member"}</Text>
    <Text style={styles.profileHeader}>Business</Text>
    <Text>Job Title: {user.profiles.business.jobTitle}</Text>
    <Text>Company: {user.profiles.business.company}</Text>
    <Text style={styles.profileHeader}>Dating</Text>
    <Text>Interests: {user.profiles.dating.interests.join(", ")}</Text>
    <Text style={styles.profileHeader}>Friendship</Text>
    <Text>Interests: {user.profiles.friendship.interests.join(", ")}</Text>
  </View>
);

// MapScreen Component
const UserDatingScreen = () => {
  const [selectedUser, setSelectedUser] = useState(null); // Track the selected user

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 28.021,
          longitude: -82.774,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {/* Primary User Marker */}
        <Marker
          coordinate={{
            latitude: primaryUserData.latitude,
            longitude: primaryUserData.longitude,
          }}
          onPress={() => setSelectedUser(primaryUserData)}
        >
            <Image source={primaryUserData.profileImage} style={styles.imageSpec}/>
          <Callout>
            <Text>{primaryUserData.firstName} {primaryUserData.lastName}</Text>
          </Callout>
        </Marker>

        {/* Other Users Markers */}
        {usersData.map((user) => (
          <Marker
            key={user.id}
            coordinate={{ latitude: user.latitude, longitude: user.longitude }}
            onPress={() => setSelectedUser(user)}
          >
            <Image source={user.profileImage} style={styles.imageSpec}/>
            <Callout>
              <Text>{user.firstName} {user.lastName}</Text>
            </Callout>
          </Marker>
        ))}
      </MapView>

      {/* Render Selected User's Info */}
      {selectedUser && (
        <ScrollView style={styles.userDetails}>
          <TouchableOpacity onPress={() => setSelectedUser(null)}>
            <Text style={styles.closeButton}>Close</Text>
          </TouchableOpacity>
          <UserCard user={selectedUser} />
        </ScrollView>
      )}
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
  profileHeader: {
    marginTop: 10,
    fontWeight: "bold",
  },
  userDetails: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    maxHeight: "40%",
    backgroundColor: "#fff",
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  closeButton: {
    textAlign: "right",
    color: "blue",
    fontWeight: "bold",
    marginBottom: 5,
  },
  imageSpec: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#0363d0",
  }
});

export default UserDatingScreen;