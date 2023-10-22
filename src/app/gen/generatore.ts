export interface  servicegeneratore
{
    getById(id : number) : any;
    findAll()  : any;
    saveOrUpdate (data: any)  : any;
    deleteById (id : number) : any;
    deleteAll ()  : any;
    url : any;
}