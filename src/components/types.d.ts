export interface IActiveState{
    activeStatus:{
        allNotes:boolean,
        archiveNote:boolean
    }
}


export interface ICreateNote{
    isShowCreateNote :boolean
}


export interface IRootState{
    active:IActiveStateو
    showCreateNote : ICreateNote
}
