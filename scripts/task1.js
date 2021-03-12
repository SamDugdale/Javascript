
alert('Welcome to my JS testing'); 
console.log('Secret Message');

// document.write('<h2>Secret message</h2>')

const bills = 34;
const tips = (bills * 22) / 100;

const totals = (bills + tips).toFixed(2);


function myFunction() {
    document.getElementById("calculate")
    alert(
            'Your total bill (£' + bills + '), with tip (£' + tips + '), is £' + totals + ''
)

  }

