// const queryUrlDev = {
//     addRreAdmin:'https://api.defender.openzeppelin.com/autotasks/af588e0e-8a73-4b9d-b52c-f2da62fabcf6/runs/webhook/78bdf32b-5b19-4c05-a860-89af1772220b/HERMZRAgNM8esr8TJ6LCt9',
//     HashJoinde: 'https://api.defender.openzeppelin.com/autotasks/f6ed9198-256b-4ea0-9a78-256b3108430c/runs/webhook/78bdf32b-5b19-4c05-a860-89af1772220b/T9AEyJpfx6om6iqDm6iayx',
// }

// const queryUrlPro = {
//     addRreAdmin:'https://api.defender.openzeppelin.com/autotasks/af588e0e-8a73-4b9d-b52c-f2da62fabcf6/runs/webhook/78bdf32b-5b19-4c05-a860-89af1772220b/HERMZRAgNM8esr8TJ6LCt9',
//     HashJoinde: 'https://api.defender.openzeppelin.com/autotasks/f6ed9198-256b-4ea0-9a78-256b3108430c/runs/webhook/78bdf32b-5b19-4c05-a860-89af1772220b/T9AEyJpfx6om6iqDm6iayx',
// }

const queryUrlDev = {
    addRreAdmin:'/autotasks/af588e0e-8a73-4b9d-b52c-f2da62fabcf6/runs/webhook/78bdf32b-5b19-4c05-a860-89af1772220b/HERMZRAgNM8esr8TJ6LCt9',
    HashJoinde: '/autotasks/f6ed9198-256b-4ea0-9a78-256b3108430c/runs/webhook/78bdf32b-5b19-4c05-a860-89af1772220b/T9AEyJpfx6om6iqDm6iayx',
}

const queryUrlPro = {
    addRreAdmin:'/autotasks/af588e0e-8a73-4b9d-b52c-f2da62fabcf6/runs/webhook/78bdf32b-5b19-4c05-a860-89af1772220b/HERMZRAgNM8esr8TJ6LCt9',
    HashJoinde: '/autotasks/f6ed9198-256b-4ea0-9a78-256b3108430c/runs/webhook/78bdf32b-5b19-4c05-a860-89af1772220b/T9AEyJpfx6om6iqDm6iayx',
}


const queryUrl = process.env.NODE_ENV == 'development' ? queryUrlDev : queryUrlPro;
export default queryUrl;
