import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../utils/colors";
import { RoundedButton } from "../components/RoundedButton";
import { spacing } from "../utils/sizes";
import { fontSizes } from "../utils/sizes";

export const FocusHistory = ({ history }) => {
  if (!history || !history.length)
    return (
      <Text style={styles.title}>We haven't focused on anything yet!</Text>
    );

  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we focused on:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: colors.white,
    fontSize: fontSizes.lgs,
    padding: spacing.md,
    fontWeight: "bold",
  },
  container: {
    padding: spacing.md,
    flex: 1,
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm,
  },
});
