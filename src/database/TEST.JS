const Database = require('./db');
const createProffy = require('./createProffy')

Database.then(async (db)=>{

    proffyValue={
        name: "Diego Fernandes",
        avatar: "https://github.com/diego3g.png", 
        whatsapp: "51900000000", 
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laborat"
    }

    classValue={
        subject: "Química", 
        cost: "20", 
    }

    classScheduleValues=[{
        weekday:1,
        time_from:720,
        time_to:1220,
    },
    {
        weekday:0,
        time_from:720,
        time_to:1220,
    }
    ]

    const selectedProffys=await db.all("Select from * proffys")
    console
})