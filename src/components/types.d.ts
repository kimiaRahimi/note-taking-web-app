export interface IActiveState{
    activeStatus:{
        allNotes:boolean,
        archiveNote:boolean
    }
}

export interface IRootState{
    active:IActiveState
}