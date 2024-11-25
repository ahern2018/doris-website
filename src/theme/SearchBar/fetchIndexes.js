import lunr from 'lunr';
import { searchIndexUrl } from '../../utils/proxiedGenerated';
const host = process.env.TEST_ENV_URL || 'https://cdnd.selectdb.com';
export async function fetchIndexes(baseUrl) {
    if (process.env.NODE_ENV === 'production') {
        // const json = await (await fetch(`${baseUrl}${searchIndexUrl}`)).json();
        const json = await (await fetch(`${host}${baseUrl}${searchIndexUrl}`)).json();
        const wrappedIndexes = json.map(({ documents, index }, type) => ({
            type: type,
            documents,
            index: lunr.Index.load(index),
        }));
        const zhDictionary = json.reduce((acc, item) => {
            for (const tuple of item.index.invertedIndex) {
                if (/\p{Unified_Ideograph}/u.test(tuple[0][0])) {
                    acc.add(tuple[0]);
                }
            }
            return acc;
        }, new Set());
        return {
            wrappedIndexes,
            zhDictionary: Array.from(zhDictionary),
        };
    }
    // The index does not exist in development, therefore load a dummy index here.
    return {
        wrappedIndexes: [],
        zhDictionary: [],
    };
}
