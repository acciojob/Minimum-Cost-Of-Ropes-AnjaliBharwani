
function findMinCost(arr) {
    if (arr.length === 0) {
        return 0;
    }

    arr.sort((a, b) => a - b);

    let minCost = 0;
    let first = arr[0];
    let second = arr[1];

    for (let i = 2; i < arr.length; i++) {
        minCost += first + second;
        first = second;
        second = arr[i];
    }

    minCost += first + second;

    return minCost;
}

function main() {
    const input = document.getElementById("input").value;
    const arr = input.split(",").map(Number);
    const result = findMinCost(arr);
    document.getElementById("result").innerText = result;
}

document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
    main();
});