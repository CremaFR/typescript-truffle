import * as assert                      from 'power-assert'
import { Reducer }                      from 'redux'


import * as flux                        from './index'
import * as moment                      from 'moment'
import * as _                           from 'lodash'


const A1 = flux.Actions.ofType( 'test' );

interface A2 extends flux.ActionWP<string> {}
const A2 = flux.Actions.withPayload<string>( 'test2' );


describe( 'flux.action', () => {
    it( 'valid', () => {
        const a1 = A1();
        assert.equal( a1.type, 'test' );
        assert.equal( A1.Type, 'test' );

        const a2 = A2( 'test2' );
        assert.equal( a2.type, 'test2' );
        assert.equal( A2.Type, 'test2' );
        assert.equal( a2.payload, 'test2' );
    } );
} );

describe( 'flux.state', () => {
    it( 'valid', () => {
    } );  
})
