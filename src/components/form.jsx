import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { changeValue, changeView } from '../store/actions/actionCreators';
import { getActiveFilterButton } from '../store/selectors';
import { WEEK, MONTH, PRICE, ANOTHER_VALUE } from '../utils/constants';

const FormStyled = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const SelectStyled = styled.select`
    padding: 0.5rem 1rem;
    border-radius: 4px;
    height: 31px;
    border-color: #007bff;
    border-radius: 4px;
    color: #007bff;
`;

const ButtonStyled = styled.button`
    color: ${(props) => (props.isActive ? '#fff' : '#007bff')};
    background-color: ${(props) => (props.isActive ? '#007bff' : '#fff')};
    border-color: #007bff;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    margin-right: 16px;
`;

const ButtonsGroupStyled = styled.div`
    display: flex;
`;

const btns = [
    { id: 1, value: WEEK, name: 'Week' },
    { id: 2, value: MONTH, name: 'Month' }
];

export const Form = () => {
    const dispatch = useDispatch();
    const isButtonActive = useSelector(getActiveFilterButton);

    const onClickHandler = (data) => dispatch(changeView(data));
    const onSelectChangeHandler = (e) => dispatch(changeValue(e.target.value));

    return (
        <FormStyled>
            <ButtonsGroupStyled>
                {btns.map((btn) => (
                    <ButtonStyled
                        onClick={() => onClickHandler(btn)}
                        key={btn.id}
                        type='button'
                        disabled={Boolean(isButtonActive === btn.value)}
                        isActive={Boolean(isButtonActive === btn.value)}
                    >
                        {btn.name}
                    </ButtonStyled>
                ))}
            </ButtonsGroupStyled>

            <SelectStyled onChange={onSelectChangeHandler}>
                <option value={PRICE}>Price</option>
                <option value={ANOTHER_VALUE}>Another Value</option>
            </SelectStyled>
        </FormStyled>
    );
};
