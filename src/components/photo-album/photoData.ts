
import { Photo, Category } from './types';

export const categories: Category[] = [
  {
    id: 'personal',
    name: 'Personal',
    description: 'Solo portraits and personal photos'
  },
  {
    id: 'family',
    name: 'Family & Friends',
    description: 'Photos with family and friends'
  },
  {
    id: 'cultural',
    name: 'Cultural Events',
    description: 'Traditional celebrations and cultural events'
  },
  {
    id: 'travel',
    name: 'Travel',
    description: 'Photos from different locations'
  }
];

// Console log to verify paths during loading
console.log('Loading photo data...');

export const photos: Photo[] = [
  {
    id: 'photo-1',
    src: '/lovable-uploads/a873da25-9479-4fcc-9a58-e3f9a53408c1.png',
    alt: 'Portrait in a green suit',
    caption: 'Formal portrait in a green suit',
    category: 'personal'
  },
  {
    id: 'photo-2',
    src: '/lovable-uploads/ff5048c7-9b3b-4008-bab7-cf9d2bef7567.png',
    alt: 'With a friend in yellow and blue outfits',
    caption: 'With a close friend',
    category: 'family'
  },
  {
    id: 'photo-3',
    src: '/lovable-uploads/8b03d3e9-114b-4256-a3c4-7e8629ecf3b0.png',
    alt: 'Young portrait with red mark on forehead',
    caption: 'Traditional look with tika',
    category: 'cultural'
  },
  {
    id: 'photo-4',
    src: '/lovable-uploads/8faea980-6dcf-4519-8060-a3a74f69464a.png',
    alt: 'Family photo with Nepal flag in background',
    caption: 'Family gathering with a view of Kathmandu',
    category: 'family'
  },
  {
    id: 'photo-5',
    src: '/lovable-uploads/ed317f56-0249-4275-aa85-e86540799a91.png',
    alt: 'Photo with family at a forest location',
    caption: 'Day out at the forest park',
    category: 'family'
  },
  {
    id: 'photo-6',
    src: '/lovable-uploads/fbf9808e-aed5-45fc-8bcd-d4a974bad893.png',
    alt: 'At Chitwan National Park',
    caption: 'Visit to Chitwan National Park',
    category: 'travel'
  },
  {
    id: 'photo-7',
    src: '/lovable-uploads/fd34317b-56ae-4dac-8516-16aad2d8a717.png',
    alt: 'Traditional Nepali outfit with hat',
    caption: 'Celebrating in traditional attire',
    category: 'cultural'
  },
  {
    id: 'photo-8',
    src: '/lovable-uploads/10e2fb8c-c548-4fd6-bf98-a447f6ef15ba.png',
    alt: 'With a friend in traditional Nepali outfits',
    caption: 'Festival celebration with friend',
    category: 'cultural'
  },
  {
    id: 'photo-9',
    src: '/lovable-uploads/c28e859a-ed5f-43cb-a6cc-b5e20ad784e0.png',
    alt: 'With someone in traditional attire',
    caption: 'Cultural celebration with sister',
    category: 'cultural'
  },
  {
    id: 'photo-10',
    src: '/lovable-uploads/fd5b5d7c-97e9-4b9b-910a-b53fcb5fb87a.png',
    alt: 'In front of a red brick wall in traditional outfit',
    caption: 'Traditional ceremony',
    category: 'cultural'
  },
  {
    id: 'photo-11',
    src: '/lovable-uploads/24aac5c9-d5df-417b-9d98-1607adc72a40.png',
    alt: 'At a temple or cultural site with friends',
    caption: 'Visit to a temple with friends',
    category: 'travel'
  },
  {
    id: 'photo-12',
    src: '/lovable-uploads/8f2a4492-2ecd-451b-8314-1d35ae1cb14c.png',
    alt: 'Photo with friends in casual outfits',
    caption: 'Casual day out with friends',
    category: 'family'
  },
  {
    id: 'photo-13',
    src: '/lovable-uploads/9e3870ff-abb1-4c3f-a9fc-1452870cb2ff.png',
    alt: 'On a rooftop in yellow sweater',
    caption: 'Rooftop view of the city',
    category: 'personal'
  },
  {
    id: 'photo-14',
    src: '/lovable-uploads/9567bf56-5f3c-4c4b-8f86-ff3dcf5b4af0.png',
    alt: 'Formal portrait in suit and tie',
    caption: 'Formal occasion in suit',
    category: 'personal'
  },
  {
    id: 'photo-15',
    src: '/lovable-uploads/3de2e25f-e06d-478d-8205-1e4dd5f18562.png',
    alt: 'Childhood photo with another child',
    caption: 'Childhood memories',
    category: 'personal'
  },
  {
    id: 'photo-16',
    src: '/lovable-uploads/6d648613-19cb-42ef-8cf6-98657f9de723.png',
    alt: 'In front of a red brick building',
    caption: 'Traditional Nepali home visit',
    category: 'travel'
  },
  {
    id: 'photo-17',
    src: '/lovable-uploads/fc9e025b-92e4-48f2-ae0b-19431cfd43d8.png',
    alt: 'As a young boy in a yellow shirt',
    caption: 'Young days in school uniform',
    category: 'personal'
  },
  {
    id: 'photo-18',
    src: '/lovable-uploads/90d3aa54-1e1a-48d5-a1bb-6ef0b53a6e83.png',
    alt: 'In gold sweater against brick background',
    caption: 'College days',
    category: 'personal'
  },
  {
    id: 'photo-19',
    src: '/lovable-uploads/742301de-fb70-4fa9-a9f8-ef1020dbf62b.png',
    alt: 'Young boy in yellow and blue checkered shirt',
    caption: 'Childhood portrait',
    category: 'personal'
  }
];

// Console log to verify loading completed
console.log('Photo data loaded:', photos.length, 'photos');
