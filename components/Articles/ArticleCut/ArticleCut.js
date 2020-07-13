export default function ArticleCut(text){
    let box = document.querySelector('div.articleBlock');
    console.log(box)
    return text.substring(0,511) + '...';
}