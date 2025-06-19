import React, { FC } from 'react';

interface Props {
    label: string;
    color: string;
}


const CustomButton: FC<Props> = ({ label , color }) => {
    return <button style={{backgroundColor: color}}>{label}</button>
}

export default CustomButton;