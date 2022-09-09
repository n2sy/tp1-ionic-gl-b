const intituleVal = document.getElementById('intitule');
const sommeVal = document.getElementById('somme');
const btnAdd = document.getElementById('btnAjouter');
const btnDelete = document.getElementById('btnEffacer');

const listDep = document.getElementById('listDep');

const spanDep = document.getElementById('total');

var total = 0;

btnAdd.addEventListener('click', () => {
	console.log(intituleVal.value, sommeVal.value);

	if(intituleVal.value.trim().length == 0 || sommeVal.value.trim().length == 0) {
		presentAlert();
		return ;
	}

	//let msg = intituleVal.value + ' : ' + sommeVal.value + ' $';
	let msg = `${intituleVal.value} : ${sommeVal.value} $`; // Template string
	
	const newLabel = document.createElement('ion-label');
	newLabel.textContent = msg;
	const newItem = document.createElement('ion-item');
	newItem.appendChild(newLabel);

	listDep.appendChild(newItem);

	//total += Number(sommeVal.value);
	total += +sommeVal.value;

	spanDep.textContent = total + '$';
	clear();


})
function clear() {
	intituleVal.value = '';
	sommeVal.value='';
}

btnDelete.addEventListener('click', clear);


function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Alert!';
//    alert.subHeader = 'subheader!';
    alert.message = 'Veuillez saisir les deux champs!';

    alert.buttons = [
    {
    	text : 'Yes',
    	handler : () => {
    		console.log('Yes')
    	}
    },
    {
    	text : 'No',
    	//role : 'cancel'
    	handler : () => {
    		console.log('No')
    	}
    }];

    document.body.appendChild(alert);
    alert.present();
}