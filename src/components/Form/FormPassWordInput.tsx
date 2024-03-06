import React from 'react';

import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';

import { PassWordInput, PassWordInputProps } from '@components';

export function FormPassWordInput<FormType extends FieldValues>({ control, name, rules, ...passWordInputProps }: PassWordInputProps & UseControllerProps<FormType>) {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field, fieldState }) => (
                <PassWordInput
                    errorMessage={fieldState.error?.message}
                    value={field.value}
                    onChangeText={field.onChange}
                    {...passWordInputProps}
                />

            )}
        />
    );
}
