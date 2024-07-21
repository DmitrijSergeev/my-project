import React, { ChangeEvent, ComponentProps, forwardRef, useId, useState } from 'react'

import { IconButton } from '@mui/material'
import { clsx } from 'clsx'

import s from './TextField.module.scss'

import { IcClear } from '../../assets/icons/IcClear/IcClear'
import { IcCloseEye } from '../../assets/icons/IcCloseEye/IcCloseEye'
import { IcOpenEye } from '../../assets/icons/IcOpenEye/IcOpenEye'
import { IcSearch } from '../../assets/icons/IcSearch/IcSearch'

type BaseTextFieldProps = {
  defaultValue?: readonly string[] | string | undefined
  disabled?: boolean
  error?: boolean | null | string
  fullwidth?: boolean
  id?: string
  label?: string
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  onChangeText?: (value: string) => void
  onClickSearch?: () => void
  onEnter?: () => void
  placeholder?: string
  type?: 'password' | 'search' | 'text'
} & Omit<ComponentProps<'input'>, 'type'>

export const TextField = forwardRef<HTMLInputElement, BaseTextFieldProps>((props, ref) => {
  const {
    defaultValue,
    disabled,
    error,
    fullwidth,
    id,
    label,
    onBlur: customOnBlur,
    onChange,
    onChangeText,
    onClickSearch,
    onEnter,
    onKeyDown,
    placeholder,
    type = 'text',
    ...respProps
  } = props

  const [value, setValue] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const showClearButton = value.length! > 0
  const textFieldType = type === 'password' && showPassword ? 'text' : type
  const textFieldId = useId()

  const onClickHandleShowPass = () => {
    setShowPassword(!showPassword)
  }
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    const value = e.currentTarget.value

    onChangeText?.(value)
    setValue(value)
  }
  const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
    customOnBlur?.(e)
  }
  const onKeyPressCallback = (e: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyDown?.(e)
    onEnter && e.key === 'Enter' && onEnter()
  }

  const onClickHandlerSearchButton = () => {
    if (type === 'search' && onClickSearch && !disabled) {
      onClickSearch()
    }
  }

  const onClickClearSearchText = () => {
    if (!disabled) {
      setValue('')
    }
  }

  const classNames = {
    btnClear: clsx(type === 'search' && s.btnClear, label && s.withLabel),
    btnSearch: clsx(
      type === 'search' && s.btnSearch,
      label && s.withLabel,
      fullwidth && s.btnSearchWithFullWidth
    ),
    button: clsx(s.button),
    error: clsx(s.error, disabled && s.errorWithDisabled),
    iconSearch: clsx(s.iconSearch),
    iconShowPass: clsx(s.iconShowPass),
    label: clsx(s.labelText, disabled && s.labelWithDisabled),
    showPassBtn: clsx(s.showPassBtn),
    showPassword: clsx(s.showPassword, label && s.withLabel, fullwidth && s.showPassWithFullwidth),
    textField: clsx(
      s.textField,
      fullwidth && s.fullwidth,
      error && s.errorText,
      type === 'password' && s.withShowPassword,
      type === 'search' && s.withSearchType
    ),
    textFieldWrapper: clsx(s.textFieldWrapper, fullwidth && s.fullwidth),
  }

  /** If we use defaultValue, then the value is disabled  */
  const inputValue = defaultValue !== undefined ? defaultValue : value

  return (
    <div className={classNames.textFieldWrapper}>
      {type === 'search' && (
        <>
          {/*<IconButton*/}
          {/*  className={classNames.btnSearch}*/}
          {/*  disabled={disabled}*/}
          {/*  onClick={onClickHandlerSearchButton}*/}
          {/*  variant={'secondary'}*/}
          {/*>*/}
          {/*  <IcSearch className={classNames.iconSearch} size={1.3} />*/}
          {/*</IconButton>*/}
          {showClearButton && (
            <IconButton
              className={classNames.btnClear}
              disabled={disabled}
              onClick={onClickClearSearchText}
              type={'reset'}
            >
              <IcClear size={1.3} />
            </IconButton>
          )}
        </>
      )}
      {label && (
        <label className={classNames.label} htmlFor={textFieldId}>
          {label}
        </label>
      )}
      <input
        className={classNames.textField}
        defaultValue={defaultValue}
        disabled={disabled}
        id={textFieldId}
        onBlur={onBlurCallback}
        onChange={onChangeCallback}
        onKeyDown={onKeyPressCallback}
        placeholder={placeholder}
        ref={ref}
        type={textFieldType}
        {...(defaultValue !== undefined ? {} : { value: inputValue })}
        {...respProps}
      />
      {error && (
        <span className={classNames.error} id={textFieldId}>
          {error}
        </span>
      )}
      {type === 'password' && (
        <div className={classNames.showPassword}>
          {showPassword ? (
            <IconButton
              className={classNames.showPassBtn}
              disabled={disabled}
              onClick={onClickHandleShowPass}
            >
              <IcCloseEye className={classNames.iconShowPass} size={1.3} />
            </IconButton>
          ) : (
            <IconButton
              className={classNames.showPassBtn}
              disabled={disabled}
              onClick={onClickHandleShowPass}
            >
              <IcOpenEye className={classNames.iconShowPass} size={1.3} />
            </IconButton>
          )}
        </div>
      )}
    </div>
  )
})
