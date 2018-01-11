pragma solidity ^0.4.17;

import './zeppelin/lifecycle/Killable.sol';


contract Vote is Killable {

    struct sujet {
        mapping( address => bool ) participants;
        string titre;
        int128 nbVote;
        int128 currentResult;
        bool isClosed;
    }

    sujet currentVote;

    /************************
            EVENTS
    ************************/

    /* fired when user has voted */
    event Voted (address voter, bool vote, bool currentResult);

    /* fired when owner end the vote */
    event VoteClose (bool currentResult);

    /************************
            MODIFIERS
    ************************/

    modifier onlyOwner {
        require( msg.sender == owner );
        _;
    }

    modifier hasNotVoted {
        require( !currentVote.participants[msg.sender] );
        _;
    }

    modifier isNotClosed {
        require( !currentVote.isClosed );
        _;
    }


    function Vote() public {
        currentVote.nbVote = 0;
        currentVote.currentResult = 0;
        currentVote.isClosed = false;
    }

    function closeVote()
    public
    onlyOwner
    payable {
        currentVote.isClosed = true;
        VoteClose( currentResult() );
    }

    function participate(bool vote)
    payable
    isNotClosed
    hasNotVoted
    public {
        currentVote.participants[msg.sender] = vote;
        if( vote == true ){
            currentVote.currentResult++;
        } else {
            currentVote.currentResult--;
        }
        Voted(msg.sender, vote, currentResult() );
    }

    function currentResult() public view returns ( bool ) {
        if( currentVote.currentResult > 0 ) return true;
        return false;
    }

    function getVote(address _voter)
    view
    public
    returns ( bool ){
        return (currentVote.participants[_voter] );
    }


}