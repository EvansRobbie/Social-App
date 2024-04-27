import {
  View,
  Text,
  ScrollView,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { videos } from '../../../constants';
// import { videos } from '../../constants/index';

const videosData = [
  {
    id: 1,
    video: videos.video,
    user: {
      username: 'Robbievans',
      profilePicture: '',
    },
    likes: '14.3K',
    comments: 120,
    shares: 12,
    saves: 413,
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel mattis purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed at nunc ante. Etiam nec sem sit amet sapien malesuada facilisis in in nisl. Aenean eu ultricies turpis. Sed vel congue quam. Proin pulvinar.',
    backgroundVoice: { music: 'Laughing - laughing', profile: '' },
  },
  {
    id: 2,
    video: videos.video2,
    user: {
      username: 'Robbievans',
      profilePicture: '',
    },
    likes: '14.3K',
    comments: 120,
    shares: 12,
    saves: 413,
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel mattis purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed at nunc ante. Etiam nec sem sit amet sapien malesuada facilisis in in nisl. Aenean eu ultricies turpis. Sed vel congue quam. Proin pulvinar.',
    backgroundVoice: { music: 'Laughing - laughing', profile: '' },
  },
  {
    id: 3,
    video: videos.video3,
    user: {
      username: 'Robbievans',
      profilePicture: '',
    },
    likes: '14.3K',
    comments: 120,
    shares: 12,
    saves: 413,
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel mattis purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed at nunc ante. Etiam nec sem sit amet sapien malesuada facilisis in in nisl. Aenean eu ultricies turpis. Sed vel congue quam. Proin pulvinar.',
    backgroundVoice: { music: 'Laughing - laughing', profile: '' },
  },
  {
    id: 4,
    video: videos.video3,
    user: {
      username: 'Robbievans',
      profilePicture: '',
    },
    likes: '14.3K',
    comments: 120,
    shares: 12,
    saves: 413,
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel mattis purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed at nunc ante. Etiam nec sem sit amet sapien malesuada facilisis in in nisl. Aenean eu ultricies turpis. Sed vel congue quam. Proin pulvinar.',
    backgroundVoice: { music: 'Laughing - laughing', profile: '' },
  },
];

const Home = () => {
  return (
    <SafeAreaView className='bg-black h-full'>
      <FlatList
        data={videosData}
        keyExtractor={(item: { id: any }) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text className='text-white'>{item.user.username}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
