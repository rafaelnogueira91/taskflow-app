
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Alert,
} from 'react-native';

import colors from '../constants/colors';

export default function AddTaskScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Personal');
  const [errors, setErrors] = useState({});
  const [focused, setFocused] = useState('');

  const categories = ['Personal', 'Trabajo', 'Estudio'];

  const validateForm = () => {
    const newErrors = {};

    if (title.trim().length < 5) {
      newErrors.title = 'El título debe tener al menos 5 caracteres.';
    }

    if (description.trim().length < 10) {
      newErrors.description =
        'La descripción debe tener al menos 10 caracteres.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddTask = () => {
    if (!validateForm()) return;

    const task = {
      title: title.trim(),
      description: description.trim(),
      category,
      createdAt: new Date().toISOString(),
    };

    console.log('Tarea creada:', task);

    Alert.alert('Éxito', 'Tarea capturada localmente');

    setTitle('');
    setDescription('');
    setCategory('Personal');
    setErrors({});
    setFocused('');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.heading}>Nueva tarea</Text>

        <Text style={styles.label}>Título</Text>
        <TextInput
          style={[
            styles.input,
            focused === 'title' && styles.inputFocused,
            errors.title && styles.inputError,
          ]}
          placeholder="Escribe el título"
          placeholderTextColor={colors.text}
          selectionColor={colors.primary}
          value={title}
          onChangeText={setTitle}
          onFocus={() => setFocused('title')}
          onBlur={() => setFocused('')}
          autoCapitalize="sentences"
          returnKeyType="next"
        />
        {errors.title && (
          <Text style={styles.error}>{errors.title}</Text>
        )}

        <Text style={styles.label}>Descripción</Text>
        <TextInput
          style={[
            styles.input,
            styles.description,
            focused === 'description' && styles.inputFocused,
            errors.description && styles.inputError,
          ]}
          placeholder="Describe tu tarea"
          placeholderTextColor={colors.text}
          selectionColor={colors.primary}
          value={description}
          onChangeText={setDescription}
          onFocus={() => setFocused('description')}
          onBlur={() => setFocused('')}
          multiline
          textAlignVertical="top"
          autoCapitalize="sentences"
        />
        {errors.description && (
          <Text style={styles.error}>{errors.description}</Text>
        )}

        <Text style={styles.label}>Categoría</Text>
        <View style={styles.categories}>
          {categories.map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.categoryButton,
                category === item && styles.categorySelected,
              ]}
              onPress={() => setCategory(item)}
            >
              <Text
                style={[
                  styles.categoryText,
                  category === item && styles.selectedText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleAddTask}
        >
          <Text style={styles.saveText}>Guardar</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 24,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
    marginTop: 14,
  },
  input: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    color: colors.text,
  },
  inputFocused: {
    borderColor: colors.primary,
    borderWidth: 2,
  },
  inputError: {
    borderColor: colors.error,
  },
  description: {
    height: 110,
  },
  error: {
    color: colors.error,
    fontSize: 12,
    marginTop: 5,
  },
  categories: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 8,
  },
  categoryButton: {
    flex: 1,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    alignItems: 'center',
  },
  categorySelected: {
    backgroundColor: colors.primary,
  },
  categoryText: {
    color: colors.primary,
    fontSize: 14,
  },
  selectedText: {
    color: colors.white,
  },
  saveButton: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  saveText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
