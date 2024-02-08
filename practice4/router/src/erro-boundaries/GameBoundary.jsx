import { isRouteErrorResponse, useRouteError } from "react-router-dom"

export default function GameBoundary(){
  const error = useRouteError()
  if(isRouteErrorResponse(error)){
    switch (error) {
      case 404:
        return <h2>Oops. Produto não encontrado!</h2>
      case 401:
        return <h2>Você não está autorizado.</h2> 
      case 400:
        return <h2>Parece que algo deu errado na Requisição</h2>
      case 500:
        return <h2>Erro interno no servidor</h2>
    }
  }

  return <h2>Algo deu errado.</h2>
}