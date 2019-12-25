export default function EditQuery(query){
    return query.replace(/ /g,"_").replace(/'/g,"");
}