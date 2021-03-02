/* 
    Function to separate out each performance into a new event 

    FIXME: Thought...
        What if one distinct event has a performances in 2021 and 2022
        and then the next distinct event has its first perf. in 2021...
        Will this then create 2 2021 year cards?
        And eventually a second 2022 year card...?
*/
const separatePerformances = (list, future) => {
    // set non-possible current year so first date is logged as a new date
    let currentYear = 0
    const newList = []
    // for each unique/distinct event
    list.forEach(uniqueEvent => {
        // cycle through the array of performances
        uniqueEvent.performances.forEach(performance => {
            // get the "fullYear" i.e. "2021"
            const thisYear = new Date(performance.seconds * 1000).getFullYear()
            // if the last event wasn't this year, make an object with type: 'year'
            if(thisYear !== currentYear){
                newList.push({
                    type: 'year',
                    year: thisYear,
                    performanceDate: new Date(`January 1, ${thisYear} 00:00:00`).getTime() / 1000
                })
            }
            // Either way, make a new event card for this performance
            newList.push({
                type: 'event',
                performanceDate: performance.seconds,
                ...uniqueEvent
            })

            // Set currentYear to the year of the performance we just handled
            currentYear = thisYear
        })
    })

    // return in order of each individual performance
    const now = parseInt(new Date().getTime() / 1000)
    const newerList =  newList
        .filter(a => {
            return future 
                ? a.performanceDate >= now
                : a.performanceDate < now
        })
        .sort((a,b)=>{
            return a.performanceDate - b.performanceDate
        })

    // IF the first itme in the new, ordered list, 
    // which only shows past/future events dependent on user's selection
    // ISN'T an object of type: 'year'
    // THEN make one for the year the list starts in and prepend it to the array
    // FIXME: I really didn't have to create a new variable for this...
    if(newerList[0].type !== 'year'){
        newerList.unshift({
            type: 'year',
            year: new Date(newerList[0].performanceDate * 1000).getFullYear()
        })
    }
    
    return newerList
}

export { separatePerformances }