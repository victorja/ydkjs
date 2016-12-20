	function calcTax(expenses){
		expenses= expenses + (expenses * tax);
			return expenses;
	}

	function formatAmount(amount){
		return "$" + amount.toFixed( 2 );
	}


var bankAcc=prompt("How much money do you have in the bank?");
var phones=0;
var accesories=0;
var totalExp=0;

const telefonoP=4000;
const accesorioP=500;
const spendingThreshold=40000;
const tax=0.08;
const initialBank=bankAcc;

while(bankAcc>=telefonoP){
phones++;
totalExp=totalExp+telefonoP;
bankAcc=bankAcc-telefonoP;

	if(totalExp<spendingThreshold){
		accesories++;
		totalExp=totalExp+accesorioP;
		bankAcc=bankAcc-accesorioP;
	}	
}

		totalExp=calcTax(totalExp);

console.log("Your purchase: "+ formatAmount(totalExp) );

	if(totalExp>initialBank){
		console.log("You can't pay, you owe:" + formatAmount(totalExp-initialBank));
	}else{
		console.log("Thank you for purchasing");
	}


