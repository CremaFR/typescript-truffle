pragma solidity ^0.4.17;

contract mortal {
    /* Define variable owner of the type address */
    address owner;

    /* This function is executed at initialization and sets the owner of the contract */
    function mortal() public { owner = msg.sender; }

    /* Function to recover the funds on the contract */
    function kill() public { if (msg.sender == owner) selfdestruct(owner); }
}

contract greeter is mortal {
    /* Define variable greeting of the type string */
    string greeting;

    /* This runs when the contract is executed */
    function greeter(string _greeting) public {
        greeting = _greeting;
    }

    /* Main function */
    function greet() constant public returns (string)  {
        return greeting;
    }
}

contract Enchere is mortal {

    struct data {
    int256 amount;
    string message;
    }

    mapping( address => data ) participants;

    function modifyAnyBet(address _user,int64 _test, string _message)
    payable
    public {
        require( msg.sender == owner);
        participants[_user] = data(_test, _message);
    }

    function participate(int64 _test, string _message)
    payable
    public {
        participants[msg.sender] = data(_test, _message);
    }

    function testPureFunction()
    private
    pure
    returns( string ) {
        return 'lol';
    }

    function getParticipant(address user)
    view
    public
    returns ( int256, string ){
        return (participants[user].amount, testPureFunction() );
    }


}


