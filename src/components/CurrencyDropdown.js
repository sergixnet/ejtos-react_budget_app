import React, { useContext } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
    const { currency, dispatch } = useContext(AppContext);

    const dropdownItems = [
        { label: '$ Dollar', value: '$' },
        { label: '£ Pound', value: '£' },
        { label: '€ Euro', value: '€' },
        { label: '₹ Ruppee', value: '₹' },
    ];

    const findLabelByValue = (value) => {
        const item = dropdownItems.find((item) => item.value === value);
        return item ? item.label : undefined;
    };

    const title = `Currency (${findLabelByValue(currency)})`;

    const handleSelect = (eventKey) => {
        console.log(`Selected option: ${eventKey}`);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: eventKey,
        });

    };

    return (
        <div>
            <DropdownButton
                title={title}
                onSelect={handleSelect}
            >
                {dropdownItems.map((item) => (
                    <Dropdown.Item key={item.value} eventKey={item.value} active={item.value === currency}>
                        {item.label}
                    </Dropdown.Item>
                ))}
            </DropdownButton>
        </div>
    );
};
export default CurrencyDropdown;