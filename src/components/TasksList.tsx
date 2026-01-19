import React from "react";
import { FlatList } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { ItemWrapper } from "./ItemWrapper";
import { TaskItem } from "./TaskItem";

export interface Task {
  id: number;
  title: string;
  done: boolean;
  description?: string;
}

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface TasksListProps {
  tasks: Task[];
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
  updateTaskName: (id: number, newTaskName: string) => void;
  updateTaskDescription: (id: number, newDescription: string) => void;
  navigation: NavigationProp;
}

export function TasksList({
  tasks,
  toggleTaskDone,
  removeTask,
  updateTaskName,
  updateTaskDescription,
  navigation,
}: TasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={{ paddingBottom: 24 }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return (
          <ItemWrapper index={index}>
            <TaskItem
              index={index}
              task={item}
              toggleTaskDone={toggleTaskDone}
              removeTask={removeTask}
              updateTaskName={updateTaskName}
              updateTaskDescription={updateTaskDescription}
              navigation={navigation}
            />
          </ItemWrapper>
        );
      }}
      style={{
        marginTop: 32,
      }}
    />
  );
}