import { heroes } from '../data/Heroes'


export const getHeroesByPublisher = ( publisher ) => {

    const validPublishers = ['DC Comics', 'Marvel Comics']
    if (!validPublishers.includes(publisher)) {
        throw new Error (`${ publisher} is not valid publisher`)
    }

    return heroes.filter( heroes => heroes.publisher === publisher)
}
