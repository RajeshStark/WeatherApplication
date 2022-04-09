import React from 'react';
import { render, fireEvent, waitFor, cleanup } from '@testing-library/react-native';
import { inputTypes } from '../../src/Components/types';
import CustomInput from '../../src/Components/CustomTxtInput';


afterEach(cleanup);

describe('<TextInput/> ', () => {
    it('text input', async () => {
        const mock = jest.fn()
        const props: inputTypes = {
            value: '',
            onChangeText: mock,
            label: 'Enter Country',
            placeholder: 'Enter Country',
            testID: "1"
        }
        const component = render(<CustomInput {...props} />)
        
        fireEvent.changeText(await component.findByTestId('1'), 'india')
        expect(mock).toHaveBeenCalledWith('india')
    })

    it('second text input ', async () => {
      const mock = jest.fn()
      const props: inputTypes = {
          value: '',
          onChangeText: mock,
          label: 'Enter Country',
          placeholder: 'Enter Country',
          testID: "2"
      }
      const component = render(<CustomInput {...props} />)
      
      fireEvent.changeText(await component.findByTestId('2'), 'america')
      expect(mock).toHaveBeenCalledWith('america')
  })
})