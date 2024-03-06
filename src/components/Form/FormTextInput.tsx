import React from 'react';

import { Controller, UseControllerProps, FieldValues } from 'react-hook-form';

import { TextInput, TextInputProps } from '@components';

// O COMPONENTE PASSA A RECEBER UM GENERIC QUE QUANDO O COMPONENTE FOR CHAMADO NÃO VAI PRECISAR
// PASSAR PÓS O TYPESCRIPT VAI INFERIR O TIPO POIS ATRAVES DO CONTROL QUE JÁ POSSUI A INTERFACE DE TIPO

// generic constraints => O UseControllerProps ACEITA UMA INTERFACE GENERICA MAS QUE RESPEITE A INTERFACE DO FieldValues
export function FormTextInput<FormType extends FieldValues>({ control, name, rules, ...textInputProps }: TextInputProps & UseControllerProps<FormType>) {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field, fieldState }) => (
                <TextInput
                    errorMessage={fieldState.error?.message}
                    value={field.value}
                    onChangeText={field.onChange}
                    {...textInputProps} />
            )}
        />

    );
}
