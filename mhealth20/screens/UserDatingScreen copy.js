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
  },
  {
    id: Math.random(),
    firstName: "James",
    lastName: "Johnson",
    description: "Tech enthusiast and software engineer, always curious about the latest trends.",
    age: 28,
    gender: "male",
    identifyAs: "Man",
    orientation: "Straight",
    number: 9876543210,
    rating: 4.7,
    sparkBalance: 30,
    likeBalance: 60,
    premiumMember: true,
    profileImage: require("../assets/maledoc1.png"),
    latitude: 28.0215,
    longitude: -82.7735,
    profiles: {
      dating: {
        industry: ["tech", "engineering"],
        interests: ["tech-savvy", "hiking", "travel"],
        signs: ["Gemini", "Aquarius", "Libra"],
        socialLinks: {
          facebook: "https://facebook.com/jamesjohnson",
          instagram: "https://instagram.com/jamesjohnson",
          linkedin: "https://linkedin.com/in/jamesjohnson",
        },
        gender: "man",
        sexualOrientation: "Straight",
      },
      friendship: {
        industry: ["tech", "gaming"],
        interests: ["gamer", "hiking", "tech-talk"],
        signs: ["Gemini", "Aquarius", "Libra"],
        socialLinks: {
          facebook: "https://facebook.com/jamesjohnson",
          instagram: "https://instagram.com/jamesjohnson",
          linkedin: "https://linkedin.com/in/jamesjohnson",
        },
        gender: "man",
        sexualOrientation: "Straight",
        schoolInfo: {
          schoolName: "Tech University",
          major: "Computer Science",
          graduationYear: 2016,
        },
      },
      business: {
        industry: ["tech", "startups"],
        interests: ["entrepreneur", "tech-startups", "innovation"],
        socialLinks: {
          facebook: "https://facebook.com/jamesjohnson",
          instagram: "https://instagram.com/jamesjohnson",
          linkedin: "https://linkedin.com/in/jamesjohnson",
        },
        gender: "man",
        sexualOrientation: "Straight",
        student: false,
        schoolInfo: {
          schoolName: "Tech University",
          major: "Computer Science",
          graduationYear: 2016,
        },
        jobTitle: "Software Engineer",
        company: "InnovateX",
        websitePortfolio: "https://jamesjohnsontech.com",
      },
    },
  },
  {
    id: Math.random(),
    firstName: "Emily",
    lastName: "Williams",
    description: "Adventurous photographer with a passion for capturing the beauty of nature.",
    age: 30,
    gender: "female",
    identifyAs: "Woman",
    orientation: "Bisexual",
    number: 1239874560,
    rating: 4.8,
    sparkBalance: 50,
    likeBalance: 70,
    premiumMember: true,
    profileImage: require("../assets/femaledoc2.png"),
    latitude: 28.0205,
    longitude: -82.7735,
    profiles: {
      dating: {
        industry: ["photography", "travel"],
        interests: ["nature", "photography", "adventure"],
        signs: ["Leo", "Sagittarius", "Aries"],
        socialLinks: {
          facebook: "https://facebook.com/emilywilliams",
          instagram: "https://instagram.com/emilywilliams",
          linkedin: "https://linkedin.com/in/emilywilliams",
        },
        gender: "woman",
        sexualOrientation: "Bisexual",
      },
      friendship: {
        industry: ["photography", "art"],
        interests: ["photography", "travel", "outdoors"],
        signs: ["Leo", "Sagittarius", "Aries"],
        socialLinks: {
          facebook: "https://facebook.com/emilywilliams",
          instagram: "https://instagram.com/emilywilliams",
          linkedin: "https://linkedin.com/in/emilywilliams",
        },
        gender: "woman",
        sexualOrientation: "Bisexual",
        schoolInfo: {
          schoolName: "Photography Academy",
          major: "Nature Photography",
          graduationYear: 2015,
        },
      },
      business: {
        industry: ["photography", "art"],
        interests: ["nature", "creative projects", "freelance"],
        socialLinks: {
          facebook: "https://facebook.com/emilywilliams",
          instagram: "https://instagram.com/emilywilliams",
          linkedin: "https://linkedin.com/in/emilywilliams",
        },
        gender: "woman",
        sexualOrientation: "Bisexual",
        student: false,
        schoolInfo: {
          schoolName: "Photography Academy",
          major: "Nature Photography",
          graduationYear: 2015,
        },
        jobTitle: "Freelance Photographer",
        company: "Emily Williams Photography",
        websitePortfolio: "https://emilywilliamsphotos.com",
      },
    },
  },
  {
    id: Math.random(),
    firstName: "Alex",
    lastName: "Brown",
    description: "Fitness enthusiast and nutrition expert with a love for helping others achieve their goals.",
    age: 27,
    gender: "male",
    identifyAs: "Man",
    orientation: "Gay",
    number: 1597534560,
    rating: 4.6,
    sparkBalance: 35,
    likeBalance: 40,
    premiumMember: false,
    profileImage: require("../assets/maledoc3.png"),
    latitude: 28.0212,
    longitude: -82.7748,
    profiles: {
      dating: {
        industry: ["fitness", "wellness"],
        interests: ["fitness", "wellness", "cooking"],
        signs: ["Virgo", "Taurus", "Capricorn"],
        socialLinks: {
          facebook: "https://facebook.com/alexbrown",
          instagram: "https://instagram.com/alexbrown",
          linkedin: "https://linkedin.com/in/alexbrown",
        },
        gender: "man",
        sexualOrientation: "Gay",
      },
      friendship: {
        industry: ["fitness", "nutrition"],
        interests: ["workouts", "cooking", "healthy lifestyle"],
        signs: ["Virgo", "Taurus", "Capricorn"],
        socialLinks: {
          facebook: "https://facebook.com/alexbrown",
          instagram: "https://instagram.com/alexbrown",
          linkedin: "https://linkedin.com/in/alexbrown",
        },
        gender: "man",
        sexualOrientation: "Gay",
        schoolInfo: {
          schoolName: "Health & Wellness Institute",
          major: "Nutrition",
          graduationYear: 2017,
        },
      },
      business: {
        industry: ["fitness", "wellness"],
        interests: ["personal training", "fitness coaching", "nutrition"],
        socialLinks: {
          facebook: "https://facebook.com/alexbrown",
          instagram: "https://instagram.com/alexbrown",
          linkedin: "https://linkedin.com/in/alexbrown",
        },
        gender: "man",
        sexualOrientation: "Gay",
        student: false,
        schoolInfo: {
          schoolName: "Health & Wellness Institute",
          major: "Nutrition",
          graduationYear: 2017,
        },
        jobTitle: "Personal Trainer",
        company: "FitLife",
        websitePortfolio: "https://alexbrownfitness.com",
      },
    },
  },
  {
    id: Math.random(),
    firstName: "Maya",
    lastName: "Garcia",
    description: "Entrepreneur in the culinary world, blending flavors and cultures to create something unique.",
    age: 35,
    gender: "female",
    identifyAs: "Woman",
    orientation: "Straight",
    number: 1010101010,
    rating: 4.9,
    sparkBalance: 60,
    likeBalance: 80,
    premiumMember: true,
    profileImage: require("../assets/femaledoc4.png"),
    latitude: 28.0208,
    longitude: -82.7741,
    profiles: {
      dating: {
        industry: ["culinary", "business"],
        interests: ["food", "travel", "culture"],
        signs: ["Cancer", "Scorpio", "Pisces"],
        socialLinks: {
          facebook: "https://facebook.com/mayagarcia",
          instagram: "https://instagram.com/mayagarcia",
          linkedin: "https://linkedin.com/in/mayagarcia",
        },
        gender: "woman",
        sexualOrientation: "Straight",
      },
      friendship: {
        industry: ["culinary", "travel"],
        interests: ["foodie", "traveler", "culture"],
        signs: ["Cancer", "Scorpio", "Pisces"],
        socialLinks: {
          facebook: "https://facebook.com/mayagarcia",
          instagram: "https://instagram.com/mayagarcia",
          linkedin: "https://linkedin.com/in/mayagarcia",
        },
        gender: "woman",
        sexualOrientation: "Straight",
        schoolInfo: {
          schoolName: "Culinary Institute",
          major: "Culinary Arts",
          graduationYear: 2012,
        },
      },
      business: {
        industry: ["culinary", "business"],
        interests: ["entrepreneurship", "food business", "culinary arts"],
        socialLinks: {
          facebook: "https://facebook.com/mayagarcia",
          instagram: "https://instagram.com/mayagarcia",
          linkedin: "https://linkedin.com/in/mayagarcia",
        },
        gender: "woman",
        sexualOrientation: "Straight",
        student: false,
        schoolInfo: {
          schoolName: "Culinary Institute",
          major: "Culinary Arts",
          graduationYear: 2012,
        },
        jobTitle: "Chef & Owner",
        company: "Maya's Bistro",
        websitePortfolio: "https://mayasbistro.com",
      },
    },
  },
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
