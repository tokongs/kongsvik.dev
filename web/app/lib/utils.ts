const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export const dateToDisplayString = (date: Date): string => `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`