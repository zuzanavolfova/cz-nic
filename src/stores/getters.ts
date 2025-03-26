//get data from backend
export const getData = async () => {
    try {
        const response = await fetch('https://raw.githubusercontent.com/zuzanavolfova/data/refs/heads/main/domain-detail.json',
             { method: "get" });
        if (!response.ok) {
            throw new Error(`Data could not be loaded: ${response.status}`);
        }       
        return response.json();
    } catch (error) {
        console.error('Error loading json:', error);
    }
}