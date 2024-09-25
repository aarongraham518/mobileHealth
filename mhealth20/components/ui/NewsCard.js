import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '../../constants/styles';

const NewsCard = ({ image, category, title, author, time, comments }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <View style={styles.header}>
          <Text style={styles.category}>{category}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.footer}>
          <Text style={styles.author}>{author}</Text>
          <View style={styles.footerIcons}>
            <FontAwesome name="comment-o" size={14} color="#777" />
            <Text style={styles.comments}>{comments}</Text>
            <FontAwesome name="share" size={14} color="#777" style={styles.shareIcon} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '91%',
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    marginVertical: 8,
    marginLeft: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    // padding: 20,
    borderWidth: 2,
    borderColor: Colors.primaryBlue100
    
  },
  image: {
    width: 110,
    height: 110,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderColor: 'black',
    borderWidth: 1
  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  category: {
    fontSize: 12,
    color: Colors.primaryBlue100,
    backgroundColor: Colors.primaryBlueBackground,
    padding: 4,
    borderRadius: 4,
  },
  time: {
    fontSize: 12,
    color: '#aaa',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  author: {
    fontSize: 12,
    color: '#777',
  },
  footerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  comments: {
    fontSize: 12,
    color: '#777',
    marginLeft: 4,
  },
  shareIcon: {
    marginLeft: 16,
  },
});

export default NewsCard;
