export default function parseGanres(film, ganres) { 
  
  return ganres.filter(ganre => {
    if (film.includes(ganre.id)) {
      return ganre.name
    }
  }).map(element => element.name).slice(0, 2).join(', ');   
  
}
