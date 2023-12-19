const kindSelect = document.querySelector('#kind-select');
const timeSelect = document.querySelector('#time-select');
const sumInput = document.querySelector('#sum');
const outputBox = document.querySelector('#output-box');

const kindToTime = {
  пополняемый: [
    { value: '6 месяцев', percentage: 20 },
    { value: '1 год', percentage: 22 },
    { value: '1,5 года', percentage: 15 },
    { value: '2 года', percentage: 10 },
  ],
  срочный: [
    { value: '3 месяца', percentage: 20 },
    { value: '6 месяцев', percentage: 22 },
    { value: '9 месяцев', percentage: 23 },
    { value: '1 год', percentage: 24 },
    { value: '1,5 года', percentage: 18 },
    { value: '2 года', percentage: 15 },
  ],
};

if (kindSelect && timeSelect && sumInput && outputBox) {
  kindSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    const optionList = kindToTime[value].map(
      ({ value }) => `<option value="${value}">${value}</option>`
    );

    timeSelect.innerHTML = optionList.join('');
    timeSelect.disabled = false;
  });

  timeSelect.onchange = () => {
    sumInput.disabled = false;
  };

  sumInput.addEventListener('change', (e) => {
    console.log('ee');
    const sum = +e.target.value;
    const percentage = kindToTime[kindSelect.value].find(
      (option) => option.value === timeSelect.value
    ).percentage;

    const resSum = sum + sum * percentage;
    outputBox.innerHTML = `
		<div>
			<p>Вклад "${kindSelect.value}" на срок "${timeSelect.value}" на сумму ${sum} руб.</p>
			<br />
			<p>В конце срока вы получите ${resSum} руб.</p>
		</div>
		`;
  });
}
