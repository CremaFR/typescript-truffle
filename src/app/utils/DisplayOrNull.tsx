

const DisplayOrNull : React.SFC<{ condition : boolean, children? : any } > = ( { condition, children } ) => {
    if ( !condition ) return null;
    return children;
}

export { DisplayOrNull };