export interface Page<T>{
    info:{
        currentPage:number,
        count:number,
        pages:number
    },
    result:T[]
}