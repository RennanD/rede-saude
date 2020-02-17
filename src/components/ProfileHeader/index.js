import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

import { Container, Avatar, Profile } from "./styles";

export default function ProfileHeader({ navigation }) {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Avatar
          source={{
            uri: profile.avatar
              ? profile.avatar
              : "https://journalism.berkeley.edu/wp-content/uploads/profile-placeholder.png"
          }}
        />
      </TouchableOpacity>
      <View>
        <Profile>Olá,</Profile>
        <Profile>{profile.nome}</Profile>
      </View>
    </Container>
  );
}
