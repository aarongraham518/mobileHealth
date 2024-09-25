import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '../../constants/styles';

const ImageCard = ({ image, category, title, author, time, comments }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <ImageBackground source={image} style={styles.imageBackground} imageStyle={styles.image}>
        <View style={styles.overlay}>
          <View style={styles.header}>
            <Text style={styles.category}>{category}</Text>
            <FontAwesome name="share" size={18} color="#fff" />
          </View>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.footer}>
            <Text style={styles.author}>{author}</Text>
            <View style={styles.icons}>
              <FontAwesome name="clock-o" size={14} color="#fff" style={styles.icon} />
              <Text style={styles.time}>{time}</Text>
              <FontAwesome name="comment-o" size={14} color="#fff" style={styles.icon} />
              <Text style={styles.comments}>{comments}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: Dimensions.get('window').width - 40,
    height: 200,
    marginRight: 10,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    borderColor: Colors.primaryBlue100,
    borderWidth: 3
  },
  imageBackground: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-end',
  },
  image: {
    borderRadius: 8,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 10,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  category: {
    color: Colors.primaryBlue100,
    backgroundColor: Colors.primaryBlueBackground,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    fontSize: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  author: {
    fontSize: 12,
    color: '#fff',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 8,
  },
  time: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 4,
  },
  comments: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 4,
  },
});

export default ImageCard;
