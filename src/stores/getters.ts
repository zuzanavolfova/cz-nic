import dataList from './../assets/data/domain-detail.json';

export const getData = async () => {
    try {
        const response = await fetch('https://zuzanavolfova.github.io/data/domain-detail.json',
             {
                mode: 'no-cors',
                method: "get",
                // headers: {
                //      "Content-Type": "application/json"
                // },
             });
        console.log(response);
        
        if (!response.ok) {
            throw new Error(`Data could not be loaded: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error loading json:', error);
    }
}


export const getDataTemp = () => {
   return dataList
}



