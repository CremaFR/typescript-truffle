/**
 * JSX Wrapper to display or not a component base on a boolean condition
 */
const DisplayOrNull : React.SFC<{ condition : boolean, children? : any } > = ( { condition, children } ) => {
    if ( !condition ) return null;
    return children;
};

export { DisplayOrNull };