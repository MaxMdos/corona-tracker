export async function getData(){
    const res = await fetch('https://covid19.mathdro.id/api', {mode: 'no-cors'})
    const data = await res.json()
    return data;
}