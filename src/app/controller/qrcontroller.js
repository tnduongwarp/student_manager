import NodeCache from "node-cache";
import { VietQR } from "vietqr";

 
    const vietQR = new VietQR({
            clientID: 'de8a0804-a76d-41e5-8ad6-31503ce7d5f4',
            apiKey: '17c29f09-4ea2-4417-b9c2-7f020d35de42',
        })
    
    const cache = new NodeCache({stdTTL: 86400});
    
        
    
      async function getAllBank(req, res){
        const cachedData = cache.get('banks_data');
        if(cachedData){
            return res.status(200).json(cachedData);
        }
        else{
                console.log('chua co ')
                vietQR.getBanks().then(banks => {            
                cache.set('banks_data', banks.data);
                return res.status(200).json(banks.data)
            })
        }
    };
    
      async function getQrBase64(req, res){
        const input= req.body;
        
        
        vietQR.genQRCodeBase64(input)
            .then(data =>{
                console.log(data.data.data)
                res.status(201).json(data.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    };
        


export {getAllBank, getQrBase64} ;