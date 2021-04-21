export default class Populares{
    
    
    async getPopulares(apiPopularesURL) {
        try {
            const response =  await fetch(apiPopularesURL)
            if (!response.ok) {
                throw new Error(`Error es ${response.status}`)
            }else{                
                return await response.json()            
            }
        } catch(error) {
            console.error(error)
        }
    }

    async renderPopulares(apiPopularesURL, html, idElemento){
        let populares = await this.getPopulares(apiPopularesURL)
        //console.log(populares)
        if(populares){
            var renderArray = populares.results.map(html)
            
            var renderJoin = renderArray.join('')
    
            let lista = document.getElementById(idElemento)
            lista.innerHTML = renderJoin
            
        }  
    }

}
