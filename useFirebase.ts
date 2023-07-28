import { useState, useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { initializeApp } from "firebase/app";
import firebase from 'firebase';
import 'firebase/firestore';

const useFirebase = () => {
  const { user } = useUser();
  const [userContent, setUserContent] = useState('');

  useEffect(() => {
    if (user) {
      // Initialize Firebase and Firestore here
      // Replace config with your Firebase configuration
      if (!firebase.apps.length) {
        firebase.initializeApp(config);
      }

      const firestore = firebase.firestore();

      // Fetch user's content from Firestore
      const fetchUserContent = async () => {
        try {
          const docRef = firestore.collection('userContent').doc(user.sub);
          const doc = await docRef.get();
          if (doc.exists) {
            setUserContent(doc.data().content);
          } else {
            setUserContent('');
          }
        } catch (error) {
          console.error('Error fetching user content:', error);
        }
      };

      fetchUserContent();
    }
  }, [user]);

  return { userContent };
};

export default useFirebase;
