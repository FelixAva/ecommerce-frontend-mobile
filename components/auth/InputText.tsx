import React from 'react';
import { View, Text, TextInput, TextInputProps, StyleSheet } from 'react-native';

import { Colors } from '../../constants';

interface Props {
  label: string;
  error?: string;
  required?: boolean;

  inputProps: TextInputProps;
}

export default function InputText( {
  label,
  error,
  required,

  inputProps
}: Props ) {

  const capitalize = ( text: string ): string => text[0].toUpperCase() + text.substring(1);

  return (
    <View style={{ gap: 10 }}>
      <Text
        style={ styles.label }
      >
        { label } { required && '*'  }
      </Text>

      <TextInput
        { ...inputProps }
        style={ styles.input }
      />

      {
        error &&
        <Text style={ styles.error }>
          { capitalize( error ) }
        </Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 22,
    color: Colors.black
  },
  input: {
    width: 350,
    height: 50,
    paddingLeft: 10,
    fontSize: 18,
    borderRadius: 5,
    borderWidth: 1,

    color: '#4f4f4f'
  },
  error: {
    fontSize: 16,
    color: Colors.warning
  }
});
