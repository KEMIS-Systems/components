import React from "react";

export interface ISplitButtonProps extends React.ButtonHTMLAttributes<any> {
    dropListItems: React.JSX.Element
    dropListClassName?: string
    dropListLabelClassName?: string
    dropListIcon?: React.JSX.Element
}