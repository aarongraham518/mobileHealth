import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ImageCard from './ImageCard'; 

const newsData = [
  {
    image: require('../../assets/news/fitnessStretch.jpg'),
    category: 'Fitness',
    title: '10 Easy Exercises to Keep You Fit at Home!',
    author: 'Achmad Alimin',
    time: '08:45',
    comments: 15,
  },
  {
    image: require('../../assets/news/meditate.png'),
    category: 'Mental Health',
    title: 'The Benefits of Daily Meditation for Stress Relief',
    author: 'Jane Smith',
    time: '10:12',
    comments: 34,
  },
  {
    image: require('../../assets/news/fish.jpg'),
    category: 'Nutrition',
    title: 'Top 5 Superfoods to Boost Your Immunity',
    author: 'Mary Johnson',
    time: '12:30',
    comments: 28,
  },
];

const HorizontalScrollView = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={true} style={styles.scrollView}>
      {newsData.map((news, index) => (
        <ImageCard
          key={index}
          image={news.image}
          category={news.category}
          title={news.title}
          author={news.author}
          time={news.time}
          comments={news.comments}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingVertical: 20,
    paddingLeft: 20,
  },
});

export default HorizontalScrollView;
