/* tslint:disable */
import * as React from 'react';

interface WithLoadingProps {
    loading?: boolean;
}

export const withStyle = <P extends object>(
    Component: React.ComponentType<P>
): React.SFC<P & WithLoadingProps> => ({loading, ...props}: WithLoadingProps) =>
    <Component {...props} />;