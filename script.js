function calculate() {
    const doughCount = document.getElementById('doughCount').value;
    const doughWeight = document.getElementById('doughWeight').value;
    const aataRatio = document.getElementById('aataRatio').value;
    const waterRatio = document.getElementById('waterRatio').value;

    if (!doughCount || !doughWeight || !aataRatio || !waterRatio) {
        document.getElementById('result').innerText = "Please fill in all fields.";
        document.getElementById('result').className = "error";
        return;
    }

    const totalRatio = parseFloat(aataRatio) + parseFloat(waterRatio);
    const totalWeight = doughCount * doughWeight;
    const aata = (totalWeight * aataRatio) / totalRatio;
    const water = (totalWeight * waterRatio) / totalRatio;

    document.getElementById('result').innerText = 
        `For ${doughCount} dough(s), you need ${aata.toFixed(2)} grams of aata and ${water.toFixed(2)} grams of water.`;
    document.getElementById('result').className = "";
}
