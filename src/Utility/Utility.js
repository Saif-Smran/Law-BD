const getStoredData = (list) => {

    const storData = localStorage.getItem(list)

    if (storData) {
        const storedData = JSON.parse(storData)
        return storedData
    } else {
        return []
    }
}

const storeDataToDB = (id, list) => {
    const storedData = getStoredData(list)
    storedData.push(id)
    const data = JSON.stringify(storedData)
    localStorage.setItem(list, data)
}

const removeDataFromDB = (id, list) => {
    const storedData = getStoredData(list)

    if (storedData.includes(id)) {
        const newStoredData = storedData.filter(bookId => bookId !== id)
        const data = JSON.stringify(newStoredData)
        localStorage.setItem(list, data)
        return newStoredData
    }
}

export { storeDataToDB, getStoredData, removeDataFromDB }