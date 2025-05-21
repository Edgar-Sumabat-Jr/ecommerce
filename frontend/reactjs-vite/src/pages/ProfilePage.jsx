// src/components/ProfilePage.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');
  
  // Fetch profile data
  useEffect(() => {
    const fetchProfile = async () => {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        setError('You must be logged in to view this page.');
        return;
      }

      try {
        const response = await axios.get('http://localhost:8000/api/profile/', {
          headers: {
            Authorization: `Bearer ${accessToken}`,  // Pass the JWT in the header
          }
        });
        setProfile(response.data);  // Store profile data in state
      } catch (err) {
        setError('Unable to fetch profile data');
        console.error(err);
      }
    };

    fetchProfile();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Username: {profile.username}</p>
      <p>Email: {profile.email}</p>
      {/* <p>First Name: {profile.first_name}</p>
      <p>Last Name: {profile.last_name}</p> */}
    </div>
  );
}

export default ProfilePage;
