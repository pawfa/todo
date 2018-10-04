/* tslint:disable */
import * as React from 'react';
import {IProps} from "./Todo";

interface WithLoadingProps {
    loading?: boolean;
}

export const withStyle = <P extends object>(
    Component: React.ComponentType<IProps>
): React.SFC<IProps & WithLoadingProps> => ({loading, ...props}: WithLoadingProps & IProps) =>
    <Component content={props.content} />;