const users = [
        ["1", "Alice Johnson", "25", "alice.johnson@example.com"],
        ["2", "Bob Smith", "30", "bob.smith@example.com"],
        ["3", "Charlie Brown", "35", "charlie.brown@example.com"],
        ["4", "Diana Prince", "28", "diana.prince@example.com"],
        ["5", "Ethan Hunt", "40", "ethan.hunt@example.com"],
        ["6", "Fiona Gallagher", "22", "fiona.gallagher@example.com"],
        ["7", "George Miller", "33", "george.miller@example.com"],
        ["8", "Hannah Baker", "27", "hannah.baker@example.com"],
        ["9", "Ian Wright", "29", "ian.wright@example.com"],
        ["10", "Julia Roberts", "31", "julia.roberts@example.com"]
    ].map(([id, name, age, email]) => ({ id, name, age, email }))

console.log(JSON.stringify(users, null, 2))