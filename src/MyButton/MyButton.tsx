import React, { FC } from 'react';
import {Button as AntButton} from "antd"

export interface MyButtonProps {
    color: string;
    big?: boolean;
    children?: any,
}

const MyButton: FC<MyButtonProps> = ({
                                         children,
                                         color,
                                         big,
                                         ...props
                                     }) => {


    return (
        <AntButton {...props}  style={{color}}>
            <div>{children} </div>
        </AntButton>
    );
};

export default MyButton;