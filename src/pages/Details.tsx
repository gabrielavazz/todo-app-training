import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

export function Details({ route, navigation }: DetailsScreenProps) {
  const { task, updateTaskDescription } = route.params;
  const [description, setDescription] = useState(task.description || '');
  const [isEditing, setIsEditing] = useState(false);

  const handleSaveDescription = () => {
    if (updateTaskDescription) {
      updateTaskDescription(task.id, description);
    }
    setIsEditing(false);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Task Details</Text>
        <Text style={styles.taskTitle}>
          "{task.title}"
        </Text>

        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionLabel}>Description:</Text>
          {isEditing ? (
            <View style={styles.editingContainer}>
              <TextInput
                style={styles.descriptionInput}
                value={description}
                onChangeText={setDescription}
                placeholder="Add a description for this task..."
                multiline
                numberOfLines={4}
                textAlignVertical="top"
              />
              <View style={styles.editButtons}>
                <Button
                  title="Save"
                  onPress={handleSaveDescription}
                  color="#1DB863"
                />
                <View style={styles.buttonSpacer} />
                <Button
                  title="Cancel"
                  onPress={() => {
                    setDescription(task.description || '');
                    setIsEditing(false);
                  }}
                  color="#FF6B6B"
                />
              </View>
            </View>
          ) : (
            <View style={styles.viewingContainer}>
              <Text style={styles.descriptionText}>
                {description || 'No description added yet.'}
              </Text>
              <Button
                title={description ? "Edit Description" : "Add Description"}
                onPress={() => setIsEditing(true)}
                color="#8257E5"
              />
            </View>
          )}
        </View>

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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3D3D4D',
    marginBottom: 20,
    textAlign: 'center',
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
    color: '#3D3D4D',
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: '600',
  },
  descriptionContainer: {
    marginBottom: 30,
  },
  descriptionLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3D3D4D',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center',
  },
  descriptionInput: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 15,
    borderWidth: 1,
    borderColor: '#DDD',
    fontSize: 16,
    minHeight: 100,
    marginBottom: 15,
  },
  descriptionText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 15,
    textAlign: 'center',
  },
  editingContainer: {
    width: '100%',
  },
  viewingContainer: {
    width: '100%',
  },
  editButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonSpacer: {
    width: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
});