import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const BtnList = ({ label, value, onChange, canEdit }) => {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{label}:</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={(text) => onChange(text)}
        editable={canEdit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fieldContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
    backgroundColor:'#fff',
  },
});

export default BtnList;
