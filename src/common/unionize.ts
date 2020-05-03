import { unionize as originalUnionize, SingleValueRec } from 'unionize';

export function unionize<Record extends SingleValueRec>(record: Record) {
    return originalUnionize(record, {
        tag: 'type',
        value: 'payload'
    });
}

