import React, { useState, useEffect } from "react";
import { Alert, StyleSheet, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

import { Header } from "../components/Header";
import { Task, TasksList } from "../components/TasksList";
import { TodoInput } from "../components/TodoInput";

const STORAGE_KEY = '@TodoApp:tasks';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function Home({ navigation }: HomeScreenProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const loadTasks = async () => {
    console.log('load task');
    try {
      const savedTasks = await AsyncStorage.getItem(STORAGE_KEY);
      if (savedTasks !== null) {
        setTasks(JSON.parse(savedTasks));
      }
    } catch (error) {
      console.error('Error loading tasks:', error);
    }
  };

  const saveTasks = async (tasksToSave: Task[]) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasksToSave));
    } catch (error) {
      console.error('Error saving tasks:', error);
    }
  };

  function handleAddTask(newTaskTitle: string) {
    const hasTaskWithThisName =
      tasks.findIndex((task) => task.title === newTaskTitle) > -1;

    if (hasTaskWithThisName) {
      Alert.alert(
        "Task já cadastrada",
        "Você não pode cadastrar uma task com o mesmo nome"
      );
    } else {
      setTasks([
        ...tasks,
        {
          id: new Date().getTime(),
          title: newTaskTitle,
          done: false,
          description: '',
        },
      ]);
    }
  }

  function handleToggleTaskDone(id: number) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        };
      }

      return task;
    });

    setTasks(newTasks);
  }

  function handleRemoveTask(id: number) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  function handleUpdateTaskName(id: number, newTaskName: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          title: newTaskName,
        };
      }

      return task;
    });

    setTasks(newTasks);
  }

  function handleUpdateTaskDescription(id: number, newDescription: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          description: newDescription,
        };
      }

      return task;
    });

    setTasks(newTasks);
  }

  return (
    <View style={styles.container}>
        <Header tasksCounter={tasks.length} />

        <TodoInput addTask={handleAddTask} />

        <TasksList
            tasks={tasks}
            toggleTaskDone={handleToggleTaskDone}
            removeTask={handleRemoveTask}
            updateTaskName={handleUpdateTaskName}
            updateTaskDescription={handleUpdateTaskDescription}
            navigation={navigation}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
  },
});