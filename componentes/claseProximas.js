export default class Proximas{

    
    async getProximas(apiProximasURL) {
        try {
            const response =  await fetch(apiProximasURL)
            if (!response.ok) {
                throw new Error(`Error es ${response.status}`)
            }else{
                return await response.json()            
            }
        } catch(error) {
            console.error(error)
        }
    }

    async renderProximas(apiProximasURL, html, idElemento){
        let proximas = await this.getProximas(apiProximasURL)
        if(proximas){
            var renderArray = proximas.results.map(html)
            
            var renderJoin = renderArray.join('')
    
            let lista = document.getElementById(idElemento)
            lista.innerHTML = renderJoin
            
        }  
    }

}
