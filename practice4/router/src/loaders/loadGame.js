import games from '../database.json'

export default function loadGame({params}){
 const game = games.find(g => g.id === +params.gameId)
 if(!game){
  throw new Response("404 Not found",{status:404})
 }
 return game;
}