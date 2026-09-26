function countLetter(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i).toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }
    return count;
}

function getRow(firstRow, secondRow, targetLetter) {
    const count1 = countLetter(firstRow, targetLetter);
    const count2 = countLetter(secondRow, targetLetter);

    if (count1 > count2) {
        return firstRow;
    } else if (count2 > count1) {
        return secondRow;
    } else {
        return "Кількість літер однакова.";
    }
}

function runTask1() {
    const row1 = prompt("Введіть перший рядок:", "Slow and steady wins the race");
    const row2 = prompt("Введіть другий рядок:", "You can say that again");
    const letter = prompt("Яку літеру будемо рахувати?", "a");

    if (row1 && row2 && letter) {
        const result = getRow(row1, row2, letter);
        alert(`Рядок переможець:\n${result}`); 
    }
}
function formattedPhone(phone) {
    let cleaned = phone.replace(/\D/g, '');
    let normalized = "";

    if (cleaned.length === 12 && cleaned.startsWith("380")) {
        normalized = cleaned; 
    } else if (cleaned.length === 11 && cleaned.startsWith("80")) {
        normalized = "3" + cleaned; 
    } else if (cleaned.length === 10 && cleaned.startsWith("0")) {
        normalized = "38" + cleaned; 
    } else {
        return "Помилка: формат функції неправильний!";
    }

    // Правила форматування[cite: 2]:
    const country = "+38"; // після +38 має бути пропуск[cite: 2]
    const operator = normalized.substring(2, 5); // три цифри (код оператору зв’язку) в круглих дужках[cite: 2]
    const part1 = normalized.substring(5, 8); // три цифри[cite: 2]
    const part2 = normalized.substring(8, 10); // мінус та цифри[cite: 2]
    const part3 = normalized.substring(10, 12); // чотири цифри в кінці (розбиті на 2-2)[cite: 2]

    return `${country} (${operator}) ${part1}-${part2}-${part3}`;
}

function runTask2() {
    const phoneInput = prompt("Введіть номер телефону (наприклад: 80971234567 або 0671234567):");
    
    if (phoneInput) {
        const result = formattedPhone(phoneInput);
        alert(`Відформатований номер:\n${result}`);
    }
}