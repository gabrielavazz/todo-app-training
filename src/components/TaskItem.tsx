import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { Task } from "./TasksList";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface TaskItemProps {
  index: number;
  task: Task;
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
  updateTaskName: (id: number, newTaskName: string) => void;
  updateTaskDescription: (id: number, newDescription: string) => void;
  navigation: NavigationProp;
}

export const TaskItem: React.FC<TaskItemProps> = ({
  index,
  task,
  toggleTaskDone,
  removeTask,
  updateTaskName,
  updateTaskDescription,
  navigation,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingTaskText, setEditingTaskText] = useState(task.title);
  const textInputRef = useRef<TextInput>(null);

  function handleStartEdition() {
    setIsEditing(true);
  }

  function handleCancelEdition() {
    setIsEditing(false);
    setEditingTaskText(task.title);
  }

  function handleSubmitEditing() {
    updateTaskName(task.id, editingTaskText);
    setIsEditing(false);
  }

  function handleRemoveTask(id: number) {
    if (!isEditing) {
      Alert.alert(
        "Remove task",
        "Are you sure you want to remove this task?",
        [
          { text: "No" },
          {
            text: "Yes",
            onPress: () => removeTask(id),
          },
        ]
      );
    }
  }

  useEffect(() => {
    if (isEditing) {
      textInputRef.current?.focus();
    } else {
      textInputRef.current?.blur();
    }
  }, [isEditing]);

  return (
    <>
      <View>
        <TouchableOpacity
          testID={`button-${index}`}
          activeOpacity={0.7}
          style={styles.taskButton}
          onPress={() => navigation.navigate('Details', { task, updateTaskDescription })}
        >
          <TouchableOpacity
            testID={`marker-${index}`}
            style={task.done ? styles.taskMarkerDone : styles.taskMarker}
            onPress={() => toggleTaskDone(task.id)}
          >
            <Text>{task.done ? "✓" : ""}</Text>
          </TouchableOpacity>
          
          <View style={styles.taskContent}>
            <TextInput
              ref={textInputRef}
              style={task.done ? styles.taskTextDone : styles.taskText}
              editable={isEditing}
              onChangeText={setEditingTaskText}
              value={editingTaskText}
              onSubmitEditing={handleSubmitEditing}
            />
            <Text style={styles.taskDescription}>
              {task.description || 'No description'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.iconsContainer}>
        <TouchableOpacity
          testID={`edit-${index}`}
          style={{
            paddingHorizontal: 12,
            borderRightColor: "rgba(196, 196, 196, 0.24)",
            borderRightWidth: 1,
          }}
          onPress={!isEditing ? handleStartEdition : handleCancelEdition}
        >
          {!isEditing ? (
            <Text>Edit</Text>
          ) : (
            <Text>Cancel</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          testID={`trash-${index}`}
          style={{
            paddingLeft: 12,
            paddingRight: 24,
          }}
          onPress={() => handleRemoveTask(task.id)}
        >
          <Text style={{ opacity: isEditing ? 0.4 : 1 }}>Delete</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  taskButton: {
    paddingHorizontal: 24,
    paddingVertical: 15,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  taskContent: {
    flexDirection: "column",
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#B2B2B2",
    marginRight: 15,
    marginTop: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  taskText: {
    color: "#666",
    fontFamily: "Inter-Medium",
  },
  taskDescription: {
    color: "#999",
    fontFamily: "Inter-Medium",
    fontSize: 14,
    marginTop: 4,
    maxWidth: 150,
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 4,
    backgroundColor: "#1DB863",
    marginRight: 15,
    marginTop: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  taskTextDone: {
    color: "#1DB863",
    fontFamily: "Inter-Medium",
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});