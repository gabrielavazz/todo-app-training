import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

export function Details({ route, navigation }: DetailsScreenProps) {
  const { task } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Details</Text>
      <Text style={styles.taskTitle}>
        "{task.title}"
      </Text>
      <Text style={styles.status}>
        Status: {task.done ? '✅ Completed' : '⏳ Pending'}
      </Text>
      
      <View style={styles.buttonContainer}>
        <Button
          title="Go Back to Home"
          onPress={() => navigation.goBack()}
          color="#8257E5"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#EBEBEB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3D3D4D',
    marginBottom: 20,
  },
  taskTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#8257E5',
    marginBottom: 15,
    textAlign: 'center',
  },
  status: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
});