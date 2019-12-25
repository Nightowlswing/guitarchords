export default function EditDir(dir){
    dir = dir.split('/');
    return dir[dir.length - 1].replace(/_/g," ");
}