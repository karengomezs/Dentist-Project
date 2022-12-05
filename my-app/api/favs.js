export function saveDentist(dentist) {
    //si lo de la izquierda es false value, tome lo de la derecha
    const prevDentist = readDentists()
    const dentistExist = prevDentist.find((dent) => {
        return dent.id === dentist.id
    })

    let arrayDentists = [...prevDentist];

    if (!dentistExist) {
        arrayDentists.push(dentist)
    } else {
        arrayDentists = arrayDentists.filter((dent) => {
            return dent.id !== dentist.id
        })
    }


    localStorage.setItem("dentist", JSON.stringify(arrayDentists))
}

export function readDentists() {
    const getDentist = localStorage.getItem("dentist")
    return JSON.parse(getDentist) || []
}