import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit';
import { render as rtlRender } from '@testing-library/react';
import PropTypes from 'prop-types';
import React from 'react';
import studentReducer from '../store/studentSlice'


const reducer = combineReducers({
    studentReducer,
})
export function renderWithProviders(
    ui,
    {
        preloadedState = {},
        store = configureStore({ reducer: reducer, preloadedState }),
        ...renderOptions
    } = {},
) {
    function Wrapper({ children }) {
        return <Provider  store={store}><Router>{children}</Router></Provider>;
    }

    Wrapper.propTypes = {
        children: PropTypes.node.isRequired,
    };

    return { store, ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export * from '@testing-library/react';
