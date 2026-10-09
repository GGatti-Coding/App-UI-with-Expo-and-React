/*
@author Jonah Rideout
Rounded square avatar. Shows the image if the profile has one,
otherwise a colored square with the first letter of the name.
*/
import { Image, StyleSheet, Text, View } from "react-native";
import { ProfileType } from "../data/profiles";

type Props = {
  profile: ProfileType;
  size: number;
  radius: number;
};

export default function ProfileAvatar({ profile, size, radius }: Props) {
  // Size and corner radius change depending on where the avatar is used
  const box = { width: size, height: size, borderRadius: radius };

  if (profile.image) {
    return <Image source={profile.image} style={box} />;
  }

  return (
    <View style={[box, styles.placeholder, { backgroundColor: profile.color }]}>
      <Text style={[styles.letter, { fontSize: size / 2 }]}>
        {profile.name.charAt(0)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  placeholder: {
    alignItems: "center",
    justifyContent: "center",
  },
  letter: {
    color: "#fff",
    fontWeight: "bold",
  },
});