const tips = [
    {
        percent: '5%',
        percentage: 5
    },
    {
        percent: '10%',
        percentage: 10
    },
    {
        percent: '15%',
        percentage: 15
    },
    {
        percent: '25%',
        percentage: 25
    },
    {
        percent: '50%',
        percentage: 15
    },
    {
        percent: 'Custom'
    },
];

let i = 0;

for ( i; i <= tips.length - 1; i++ )
{
    let tipLabel = `<div class='tip' onclick='per(this)'>${ tips[ i ].percent }</div>`;
    document.querySelector( '.tip-labels' ).innerHTML += tipLabel;
}

let billPerPerson;
let percent = 0;
let tipAmountPerPerson;


setInterval( () =>
{
    let bill = document.querySelector( '#bill' ).value;
    let people = document.querySelector( '#people' ).value;
    document.getElementsByTagName( 'button' )[ 0 ].disabled = true;
    if ( bill !== '' && people !== '' )
    {
        document.getElementsByTagName( 'button' )[ 0 ].disabled = false;
        billPerPerson = bill / people;
        if ( percent > 0 )
        {
            tipAmountPerPerson = percent * billPerPerson;
            tipAmountPerPerson = tipAmountPerPerson.toFixed(2);
            document.querySelector( '.tip-amount-2' ).innerHTML = `$${ tipAmountPerPerson }`;
            let total = (parseFloat(tipAmountPerPerson) + parseFloat(billPerPerson)).toFixed(2);
            document.querySelector('.tip-total-2').innerHTML = `$${total}`;
        }
    }
}, 500);

function reset ()
{
    document.querySelector( '#bill' ).value = '';
    document.querySelector( '#people' ).value = '';
    document.querySelector( '.tip-amount-2' ).innerHTML = `$0.00`;
    document.querySelector( '.tip-total-2' ).innerHTML = `$0.00`;
    let nodes = document.querySelectorAll( '.tip' );
    for ( let j = 0; j < nodes.length-1; j++ )
    {
        nodes[j].style.backgroundColor = 'hsl(183, 100%, 15%)';
        nodes[j].style.color = 'hsl(0, 0%, 100%)';
    }
}

function per ( self )
{
    if ( self.innerText === 'Custom' )
    {
        return alert('Custom is not available!')
    }
    let nodes = document.querySelectorAll( '.tip' );
    for ( let j = 0; j < nodes.length-1; j++ )
    {
        nodes[j].style.backgroundColor = 'hsl(183, 100%, 15%)';
        nodes[j].style.color = 'hsl(0, 0%, 100%)';
    }
    self.style.backgroundColor = 'hsl(172, 67%, 45%)';
    self.style.color = 'hsl(183, 100%, 15%)';
    self = self.innerText;
    
    percent = self.replace( '%', '' ) / 100;
    if ( billPerPerson )
    {
        tipAmountPerPerson = percent * billPerPerson;
        tipAmountPerPerson = tipAmountPerPerson.toFixed(2);
        document.querySelector('.tip-amount-2').innerHTML = `$${tipAmountPerPerson}`;
        let total = (parseFloat(tipAmountPerPerson) + parseFloat(billPerPerson)).toFixed(2);
        document.querySelector('.tip-total-2').innerHTML = `$${total}`;
    }
    
}