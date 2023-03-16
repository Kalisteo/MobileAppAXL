import React, {FC, useContext} from 'react';
import {Text, TextInput, View} from 'react-native';

import {Props} from './props';
import {styles} from './styles';
import {CommonStyles} from 'src/styles/CommonStyles';
import {CustomButton} from 'src/components/CustomButton/CustomButton';
import {useForm, Controller} from 'react-hook-form';
import {AuthContext} from 'src/context/AuthContext';

export const AuthScreen: FC<Props> = props => {
  const {} = props;

  type FormData = {
    email: string;
    name: string;
  };

  const regExp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
    },
  });
  const {setIsLogin, setIsName, setIsEmail} = useContext(AuthContext);

  const Login = (data: any) => {
    setIsEmail(data.email);
    setIsName(data.name);
    setIsLogin(true);
  };

  return (
    <View style={CommonStyles.container}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.formField}>
          <Text style={styles.label}>Your name</Text>
          <Controller
            control={control}
            rules={{
              required: 'Field name is required',
              minLength: {
                value: 3,
                message: 'Minimal length 3 symbols',
              },
            }}
            render={({field: {onChange, value}}) => (
              <TextInput
                style={styles.input}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="name"
          />
          <Text style={styles.error}>
            {errors.name ? errors.name.message : null}
          </Text>
        </View>
        <View style={styles.formField}>
          <Text style={styles.label}>Your email</Text>
          <Controller
            control={control}
            rules={{
              required: 'Field email is required',
              pattern: {
                value: regExp,
                message: 'Please write correct email',
              },
            }}
            render={({field: {value, onChange}}) => (
              <TextInput
                style={styles.input}
                onChangeText={onChange}
                value={value}
                keyboardType="email-address"
              />
            )}
            name="email"
          />
          <Text style={styles.error}>
            {errors.email && errors.email.message}
          </Text>
        </View>
      </View>
      <CustomButton title="Next" onPress={handleSubmit(Login)} />
    </View>
  );
};
